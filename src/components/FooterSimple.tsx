'use client';

import Link from 'next/link';

export default function FooterSimple() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">DataTranquil</h3>
            <p className="text-slate-400">
              AI Transformation Leaders
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-slate-400 hover:text-white">Services</Link></li>
              <li><Link href="/about" className="text-slate-400 hover:text-white">About</Link></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-slate-400 hover:text-white">Blog</Link></li>
              <li><Link href="/case-studies" className="text-slate-400 hover:text-white">Case Studies</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-slate-400">contact@datatranquil.com</p>
            <p className="text-slate-400">+1 (415) 255-5501</p>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>© 2025 DataTranquil. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}