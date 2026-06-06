import { motion } from 'motion/react';
import { ExternalLink, Star } from 'lucide-react';
import { EtsyProduct } from '../types';

interface ProductCardProps {
  product: EtsyProduct;
  index: number;
  key?: string | number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group bg-black outline outline-2 outline-black border-2 border-black rounded-xl p-2 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
    >
      {/* Aspect ratio container for a mock image or animated placeholder */}
      <div className="relative aspect-[5/4] w-full overflow-hidden bg-white/5 rounded-lg border-2 border-transparent group-hover:border-[#FFF200] transition-colors">
        {product.image ? (
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
          />
        ) : (
          <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.15)_0%,_rgba(0,0,0,0)_50%)] transform group-hover:scale-110 transition-transform duration-700 ease-out" />
          </div>
        )}
        
        {!product.image && (
          <h3 className="relative z-10 text-white/50 font-mono text-sm text-center group-hover:text-white/90 transition-colors px-2">
            {product.title}
          </h3>
        )}

        {/* Name overlay */}
        <div className="absolute bottom-2 left-2 right-2 p-2 bg-[#FFF200] border-2 border-black rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
             <h3 className="text-black font-black text-[11px] uppercase tracking-wider text-center drop-shadow-sm line-clamp-1">
               {product.title}
             </h3>
        </div>

        <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 border-2 border-black text-white group-hover:bg-[#FFF200] group-hover:text-black">
          <ExternalLink className="w-4 h-4" />
        </div>
      </div>

      <div className="pt-4 flex flex-col flex-1 justify-between gap-4">
        <div className="flex items-center justify-between px-2">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-[#FFF200] text-[#FFF200]" />
            ))}
          </div>
          <span className="text-[9px] uppercase tracking-wider text-[#FFF200]/80 font-black font-mono">Top Rated</span>
        </div>
        
        <div className="flex items-center justify-between mt-auto px-2 pb-2">
          <span className="text-[10px] text-white uppercase tracking-widest font-black">View on Etsy</span>
          <div className="w-6 h-6 rounded border-2 border-white/20 flex items-center justify-center group-hover:bg-[#FFF200] group-hover:border-[#FFF200] group-hover:text-black transition-colors duration-300 text-white">
            <ExternalLink className="w-3 h-3" />
          </div>
        </div>
      </div>
    </motion.a>
  );
}
