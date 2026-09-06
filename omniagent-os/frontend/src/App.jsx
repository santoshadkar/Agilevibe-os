import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ChatInterface from './components/ChatInterface';
import GraphVisualizer from './components/GraphVisualizer';
import KnowledgeVault from './components/KnowledgeVault';
import MCPHub from './components/MCPHub';
import HITLQueue from './components/HITLQueue';
import WebhookCronCenter from './components/WebhookCronCenter';

const API_BASE = 'http://localhost:8000/api';

export default function App() {
  const [activeTab, setActiveTab] = useState('chat');
  const [threadId, setThreadId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [currentNode, setCurrentNode] = useState('supervisor');
  const [executionTrace, setExecutionTrace] = useState([]);
  const [supervisorPlan, setSupervisorPlan] = useState([]);
  const [pendingApprovals, setPendingApprovals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [documents, setDocuments] = useState([]);
  const [mcpServers, setMcpServers] = useState([]);
  const [mcpTools, setMcpTools] = useState([]);
  const [cronJobs, setCronJobs] = useState([]);

  // Fetch initial data
  useEffect(() => {
    fetchDocuments();
    fetchMcpInfo();
    fetchHitlPending();
    fetchCronJobs();
  }, []);

  const fetchDocuments = async () => {
    try {
      const res = await fetch(`${API_BASE}/rag/documents`);
      const data = await res.json();
      setDocuments(data.documents || []);
    } catch (err) {
      console.log('Error loading documents', err);
    }
  };

  const fetchMcpInfo = async () => {
    try {
      const sRes = await fetch(`${API_BASE}/mcp/servers`);
      const sData = await sRes.json();
      setMcpServers(sData.servers || []);

      const tRes = await fetch(`${API_BASE}/mcp/tools`);
      const tData = await tRes.json();
      setMcpTools(tData.tools || []);
    } catch (err) {
      console.log('Error loading MCP info', err);
    }
  };

  const fetchHitlPending = async () => {
    try {
      const res = await fetch(`${API_BASE}/hitl/pending`);
      const data = await res.json();
      setPendingApprovals(data.pending_approvals || []);
    } catch (err) {
      console.log('Error loading HITL pending', err);
    }
  };

  const fetchCronJobs = async () => {
    try {
      const res = await fetch(`${API_BASE}/loops/cron`);
      const data = await res.json();
      setCronJobs(data.cron_jobs || []);
    } catch (err) {
      console.log('Error loading Cron jobs', err);
    }
  };

  const handleSendMessage = async (text) => {
    setIsLoading(true);
    try {
      const res = await fetch(`${API_BASE}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          thread_id: threadId,
          message: text
        })
      });
      const data = await res.json();
      
      setThreadId(data.thread_id);
      const state = data.state;
      setMessages(state.messages || []);
      setCurrentNode(state.current_node || 'completed');
      setExecutionTrace(state.execution_trace || []);
      setSupervisorPlan(state.supervisor_plan || []);
      
      fetchHitlPending();
    } catch (err) {
      console.error('Chat error', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddDocument = async (docData) => {
    try {
      await fetch(`${API_BASE}/rag/documents`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(docData)
      });
      fetchDocuments();
    } catch (err) {
      console.error('Add document error', err);
    }
  };

  const handleDeleteDocument = async (docId) => {
    try {
      await fetch(`${API_BASE}/rag/documents/${docId}`, { method: 'DELETE' });
      fetchDocuments();
    } catch (err) {
      console.error('Delete document error', err);
    }
  };

  const handleSearchRag = async (query) => {
    try {
      const res = await fetch(`${API_BASE}/rag/search`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query, top_k: 3 })
      });
      return await res.json();
    } catch (err) {
      console.error('RAG search error', err);
      return { query, results: [] };
    }
  };

  const handleProcessApproval = async (approvalId, action) => {
    try {
      const res = await fetch(`${API_BASE}/hitl/process`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ approval_id: approvalId, action })
      });
      const data = await res.json();
      fetchHitlPending();

      if (threadId) {
        // Refresh thread state
        const tRes = await fetch(`${API_BASE}/chat/${threadId}`);
        const tData = await tRes.json();
        setMessages(tData.state.messages || []);
        setCurrentNode(tData.state.current_node || 'completed');
        setExecutionTrace(tData.state.execution_trace || []);
      }
    } catch (err) {
      console.error('Process approval error', err);
    }
  };

  const handleSendWebhook = async (triggerId, payload) => {
    try {
      const res = await fetch(`${API_BASE}/webhooks/${triggerId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      return await res.json();
    } catch (err) {
      console.error('Webhook error', err);
      return { status: 'error' };
    }
  };

  const handleToggleCron = async (cronId) => {
    try {
      await fetch(`${API_BASE}/loops/cron/${cronId}/toggle`, { method: 'POST' });
      fetchCronJobs();
    } catch (err) {
      console.error('Toggle cron error', err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col space-y-4 pb-8">
      <Navbar
        hitlCount={pendingApprovals.length}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <main className="flex-1 px-4 max-w-7xl w-full mx-auto">
        {activeTab === 'chat' && (
          <ChatInterface
            messages={messages}
            onSendMessage={handleSendMessage}
            isLoading={isLoading}
            supervisorPlan={supervisorPlan}
          />
        )}

        {activeTab === 'graph' && (
          <GraphVisualizer
            currentNode={currentNode}
            executionTrace={executionTrace}
          />
        )}

        {activeTab === 'vault' && (
          <KnowledgeVault
            documents={documents}
            onAddDocument={handleAddDocument}
            onDeleteDocument={handleDeleteDocument}
            onSearch={handleSearchRag}
          />
        )}

        {activeTab === 'mcp' && (
          <MCPHub
            servers={mcpServers}
            tools={mcpTools}
          />
        )}

        {activeTab === 'hitl' && (
          <HITLQueue
            pendingApprovals={pendingApprovals}
            onProcessApproval={handleProcessApproval}
          />
        )}

        {activeTab === 'webhooks' && (
          <WebhookCronCenter
            cronJobs={cronJobs}
            onToggleCron={handleToggleCron}
            onSendWebhook={handleSendWebhook}
          />
        )}
      </main>
    </div>
  );
}
