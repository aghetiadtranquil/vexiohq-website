'use client';

import { useEffect, useState } from 'react';
import { useClerk, useSignIn } from '@clerk/nextjs';

export default function TestClerkPage() {
  const clerk = useClerk();
  const signIn = useSignIn();
  const [logs, setLogs] = useState<string[]>([]);
  const [windowClerk, setWindowClerk] = useState<any>(null);

  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs(prev => [...prev, `[${timestamp}] ${message}`]);
    console.log(`[${timestamp}] ${message}`);
  };

  useEffect(() => {
    addLog('Component mounted');
    
    // Check window.Clerk directly
    const checkWindow = setInterval(() => {
      if ((window as any).Clerk) {
        addLog('window.Clerk found!');
        setWindowClerk((window as any).Clerk);
        clearInterval(checkWindow);
      }
    }, 500);

    // Clean up after 10 seconds
    setTimeout(() => clearInterval(checkWindow), 10000);
    
    return () => clearInterval(checkWindow);
  }, []);

  useEffect(() => {
    if (clerk) {
      addLog(`clerk object exists: ${!!clerk}`);
      addLog(`clerk.loaded: ${clerk.loaded}`);
    }
  }, [clerk]);

  useEffect(() => {
    if (signIn) {
      addLog(`signIn object exists: ${!!signIn}`);
      addLog(`signIn.isLoaded: ${signIn.isLoaded}`);
    }
  }, [signIn]);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold mb-6">Clerk Debug Page</h1>
      
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">Status</h2>
        <div className="space-y-2">
          <p>✓ useClerk hook: {clerk ? 'Available' : 'Not available'}</p>
          <p>✓ clerk.loaded: {clerk?.loaded ? 'Yes' : 'No'}</p>
          <p>✓ useSignIn hook: {signIn ? 'Available' : 'Not available'}</p>
          <p>✓ signIn.isLoaded: {signIn?.isLoaded ? 'Yes' : 'No'}</p>
          <p>✓ window.Clerk: {windowClerk ? 'Found' : 'Not found'}</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">Environment</h2>
        <div className="space-y-2 font-mono text-sm">
          <p>NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: {process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY?.substring(0, 20)}...</p>
          <p>Script URL: https://flowing-finch-92.clerk.accounts.dev/npm/@clerk/clerk-js@5/dist/clerk.browser.js</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Logs</h2>
        <div className="space-y-1 font-mono text-sm">
          {logs.map((log, i) => (
            <div key={i} className="text-gray-700">{log}</div>
          ))}
        </div>
      </div>
    </div>
  );
}