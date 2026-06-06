import { motion } from 'motion/react';
import { ReactNode } from 'react';

export function AttentionText({ children }: { children: ReactNode }) {
  if (typeof children !== 'string') return <>{children}</>;

  const colors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#9400D3'];

  return (
    <span className="inline-block px-3 py-1 ml-1 z-10 sm:ml-0 mt-2 sm:mt-0 bg-neutral-900 text-neutral-700 rounded-lg font-mono uppercase font-black border-4 border-black rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      {children.split('').map((char, i) => (
        <motion.span
          key={i}
          animate={{ 
            color: [
              '#404040', 
              colors[i % colors.length], 
              '#404040', 
              '#404040', 
              colors[(i + 3) % colors.length], 
              '#404040', 
              '#404040'
            ],
            textShadow: [
              '0 0 0px rgba(0,0,0,0)', 
              `0 0 12px ${colors[i % colors.length]}`, 
              '0 0 0px rgba(0,0,0,0)',
              '0 0 0px rgba(0,0,0,0)',
              `0 0 12px ${colors[(i + 3) % colors.length]}`, 
              '0 0 0px rgba(0,0,0,0)',
              '0 0 0px rgba(0,0,0,0)'
            ]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: i * 0.1 
          }}
          className="inline-block whitespace-pre"
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

export function AliveText({ children }: { children: ReactNode }) {
  return (
    <motion.span
      animate={{ 
        scale: [1, 1.05, 1.05, 1, 1],
      }}
      transition={{ 
        duration: 4, 
        repeat: Infinity, 
        ease: 'easeInOut',
        times: [0, 0.45, 0.55, 1, 1]
      }}
      className="inline-block px-3 py-1 ml-1 z-10 sm:ml-0 mt-2 sm:mt-0 bg-black text-[#FFF200] rounded-lg font-mono uppercase font-black border-4 border-black -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-neutral-800 origin-center"
    >
      {children}
    </motion.span>
  );
}

export function MoveText({ children }: { children: ReactNode }) {
  return (
    <motion.span
      animate={{ 
        rotate: [0, 12, -12, 8, -4, 0],
        x: [0, 10, -10, 5, -2, 0]
      }}
      transition={{ 
        duration: 0.5, 
        repeat: Infinity, 
        repeatDelay: 2.5,
        ease: 'easeInOut'
      }}
      className="inline-block origin-bottom px-3 py-1 ml-1 z-10 sm:ml-0 mt-2 sm:mt-0 bg-white text-black rounded-lg font-mono uppercase font-black border-4 border-black rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-neutral-100"
    >
      {children}
    </motion.span>
  );
}

