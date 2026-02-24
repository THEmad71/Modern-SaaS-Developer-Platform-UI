import { Zap } from 'lucide-react';

export default function GlassmorphismShowcase() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-8">
      {/* Background ambient glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
      </div>

      {/* Card Container */}
      <div className="relative group">
        {/* Outer Glow Effect */}
        <div className="absolute -inset-[2px] bg-gradient-to-br from-green-500/20 via-yellow-500/20 to-green-500/20 rounded-[18px] blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
        
        {/* Gradient lighting from bottom-right corner */}
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-yellow-500/10 via-green-500/5 to-transparent rounded-[16px] blur-2xl" />
        
        {/* Main Card */}
        <div className="relative w-[340px] rounded-2xl p-6 bg-[#0f0f12]/90 backdrop-blur-xl border border-white/5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] transition-all duration-300">
          {/* Icon Container */}
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500/10 to-yellow-500/10 border border-green-500/20 flex items-center justify-center mb-3">
            <Zap className="w-5 h-5 text-green-400" />
          </div>
          
          {/* Title */}
          <h3 className="text-xl font-semibold text-white mb-2">
            Web Searcher
          </h3>
          
          {/* Description */}
          <p className="text-sm text-neutral-400 leading-relaxed">
            Automatically browses the web and summarizes the latest information for you.
          </p>
        </div>
      </div>
    </div>
  );
}
