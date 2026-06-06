/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { SectionId } from './types';
import Navigation from './components/Navigation';
import Home from './components/sections/Home';
import ContentMarketing from './components/sections/ContentMarketing';
import StreamDesign from './components/sections/StreamDesign';
import CreativeLab from './components/sections/CreativeLab';

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('home');

  useEffect(() => {
    // Scroll to top when section changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);

  const getBgColor = () => {
    switch(activeSection) {
      case 'home': return 'bg-[#050505] text-white';
      case 'content': return 'bg-[#FF3366] text-white';
      case 'stream': return 'bg-[#FFF200] text-black';
      case 'lab': return 'bg-[#00E5FF] text-black';
      default: return 'bg-[#050505] text-white';
    }
  }

  return (
    <div className={`min-h-screen flex flex-col pt-0 transition-colors duration-700 w-full ${getBgColor()}`}>
      <Navigation activeSection={activeSection} onNavigate={setActiveSection} />
      
      <main className="flex-1 w-full mt-20 relative flex">
        <AnimatePresence mode="wait">
          {activeSection === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="w-full flex"
            >
              <Home onNavigate={setActiveSection} />
            </motion.div>
          )}
          {activeSection === 'content' && (
            <motion.div
              key="content"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="w-full flex"
            >
              <ContentMarketing />
            </motion.div>
          )}
          {activeSection === 'stream' && (
            <motion.div
              key="stream"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="w-full flex"
            >
              <StreamDesign />
            </motion.div>
          )}
          {activeSection === 'lab' && (
            <motion.div
              key="lab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="w-full flex"
            >
              <CreativeLab />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
