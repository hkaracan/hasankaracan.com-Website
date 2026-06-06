import { motion } from 'motion/react';
import { ShoppingBag, Star, Download, MonitorPlay } from 'lucide-react';
import ProductCard from '../ProductCard';
import { AliveText } from '../AnimatedText';

export default function StreamDesign() {
  const products = [
    { url: "https://solindigital.etsy.com/listing/1496178408", title: "Minimal Overlays", image: "https://i.etsystatic.com/33308343/r/il/ac6922/5287469683/il_794xN.5287469683_8ova.jpg" },
    { url: "https://solindigital.etsy.com/listing/1609514028", title: "Meteor Gifted Sub Alerts", image: "https://i.etsystatic.com/33308343/r/il/7eaf27/5604400263/il_794xN.5604400263_b1eu.jpg" },
    { url: "https://solindigital.etsy.com/listing/1586487997", title: "Cats Raid Alerts", image: "https://i.etsystatic.com/33308343/r/il/3e8877/5438703235/il_794xN.5438703235_qhl1.jpg" },
    { url: "https://solindigital.etsy.com/listing/1532106391", title: "Tiny Skeletons Raid Alerts", image: "https://i.etsystatic.com/33308343/r/il/533e47/5177740889/il_794xN.5177740889_mxf1.jpg" },
    { url: "https://solindigital.etsy.com/listing/1245191725", title: "Meteor Stream Alerts", image: "https://i.etsystatic.com/33308343/r/il/49af44/6239254475/il_794xN.6239254475_h9oo.jpg" },
    { url: "https://solindigital.etsy.com/listing/1655302162", title: "Slash Matte Transitions", image: "https://i.etsystatic.com/33308343/r/il/7a9278/5770263067/il_794xN.5770263067_qtvu.jpg" },
    { url: "https://solindigital.etsy.com/listing/1515304153", title: "Fire Stream Countdowns", image: "https://i.etsystatic.com/33308343/r/il/4112e0/5101173055/il_794xN.5101173055_oobg.jpg" },
    { url: "https://solindigital.etsy.com/listing/1733564616", title: "Pirate Ship Stream Alerts", image: "https://i.etsystatic.com/33308343/r/il/029bc9/6061127398/il_794xN.6061127398_sqzd.jpg" },
    { url: "https://solindigital.etsy.com/listing/1684516107", title: "Fire Golem Stinger Transitions", image: "https://i.etsystatic.com/33308343/r/il/ef8d9b/5789041334/il_794xN.5789041334_bngy.jpg" }
  ];

  const categories = [
    "Twitch Alerts",
    "Stream Overlays",
    "Stinger Transitions",
    "Stream Screens",
    "Hype Train Alerts",
    "Channel Point Redeem Alerts"
  ];

  return (
    <div className="w-full flex flex-col pt-12 pb-24 text-black bg-[#FFF200] px-4 sm:px-10 max-w-7xl mx-auto rounded-3xl mt-4 border-4 border-black outline outline-4 outline-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-300">
      {/* Proof Bar injected like HTML styling */}
      <div className="w-full h-10 bg-black flex items-center justify-center gap-6 px-4 rounded-xl mb-12 border-2 border-black">
        <span className="text-[10px] sm:text-xs font-black text-[#FFF200] uppercase tracking-tighter">25K+ Sales</span>
        <span className="text-[10px] sm:text-xs font-black text-[#FFF200] uppercase tracking-tighter hidden sm:inline">3K+ 5-Star Reviews</span>
        <span className="text-[10px] sm:text-xs font-black text-[#FFF200] uppercase tracking-tighter">Twitch / Kick / YT</span>
      </div>

      {/* Header */}
      <div className="max-w-3xl mb-16">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
           className="mb-8"
        >
          <img src="https://www.solindigital.com/wp-content/uploads/2022/09/sd-transparent-text2.webp" alt="Solin Digital" className="h-8 md:h-10 object-contain" />
        </motion.div>

        <motion.h1 
          className="text-5xl sm:text-6xl md:text-7xl font-sans font-black uppercase tracking-tight mb-8 leading-[1.1]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Animated assets that make streams <br className="hidden sm:block" />
          <AliveText>alive.</AliveText>
        </motion.h1>
        
        <motion.p 
          className="text-xl sm:text-2xl text-black/80 font-medium leading-relaxed mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          Premium Motion Assets for Modern Creators. Twitch alerts, overlays, and stingers designed for impact.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {categories.map((cat, index) => (
            <span key={index} className="px-4 py-2 bg-white border-2 border-black rounded-full text-[10px] font-mono tracking-wider uppercase text-black font-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              {cat}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} index={index} />
        ))}
      </div>

      {/* CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-32 max-w-2xl mx-auto text-center"
      >
        <div className="p-12 sm:p-16 bg-white rounded-3xl border-4 border-black flex flex-col items-center relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          
          <div className="w-16 h-16 border-2 border-black bg-[#FFF200] rounded-full flex items-center justify-center mb-6 relative z-10 transition-colors group-hover:bg-black">
            <ShoppingBag className="w-6 h-6 text-black group-hover:text-[#FFF200] transition-colors" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black mb-4 relative z-10 text-black uppercase tracking-tight">Level up your <span className="font-mono text-black uppercase font-black text-2xl">Stream</span></h2>
          <p className="text-black/80 mb-8 text-lg relative z-10 font-medium">
            Join 25,000+ creators who trust Solin Digital for their broadcast assets and stream overlays.
          </p>
          <a
            href="https://solindigital.etsy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-black text-[#FFF200] text-[10px] font-black uppercase tracking-[0.2em] relative z-10 hover:bg-[#FFF200] hover:text-black border-2 border-transparent hover:border-black transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,0)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            Explore Solin Digital
          </a>
        </div>
      </motion.div>
    </div>
  );
}
