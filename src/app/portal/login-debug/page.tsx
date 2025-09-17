'use client'

import { useEffect, useState } from 'react'
import { useSignIn, useClerk } from '@clerk/nextjs'

export default function LoginDebugPage() {
  const [debugInfo, setDebugInfo] = useState<string[]>([])
  const [clerkScriptStatus, setClerkScriptStatus] = useState('checking')
  const { isLoaded, signIn, setActive } = useSignIn()
  const clerk = useClerk()

  useEffect(() => {
    const logs: string[] = []
    
    // Check environment
    logs.push(`Environment: ${process.env.NODE_ENV}`)
    logs.push(`Publishable Key: ${process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY?.substring(0, 20)}...`)
    
    // Check window.Clerk
    if (typeof window !== 'undefined') {
      logs.push(`window.Clerk exists: ${!!(window as any).Clerk}`)
      
      // Check for Clerk script tags
      const scripts = Array.from(document.scripts)
      const clerkScripts = scripts.filter(s => 
        s.src.includes('clerk') || 
        s.src.includes('accounts.dev')
      )
      logs.push(`Clerk script tags found: ${clerkScripts.length}`)
      clerkScripts.forEach((script, i) => {
        logs.push(`  Script ${i + 1}: ${script.src}`)
      })
      
      // Check for network errors
      if (clerkScripts.length === 0) {
        logs.push('⚠️ No Clerk scripts found in DOM')
        
        // Try to manually check if Clerk should load
        const expectedDomain = 'flowing-finch-92.clerk.accounts.dev'
        logs.push(`Expected Clerk domain: ${expectedDomain}`)
        
        // Create a test script to verify domain is accessible
        const testScript = document.createElement('script')
        testScript.src = `https://${expectedDomain}/npm/@clerk/clerk-js@5/dist/clerk.browser.js`
        testScript.onload = () => {
          logs.push('✅ Clerk script CAN load from domain')
          setClerkScriptStatus('loaded')
        }
        testScript.onerror = () => {
          logs.push('❌ Clerk script CANNOT load - domain may be invalid')
          setClerkScriptStatus('error')
        }
        document.head.appendChild(testScript)
      }
      
      // Check console for errors
      const originalError = console.error
      console.error = function(...args) {
        logs.push(`Console error: ${args.join(' ')}`)
        originalError.apply(console, args)
      }
    }
    
    setDebugInfo(logs)
  }, [])
  
  useEffect(() => {
    if (isLoaded) {
      setDebugInfo(prev => [...prev, '✅ useSignIn hook is loaded'])
    }
  }, [isLoaded])
  
  useEffect(() => {
    if (clerk?.loaded) {
      setDebugInfo(prev => [...prev, '✅ Clerk object is loaded'])
    }
  }, [clerk?.loaded])

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Clerk Debug Page</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Status</h2>
          <div className="space-y-2">
            <p className={`font-medium ${isLoaded ? 'text-green-600' : 'text-red-600'}`}>
              useSignIn isLoaded: {isLoaded ? '✅ Yes' : '❌ No'}
            </p>
            <p className={`font-medium ${clerk?.loaded ? 'text-green-600' : 'text-red-600'}`}>
              Clerk loaded: {clerk?.loaded ? '✅ Yes' : '❌ No'}
            </p>
            <p className={`font-medium ${
              clerkScriptStatus === 'loaded' ? 'text-green-600' : 
              clerkScriptStatus === 'error' ? 'text-red-600' : 
              'text-yellow-600'
            }`}>
              Clerk Script Status: {clerkScriptStatus}
            </p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Debug Logs</h2>
          <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
            {debugInfo.map((log, i) => (
              <div key={i} className={
                log.includes('✅') ? 'text-green-400' :
                log.includes('❌') ? 'text-red-400' :
                log.includes('⚠️') ? 'text-yellow-400' :
                'text-gray-300'
              }>
                {log}
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Next Steps</h2>
          <div className="prose">
            <ol className="space-y-2">
              <li>Check browser console for any errors (F12)</li>
              <li>Verify Clerk Dashboard settings:
                <ul>
                  <li>Email/Password authentication is enabled</li>
                  <li>Sign-ups are allowed OR test users exist</li>
                  <li>Domain settings allow localhost:3002</li>
                </ul>
              </li>
              <li>If script cannot load, the Clerk application may need to be re-created</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}