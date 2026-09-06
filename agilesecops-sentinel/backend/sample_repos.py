SAMPLE_REPOSITORIES = {
    "FinTech Payment API (Python)": {
        "app/auth.py": """
import sqlite3
import os

# HARDCODED SECRET - Vulnerability
JWT_SECRET_KEY = "super_secret_master_key_12345!"
AWS_ACCESS_KEY = "AKIAIOSFODNN7EXAMPLE"
AWS_SECRET_KEY = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"

def authenticate_user(username, password):
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()
    # SQL INJECTION VULNERABILITY
    query = f"SELECT * FROM users WHERE username = '{username}' AND password = '{password}'"
    print(f"Executing query: {query}")
    cursor.execute(query)
    user = cursor.fetchone()
    conn.close()
    return user
""",
        "app/payments.py": """
import os

def process_refund(refund_id, system_command):
    # COMMAND INJECTION VULNERABILITY
    cmd = f"ping -c 1 {system_command}"
    os.system(cmd)
    return {"status": "processed", "id": refund_id}
"""
    },
    "E-Commerce Portal (Node.js)": {
        "server.js": """
const express = require('express');
const fs = require('fs');
const app = express();

app.get('/user-profile', (req, res) => {
    const name = req.query.name;
    // REFLECTED XSS VULNERABILITY
    res.send(`<h1>Welcome, ${name}</h1><div>Your profile information is updated.</div>`);
});

app.get('/download-report', (req, res) => {
    const file = req.query.filename;
    // PATH TRAVERSAL VULNERABILITY
    const filePath = "/var/www/reports/" + file;
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) res.status(500).send("Error reading file");
        else res.send(data);
    });
});
"""
    },
    "Healthcare Patient Records (Python)": {
        "records_service.py": """
import pickle
import base64

def load_patient_session(cookie_data):
    # INSECURE DESERIALIZATION VULNERABILITY
    decoded = base64.b64decode(cookie_data)
    patient_object = pickle.loads(decoded)
    return patient_object

def get_medical_record(patient_id):
    # BROKEN ACCESS CONTROL - NO AUTH CHECK
    return {"patient_id": patient_id, "diagnosis": "Top Secret Data", "ssn": "999-00-1234"}
"""
    },
    "AI Agent & RAG Service (Python)": {
        "agent_executor.py": """
import os

# OWASP LLM 01: SYSTEM PROMPT INJECTION & UNBOUNDED TOOL EXECUTION
def execute_agent_tool(user_input_prompt):
    # SYSTEM PROMPT INJECTION VULNERABILITY
    system_instruction = "You are a helpful AI. Execute user request."
    full_prompt = system_instruction + "\nUser Request: " + user_input_prompt
    
    # UNBOUNDED COMMAND EXECUTION TOOL CALL
    if "exec:" in user_input_prompt:
        cmd = user_input_prompt.split("exec:")[1]
        # COMMAND INJECTION IN AI TOOL CALL
        os.system(cmd)
    
    return {"response": "Processed prompt", "prompt": full_prompt}
"""
    },
    "Cloud Native Microservice (Go)": {
        "main.go": """
package main

import (
	"fmt"
	"net/http"
)

// HARDCODED VAULT TOKEN
const VaultMasterToken = "hvs.CAESIJ123456789_VaultSecretToken"

def handler(w, r *http.Request) {
	// INSECURE CORS WILDCARD VULNERABILITY
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Credentials", "true")
	fmt.Fprintf(w, "Cloud Microservice Healthy")
}
"""
    },
    "Agile Security Champion & Auth (Python)": {
        "jwt_auth.py": """
import jwt

# OWASP A07: INSECURE JWT ALGORITHM (ALG: NONE BYPASS)
def verify_jwt_token(token_string):
    # INSECURE JWT VERIFICATION - ALLOWS ALG NONE
    decoded = jwt.decode(token_string, options={"verify_signature": False})
    return decoded
"""
    }
}
