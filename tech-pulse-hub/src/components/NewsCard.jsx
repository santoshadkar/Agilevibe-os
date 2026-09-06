import React, { useState } from 'react';
import { Bookmark, Share2, ExternalLink, ChevronDown, ChevronUp, Clock, Shield, Cpu, Lock, Zap, Cloud, Scale, Database, Atom, Leaf } from 'lucide-react';

export function NewsCard({ article, onToggleBookmark }) {
  const [showTakeaways, setShowTakeaways] = useState(true);

  const getCategoryIcon = (cat) => {
    switch (cat) {
      case 'ai': return <Cpu size={14} />;
      case 'cybersecurity': return <Shield size={14} />;
      case 'security': return <Lock size={14} />;
      case 'agile': return <Zap size={14} />;
      case 'cloud': return <Cloud size={14} />;
      case 'governance': return <Scale size={14} />;
      case 'data': return <Database size={14} />;
      case 'quantum': return <Atom size={14} />;
      case 'greentech': return <Leaf size={14} />;
      default: return <Cpu size={14} />;
    }
  };

  const formattedDate = new Date(article.publishedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.summary,
        url: article.url
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(`${article.title} - ${article.url}`);
      alert('Article link copied to clipboard!');
    }
  };

  return (
    <div className="news-card">
      <div>
        <div className="card-top">
          <span className={`cat-badge ${article.category}`}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              {getCategoryIcon(article.category)} {article.categoryName}
            </span>
          </span>
          <span className="impact-tag">[{article.impact}]</span>
        </div>

        <h3 className="card-title">{article.title}</h3>
        <p className="card-summary">{article.summary}</p>

        {article.takeaways && article.takeaways.length > 0 && (
          <div className="takeaways-box">
            <div 
              className="takeaways-title"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}
              onClick={() => setShowTakeaways(!showTakeaways)}
            >
              <span>⚡ Key Takeaways</span>
              <span style={{ marginLeft: 'auto' }}>
                {showTakeaways ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </span>
            </div>

            {showTakeaways && (
              <div style={{ marginTop: '6px' }}>
                {article.takeaways.map((item, idx) => (
                  <div key={idx} className="takeaway-item">{item}</div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      <div className="card-footer">
        <div className="source-info">
          <strong>{article.source}</strong>
          <span>•</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Clock size={12} /> {article.readTime} ({formattedDate})
          </span>
        </div>

        <div className="card-actions">
          <button 
            className={`icon-btn ${article.bookmarked ? 'active' : ''}`}
            onClick={() => onToggleBookmark(article.id)}
            title="Save to Reading List"
          >
            <Bookmark size={18} fill={article.bookmarked ? "currentColor" : "none"} />
          </button>
          
          <button 
            className="icon-btn"
            onClick={handleShare}
            title="Share Signal"
          >
            <Share2 size={18} />
          </button>

          <a 
            href={article.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="icon-btn"
            title="Open Original Source"
            style={{ display: 'inline-flex', alignItems: 'center' }}
          >
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
