'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';

// Modern inline SVG icons to avoid import issues
const icons = {
  arrow: (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
    </svg>
  ),
  user: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="8" r="4" />
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
    </svg>
  ),
  // Modern icons for menu items
  blog: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
    </svg>
  ),
  caseStudy: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  webinar: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  ),
  research: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    </svg>
  ),
  calculator: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  assessment: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  solution: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  benchmark: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  partners: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  academy: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M12 14l9-5-9-5-9 5 9 5z" />
      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
    </svg>
  ),
  innovation: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  transformationHub: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
  predictiveAnalytics: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
    </svg>
  ),
  computerVision: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  ),
  processAutomation: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
    </svg>
  ),
  intelligentSearch: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  hybridSolutions: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  edgeComputing: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" />
    </svg>
  ),
  onPremise: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
    </svg>
  ),
  events: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  // Resources menu icons  
  resourceBlog: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
    </svg>
  ),
  resourceCaseStudy: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  resourceWebinar: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  ),
  resourceResearch: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  resourceCalculator: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  // Additional icons for Products menu
  automation: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  mlPlatform: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
    </svg>
  ),
  analytics: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  cloudDeploy: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>
  ),
  security: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  ),
  api: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  data: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>
  ),
  award: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
  // Unique icons for Services menu
  strategy: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  healthcare: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  finance: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  manufacturing: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
  retail: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  technology: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  energy: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  customAI: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
    </svg>
  ),
  mlModels: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    </svg>
  ),
  dataQuality: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  optimization: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  training: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  implementation: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  )
};

const menuData = {
  products: {
    title: 'Products',
    columns: [
      {
        title: 'AI PLATFORMS',
        items: [
          { title: 'Agentic AI Platform', desc: 'Autonomous AI agents', href: '/agentic-ai-platform' },
          { title: 'ML Operations Suite', desc: 'Machine learning lifecycle', href: '/products/mlops' },
          { title: 'Analytics Engine', desc: 'Real-time data insights', href: '/products/analytics' },
          { title: 'Transformation Hub', desc: 'AI transformation toolkit', href: '/enterprise-ai-transformation' }
        ]
      },
      {
        title: 'SOLUTIONS',
        items: [
          { title: 'Process Automation', desc: 'Automate workflows', href: '/solutions/automation' },
          { title: 'Intelligent Search', desc: 'AI-powered search', href: '/solutions/search' },
          { title: 'Predictive Analytics', desc: 'Forecast trends', href: '/solutions/predictive' },
          { title: 'Computer Vision', desc: 'Visual recognition', href: '/solutions/vision' }
        ]
      },
      {
        title: 'DEPLOYMENT',
        items: [
          { title: 'Cloud Deployment', desc: 'AWS, Azure, GCP', href: '/deployment/cloud' },
          { title: 'On-Premise', desc: 'Secure installation', href: '/deployment/on-premise' },
          { title: 'Hybrid Solutions', desc: 'Best of both', href: '/deployment/hybrid' },
          { title: 'Edge Computing', desc: 'Real-time processing', href: '/deployment/edge' }
        ]
      }
    ]
  },
  services: {
    title: 'Services', 
    columns: [
      {
        title: 'CONSULTING',
        items: [
          { title: 'AI Strategy', desc: 'Transformation roadmap', href: '/ai-implementation-strategy' },
          { title: 'Implementation', desc: 'End-to-end deployment', href: '/services/implementation' },
          { title: 'Optimization', desc: 'Performance tuning', href: '/services/optimization' },
          { title: 'Training', desc: 'Team enablement', href: '/services/training' }
        ]
      },
      {
        title: 'INDUSTRIES',
        items: [
          { title: 'Healthcare', desc: 'Medical AI solutions', href: '/industries/healthcare' },
          { title: 'Finance', desc: 'Risk & fraud detection', href: '/industries/finance' },
          { title: 'Manufacturing', desc: 'Smart factory', href: '/industries/manufacturing' },
          { title: 'Retail', desc: 'Customer analytics', href: '/industries/retail' },
          { title: 'Technology', desc: 'SaaS AI integration', href: '/industries/technology' },
          { title: 'Energy', desc: 'Grid optimization', href: '/industries/energy' }
        ]
      },
      {
        title: 'SPECIALIZED',
        items: [
          { title: 'Data Quality', desc: 'Data integrity for AI', href: '/data-quality-ai-solutions' },
          { title: 'Custom AI', desc: 'Tailored solutions', href: '/services/custom-ai' },
          { title: 'ML Models', desc: 'Custom algorithms', href: '/services/ml-development' },
          { title: 'API Integration', desc: 'System connections', href: '/services/api-integration' }
        ]
      }
    ]
  },
  resources: {
    title: 'Resources',
    columns: [
      {
        title: 'LEARNING',
        items: [
          { title: 'Blog', desc: 'Latest insights', href: '/blog' },
          { title: 'Case Studies', desc: 'Success stories', href: '/case-studies' },
          { title: 'Webinars', desc: 'Expert sessions', href: '/webinars' },
          { title: 'Research', desc: 'Technical papers', href: '/resources/research' }
        ]
      },
      {
        title: 'TOOLS',
        items: [
          { title: 'ROI Calculator', desc: 'Investment returns', href: '/ai-roi-calculator' },
          { title: 'AI Assessment', desc: 'Readiness check', href: '/tools/assessment' },
          { title: 'Solution Finder', desc: 'Find right fit', href: '/tools/solution-finder' },
          { title: 'Benchmark', desc: 'Industry standards', href: '/tools/benchmark' }
        ]
      },
      {
        title: 'COMMUNITY',
        items: [
          { title: 'Partners', desc: 'Ecosystem network', href: '/partners' },
          { title: 'Academy', desc: 'Certifications', href: '/academy' },
          { title: 'Innovation Lab', desc: 'Experiments', href: '/lab' },
          { title: 'Events', desc: 'Meetups & conferences', href: '/events' }
        ]
      }
    ]
  },
  company: {
    title: 'Company',
    columns: [
      {
        title: 'ABOUT',
        items: [
          { title: 'Our Story', desc: 'How we started', href: '/about/story' },
          { title: 'Team', desc: 'Meet our experts', href: '/about/team' },
          { title: 'Mission', desc: 'Our vision', href: '/about/mission' },
          { title: 'Careers', desc: 'Join us', href: '/careers' }
        ]
      },
      {
        title: 'CONNECT',
        items: [
          { title: 'Contact', desc: 'Get in touch', href: '/contact' },
          { title: 'Support', desc: '24/7 help', href: '/support' },
          { title: 'Demo', desc: 'See platform', href: '/demo' },
          { title: 'Press', desc: 'Media resources', href: '/press' }
        ]
      }
    ]
  }
};

export default function StableMegaMenu() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navigationRef = useRef<HTMLElement>(null);
  const menuRefs = useRef<{[key: string]: HTMLDivElement | null}>({});
  const buttonRefs = useRef<{[key: string]: HTMLButtonElement | null}>({});

  // #COMPLETION_DRIVE_IMPL: Assuming standard WCAG keyboard navigation patterns
  const handleKeyDown = useCallback((e: KeyboardEvent, menuKey: string) => {
    switch (e.key) {
      case 'Escape':
        setActiveMenu(null);
        buttonRefs.current[menuKey]?.focus();
        break;
      case 'ArrowDown':
        e.preventDefault();
        if (!activeMenu) {
          setActiveMenu(menuKey);
          // Focus first menu item
          setTimeout(() => {
            const firstLink = menuRefs.current[menuKey]?.querySelector('a');
            firstLink?.focus();
          }, 0);
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (activeMenu === menuKey) {
          setActiveMenu(null);
          buttonRefs.current[menuKey]?.focus();
        }
        break;
      case 'ArrowLeft':
      case 'ArrowRight':
        if (!activeMenu) {
          const menuKeys = Object.keys(menuData);
          const currentIndex = menuKeys.indexOf(menuKey);
          const nextIndex = e.key === 'ArrowRight' ? 
            (currentIndex + 1) % menuKeys.length : 
            (currentIndex - 1 + menuKeys.length) % menuKeys.length;
          const nextMenuKey = menuKeys[nextIndex];
          buttonRefs.current[nextMenuKey]?.focus();
        }
        break;
    }
  }, [activeMenu]);

  // #COMPLETION_DRIVE_IMPL: Assuming hover delays are beneficial for UX
  const handleMouseEnter = useCallback((menuKey: string) => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current);
    }
    menuTimeoutRef.current = setTimeout(() => {
      setActiveMenu(menuKey);
    }, 150);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current);
    }
    menuTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 300);
  }, []);

  const handleFocus = useCallback((menuKey: string) => {
    setActiveMenu(menuKey);
  }, []);

  const handleBlur = useCallback((e: React.FocusEvent) => {
    // #COMPLETION_DRIVE_IMPL: Using relatedTarget to handle focus management
    const currentTarget = e.currentTarget;
    const relatedTarget = e.relatedTarget;
    
    setTimeout(() => {
      if (!currentTarget.contains(relatedTarget as Node)) {
        setActiveMenu(null);
      }
    }, 0);
  }, []);

  // Screen reader announcements
  const [announcement, setAnnouncement] = useState('');
  
  useEffect(() => {
    if (activeMenu) {
      setAnnouncement(`${menuData[activeMenu as keyof typeof menuData].title} menu expanded`);
    } else {
      setAnnouncement('');
    }
  }, [activeMenu]);

  // Close menu on escape key globally
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeMenu) {
        setActiveMenu(null);
      }
    };
    
    document.addEventListener('keydown', handleGlobalKeyDown);
    return () => document.removeEventListener('keydown', handleGlobalKeyDown);
  }, [activeMenu]);

  return (
    <>
      {/* Screen reader announcements */}
      <div 
        aria-live="polite" 
        aria-atomic="true" 
        className="sr-only"
      >
        {announcement}
      </div>
      
      <nav 
        ref={navigationRef}
        className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              href="/" 
              className="flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg"
              aria-label="DataTranquil home"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg" aria-hidden="true">DT</span>
              </div>
              <span className="text-xl font-bold text-gray-900">DataTranquil</span>
            </Link>
          </div>

          {/* Main Navigation */}
          <div className="hidden md:flex items-center space-x-1" role="menubar">
            {Object.entries(menuData).map(([key, menu]) => (
              <div 
                key={key}
                className="relative"
                onMouseEnter={() => handleMouseEnter(key)}
                onMouseLeave={handleMouseLeave}
                onFocus={() => handleFocus(key)}
                onBlur={handleBlur}
              >
                <button 
                  ref={(el) => { buttonRefs.current[key] = el; }}
                  className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium flex items-center gap-1.5 group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 rounded-lg transition-all"
                  aria-expanded={activeMenu === key}
                  aria-haspopup="true"
                  aria-controls={`menu-${key}`}
                  onKeyDown={(e) => handleKeyDown(e.nativeEvent, key)}
                  role="menuitem"
                  tabIndex={0}
                >
                  {menu.title}
                  <span 
                    className={`inline-flex transition-all duration-200 ${activeMenu === key ? 'rotate-180' : ''} text-gray-500 group-hover:text-blue-600`}
                    aria-hidden="true"
                  >
                    {icons.arrow}
                  </span>
                </button>
                
                {activeMenu === key && (
                  <div 
                    ref={(el) => { menuRefs.current[key] = el; }}
                    id={`menu-${key}`}
                    className="absolute top-full left-0 mt-1 bg-white shadow-xl border-t-4 border-blue-600 rounded-b-lg" 
                    style={{minWidth: '600px'}}
                    role="menu"
                    aria-labelledby={`menu-button-${key}`}
                  >
                    <div className="p-6">
                      <div className="grid grid-cols-3 gap-8">
                        {menu.columns.map((column, idx) => (
                          <div key={idx} role="group" aria-labelledby={`menu-section-${key}-${idx}`}>
                            <h3 
                              id={`menu-section-${key}-${idx}`}
                              className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3"
                            >
                              {column.title}
                            </h3>
                            <div className="space-y-2" role="none">
                              {column.items.map((item, itemIdx) => {
                                // Map item titles to icons
                                const iconMap: {[key: string]: any} = {
                                  // Products icons
                                  'Agentic AI Platform': icons.automation,
                                  'ML Operations Suite': icons.mlPlatform,
                                  'Analytics Engine': icons.analytics,
                                  'Transformation Hub': icons.transformationHub,
                                  'Process Automation': icons.processAutomation,
                                  'Intelligent Search': icons.intelligentSearch,
                                  'Predictive Analytics': icons.predictiveAnalytics,
                                  'Computer Vision': icons.computerVision,
                                  'Cloud Deployment': icons.cloudDeploy,
                                  'On-Premise': icons.onPremise,
                                  'Hybrid Solutions': icons.hybridSolutions,
                                  'Edge Computing': icons.edgeComputing,
                                  
                                  // Services icons
                                  'AI Strategy': icons.strategy,
                                  'Implementation': icons.implementation,
                                  'Optimization': icons.optimization,
                                  'Training': icons.training,
                                  'Healthcare': icons.healthcare,
                                  'Finance': icons.finance,
                                  'Manufacturing': icons.manufacturing,
                                  'Retail': icons.retail,
                                  'Technology': icons.technology,
                                  'Energy': icons.energy,
                                  'Data Quality': icons.dataQuality,
                                  'Custom AI': icons.customAI,
                                  'ML Models': icons.mlModels,
                                  'API Integration': icons.api,
                                  
                                  // Resources icons
                                  'Blog': icons.blog,
                                  'Case Studies': icons.caseStudy,
                                  'Webinars': icons.webinar,
                                  'Research': icons.research,
                                  'ROI Calculator': icons.calculator,
                                  'AI Assessment': icons.assessment,
                                  'Solution Finder': icons.solution,
                                  'Benchmark': icons.benchmark,
                                  'Partners': icons.partners,
                                  'Academy': icons.academy,
                                  'Innovation Lab': icons.innovation,
                                  'Events': icons.events,
                                  
                                  // Company icons
                                  'Our Story': icons.award,
                                  'Team': icons.user,
                                  'Mission': icons.innovation,
                                  'Careers': icons.academy,
                                  'Contact': icons.solution,
                                  'Support': icons.security,
                                  'Demo': icons.webinar,
                                  'Press': icons.blog
                                };
                                const itemIcon = iconMap[item.title] || null;
                                
                                return (
                                  <Link
                                    key={itemIdx}
                                    href={item.href}
                                    className="flex items-start gap-2 p-2 rounded hover:bg-blue-50 focus:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition-colors group"
                                    role="menuitem"
                                    tabIndex={-1}
                                    aria-describedby={`menu-item-desc-${key}-${idx}-${itemIdx}`}
                                  >
                                    {itemIcon && (
                                      <div className="text-blue-500 mt-0.5" aria-hidden="true">
                                        {itemIcon}
                                      </div>
                                    )}
                                    <div className="flex-1">
                                      <div className="font-medium text-gray-900 group-hover:text-blue-600 group-focus:text-blue-600 text-sm">
                                        {item.title}
                                      </div>
                                      <div 
                                        id={`menu-item-desc-${key}-${idx}-${itemIdx}`}
                                        className="text-xs text-gray-500 mt-0.5"
                                      >
                                        {item.desc}
                                      </div>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            <Link 
              href="/docs" 
              className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 rounded-lg transition-all"
              role="menuitem"
            >
              Docs
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <Link 
              href="/portal/login" 
              className="text-gray-700 hover:text-gray-900 font-medium flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg p-2 transition-all"
              aria-label="Login to portal"
            >
              <span aria-hidden="true">{icons.user}</span>
              Login
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-700 hover:text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg px-3 py-2 transition-all"
            >
              Contact
            </Link>
            <Link 
              href="/get-started" 
              className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-medium hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 transition-all"
            >
              Get Started →
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div 
          id="mobile-menu"
          className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t z-40"
          role="menu"
          aria-label="Mobile navigation menu"
        >
          <div className="px-4 py-2 space-y-1">
            {Object.entries(menuData).map(([key, menu]) => (
              <div key={key}>
                <div className="font-semibold text-gray-900 px-3 py-2 text-sm">
                  {menu.title}
                </div>
                {menu.columns.map((column, colIdx) => (
                  <div key={colIdx} className="ml-4">
                    <div className="text-xs font-medium text-gray-500 px-3 py-1 uppercase tracking-wider">
                      {column.title}
                    </div>
                    {column.items.map((item, itemIdx) => (
                      <Link
                        key={itemIdx}
                        href={item.href}
                        className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded"
                        role="menuitem"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            ))}
            <div className="border-t border-gray-200 pt-4">
              <Link
                href="/docs"
                className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded"
                role="menuitem"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Docs
              </Link>
              <Link
                href="/portal/login"
                className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded"
                role="menuitem"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded"
                role="menuitem"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/get-started"
                className="block mx-3 my-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-medium text-center focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
                role="menuitem"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started →
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
    </>
  );
}