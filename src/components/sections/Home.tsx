import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { SectionId } from '../../types';
import { Layers, Hexagon, Beaker, ArrowRight } from 'lucide-react';
import { AttentionText, AliveText, MoveText } from '../AnimatedText';

interface HomeProps {
  onNavigate: (section: SectionId) => void;
}

const HoverStreamVideo = ({ isHovered }: { isHovered: boolean }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isHovered) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(e => console.log('Video play prevented:', e));
      }
    } else {
      video.pause();
    }
  }, [isHovered]);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center bg-[#FFF200]">
      <img
        src={`${import.meta.env.BASE_URL}website-2d-idle-anim-static.webp`}
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ opacity: isVideoLoaded ? 0 : 1, transition: 'opacity 0.3s ease-in-out', zIndex: 1 }}
      />
      <video
        ref={videoRef}
        src={`${import.meta.env.BASE_URL}website-2d-idle-anim.webm`}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ opacity: isVideoLoaded ? 1 : 0, transition: 'opacity 0.3s ease-in-out', zIndex: 2 }}
        muted
        loop
        playsInline
        onCanPlay={() => setIsVideoLoaded(true)}
      />
    </div>
  );
};

const HoverLabVideo = ({ isHovered }: { isHovered: boolean }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isHovered) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(e => console.log('Video play prevented:', e));
      }
    } else {
      video.pause();
    }
  }, [isHovered]);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center bg-[#00E5FF]">
      <img
        src={`${import.meta.env.BASE_URL}website-3d-idle-anim-static.webp`}
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ opacity: isVideoLoaded ? 0 : 1, transition: 'opacity 0.3s ease-in-out', zIndex: 1 }}
      />
      <video
        ref={videoRef}
        src={`${import.meta.env.BASE_URL}website-3d-idle-anim.webm`}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ opacity: isVideoLoaded ? 1 : 0, transition: 'opacity 0.3s ease-in-out', zIndex: 2 }}
        muted
        loop
        playsInline
        onCanPlay={() => setIsVideoLoaded(true)}
      />
    </div>
  );
};

export default function Home({ onNavigate }: HomeProps) {
  const [hoveredCard, setHoveredCard] = useState<SectionId | null>(null);

  const cards = [
    {
      id: 'content' as SectionId,
      badge: 'Content Marketing',
      badgeColor: 'text-black',
      titleBase: 'Content that converts ',
      titleHighlight: 'attention.',
      description: 'Reels & Social First B2B.',
      bg: 'bg-[#FF3366] text-white',
      bgHover: 'hover:bg-[#ff1a53]',
      btnBg: 'bg-black',
      btnTextColor: 'text-[#FF3366]',
      btnHover: 'hover:bg-white hover:text-black group-hover:bg-white group-hover:text-black',
      btnText: 'View Portfolio',
    },
    {
      id: 'stream' as SectionId,
      badge: <img src="https://www.solindigital.com/wp-content/uploads/2022/09/sd-transparent-text2.webp" alt="Solin Digital" className="h-3 sm:h-4 object-contain flex-shrink-0" />,
      badgeColor: 'text-[#000]',
      titleBase: 'Animated assets that make streams ',
      titleHighlight: 'alive.',
      description: 'Premium Motion Assets for Modern Creators.',
      bg: 'bg-[#FFF200] text-black',
      bgHover: 'hover:bg-[#ffee00]',
      btnBg: 'bg-black',
      btnTextColor: 'text-[#FFF200]',
      btnHover: 'hover:bg-white hover:text-black group-hover:bg-white group-hover:text-black',
      btnText: 'Visit Etsy Shop',
    },
    {
      id: 'lab' as SectionId,
      badge: 'Experimental',
      badgeColor: 'text-[#000]',
      titleBase: 'Test ideas & make visuals ',
      titleHighlight: 'move.',
      description: 'Tools & Experiments.',
      bg: 'bg-[#00E5FF] text-black',
      bgHover: 'hover:bg-[#00cbe6]',
      btnBg: 'bg-black',
      btnTextColor: 'text-[#00E5FF]',
      btnHover: 'hover:bg-white hover:text-black group-hover:bg-white group-hover:text-black',
      btnText: 'About Hasan',
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
  };

  return (
    <div className="flex-1 w-full overflow-hidden flex p-4 sm:p-10 max-w-screen-2xl mx-auto">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex-1 grid grid-cols-1 md:grid-cols-3 overflow-hidden gap-6 rounded-3xl"
      >
        {cards.map((card) => (
          <motion.section
            key={card.id}
            variants={itemVariants}
            onClick={() => onNavigate(card.id)}
            onMouseEnter={() => setHoveredCard(card.id)}
            onMouseLeave={() => setHoveredCard(null)}
            className={`group relative overflow-hidden transition-all duration-300 cursor-pointer rounded-3xl outline outline-4 outline-black border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 ${card.bg || ''} ${card.bgHover || ''}`}
          >
            {card.id === 'stream' && <HoverStreamVideo isHovered={hoveredCard === 'stream'} />}
            {card.id === 'lab' && <HoverLabVideo isHovered={hoveredCard === 'lab'} />}
            <div className="p-8 sm:p-10 h-full flex flex-col justify-between relative z-10">
              <div className="mb-8">
                <span className={`text-[10px] font-black ${card.badgeColor} uppercase tracking-widest mb-4 block ${card.id === 'stream' ? 'font-mono' : ''} ${card.id === 'lab' ? 'underline decoration-black/30 underline-offset-4' : ''}`}>
                  {card.badge}
                </span>
                <h2 className={`text-3xl font-black leading-tight uppercase tracking-tight ${card.id === 'lab' ? '' : ''}`}>
                  {card.titleBase} 
                  {card.id === 'content' && <AttentionText>{card.titleHighlight}</AttentionText>}
                  {card.id === 'stream' && <AliveText>{card.titleHighlight}</AliveText>}
                  {card.id === 'lab' && <MoveText>{card.titleHighlight}</MoveText>}
                </h2>
              </div>
              
              <div className="mt-8">
                <p className={`text-sm leading-relaxed mb-6 font-medium ${card.id === 'stream' ? 'font-mono font-bold' : ''}`}>
                  {card.description}
                </p>
                <button className={`w-full py-4 border-2 border-black text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${card.btnBg || ''} ${card.btnTextColor || 'text-white'} ${card.btnHover || ''}`}>
                  {card.btnText}
                </button>
              </div>
            </div>
          </motion.section>
        ))}
      </motion.div>
    </div>
  );
}
