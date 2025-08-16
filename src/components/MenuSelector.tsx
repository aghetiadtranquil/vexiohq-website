'use client';

import { useState, useEffect } from 'react';
import SimplifiedMegaMenu from './SimplifiedMegaMenu';
import MenuDesignA from './MenuDesignA';
import MenuDesignB from './MenuDesignB';
import MenuDesignC from './MenuDesignC';
import ComprehensiveMegaMenu from './ComprehensiveMegaMenu';

export default function MenuSelector() {
  const [selectedMenu, setSelectedMenu] = useState('comprehensive');
  const [showSelector, setShowSelector] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Load saved menu preference on mount
  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      const savedMenu = localStorage.getItem('selectedMenu');
      if (savedMenu) {
        setSelectedMenu(savedMenu);
      }
    }
  }, []);

  // Save menu preference when it changes
  const handleMenuChange = (menuId: string) => {
    setSelectedMenu(menuId);
    if (typeof window !== 'undefined') {
      localStorage.setItem('selectedMenu', menuId);
    }
  };

  // Check if we're in development mode
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      // Show selector with keyboard shortcut (Ctrl/Cmd + M)
      const handleKeyPress = (e: KeyboardEvent) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'm') {
          e.preventDefault();
          setShowSelector(!showSelector);
        }
      };
      window.addEventListener('keydown', handleKeyPress);
      return () => window.removeEventListener('keydown', handleKeyPress);
    }
  }, [showSelector]);

  const menuOptions = [
    { id: 'comprehensive', name: '⭐ Comprehensive Mega Menu', component: ComprehensiveMegaMenu },
    { id: 'current', name: 'Current (Simplified)', component: SimplifiedMegaMenu },
    { id: 'designA', name: 'Design A - Glassmorphism', component: MenuDesignA },
    { id: 'designB', name: 'Design B - Dark Neon', component: MenuDesignB },
    { id: 'designC', name: 'Design C - Minimal', component: MenuDesignC },
  ];

  const SelectedMenuComponent = menuOptions.find(m => m.id === selectedMenu)?.component || ComprehensiveMegaMenu;

  return (
    <>
      <SelectedMenuComponent />
      
      {/* Menu Selector Panel */}
      {showSelector && (
        <div className="fixed bottom-4 right-4 z-[100] bg-white rounded-lg shadow-2xl border border-gray-200 p-4 w-80">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold text-sm">Menu Design Selector</h3>
            <button 
              onClick={() => setShowSelector(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          </div>
          
          <div className="space-y-2">
            {menuOptions.map((menu) => (
              <button
                key={menu.id}
                onClick={() => handleMenuChange(menu.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                  selectedMenu === menu.id 
                    ? 'bg-blue-50 text-blue-600 font-medium border border-blue-200' 
                    : 'hover:bg-gray-50 text-gray-700'
                }`}
              >
                {menu.name}
              </button>
            ))}
          </div>
          
          <div className="mt-3 pt-3 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              Press <kbd className="px-1.5 py-0.5 bg-gray-100 rounded text-xs">Cmd+M</kbd> to toggle
            </p>
          </div>
        </div>
      )}
    </>
  );
}