import { ReactNode } from 'react';
import { SectionId } from '../types';
import { LayoutGrid, Layers, Hexagon, Beaker } from 'lucide-react';
import { motion } from 'motion/react';

interface NavigationProps {
  activeSection: SectionId;
  onNavigate: (section: SectionId) => void;
}

export default function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const navItems: { id: SectionId; label: string }[] = [
    { id: 'home', label: 'Hub' },
    { id: 'content', label: 'Content Marketing' },
    { id: 'stream', label: 'Solin Digital' },
    { id: 'lab', label: 'Experimental' },
  ];

  const getNavTheme = () => {
    switch(activeSection) {
      case 'home': return { bg: 'bg-[#050505]/80', text: 'text-white', border: 'border-white/10', border2: 'border-white/20', hover: 'hover:bg-white/10', activeBg: 'bg-white', activeText: 'text-black', btnBg: 'bg-white', btnText: 'text-black', btnHover: 'hover:bg-white/90', muted: 'text-white/50' };
      case 'content': return { bg: 'bg-[#FF3366]/80', text: 'text-white', border: 'border-white/10', border2: 'border-white/20', hover: 'hover:bg-white/10', activeBg: 'bg-white', activeText: 'text-[#FF3366]', btnBg: 'bg-black', btnText: 'text-white', btnHover: 'hover:bg-black/90', muted: 'text-white/70' };
      case 'stream': return { bg: 'bg-[#FFF200]/80', text: 'text-black', border: 'border-black/10', border2: 'border-black/20', hover: 'hover:bg-black/10', activeBg: 'bg-black', activeText: 'text-[#FFF200]', btnBg: 'bg-black', btnText: 'text-[#FFF200]', btnHover: 'hover:bg-black/90', muted: 'text-black/50' };
      case 'lab': return { bg: 'bg-[#00E5FF]/80', text: 'text-black', border: 'border-black/10', border2: 'border-black/20', hover: 'hover:bg-black/10', activeBg: 'bg-black', activeText: 'text-[#00E5FF]', btnBg: 'bg-black', btnText: 'text-[#00E5FF]', btnHover: 'hover:bg-black/90', muted: 'text-black/50' };
      default: return { bg: 'bg-[#050505]/80', text: 'text-white', border: 'border-white/10', border2: 'border-white/20', hover: 'hover:bg-white/10', activeBg: 'bg-white', activeText: 'text-black', btnBg: 'bg-white', btnText: 'text-black', btnHover: 'hover:bg-white/90', muted: 'text-white/50' };
    }
  };

  const theme = getNavTheme();

  return (
    <nav className={`fixed top-0 left-0 w-full h-20 border-b flex items-center justify-between px-4 sm:px-10 backdrop-blur-md z-50 transition-colors duration-700 ${theme.bg} ${theme.border} ${theme.text}`}>
      <div className="hidden sm:flex flex-col">
        <span className="text-xl font-bold tracking-tighter uppercase">Hasan Karacan</span>
        <span className={`text-[10px] uppercase tracking-[0.2em] transition-colors ${theme.muted}`}>Visual Content & Motion</span>
      </div>
      
      <div className="flex flex-1 sm:flex-none justify-center">
        <div className={`flex gap-1 p-1 rounded-full border transition-colors ${theme.border}`}>
          {navItems.map((item, idx) => {
            const isActive = activeSection === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative px-4 sm:px-6 py-2 rounded-full text-xs font-medium uppercase transition-colors cursor-pointer outline-none tracking-wider
                  ${isActive ? theme.activeText : `${theme.hover}`}
                `}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className={`absolute inset-0 rounded-full ${theme.activeBg}`}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 whitespace-nowrap">
                  <span className="hidden sm:inline">0{idx + 1} </span>{item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="hidden sm:flex gap-4 items-center">
        <a href="https://instagram.com/hkaracan" target="_blank" rel="noreferrer" className={`w-8 h-8 rounded-full border flex items-center justify-center text-[10px] opacity-60 italic transition-colors ${theme.border2} ${theme.hover}`}>IG</a>
        <a href="https://linkedin.com/in/hkaracan" target="_blank" rel="noreferrer" className={`w-8 h-8 rounded-full border flex items-center justify-center text-[10px] opacity-60 italic transition-colors ${theme.border2} ${theme.hover}`}>LI</a>
        <a href="mailto:hasan@hasankaracan.com" className={`px-5 py-2 text-[10px] font-black uppercase tracking-widest transition-colors rounded-full ${theme.btnBg} ${theme.btnText} ${theme.btnHover}`}>Contact</a>
      </div>
    </nav>
  );
}
