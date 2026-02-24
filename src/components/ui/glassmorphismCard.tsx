import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface GlassmorphismCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function GlassmorphismCard({ icon: Icon, title, description, className = '' }: GlassmorphismCardProps) {
  return (
    <div className={`group relative ${className}`}>
      {/* Glow Effect - Outside the card */}
      <div className="absolute -inset-[2px] bg-gradient-to-br from-green-500/20 via-yellow-500/20 to-green-500/20 rounded-[18px] blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
      
      {/* Gradient lighting from bottom-right */}
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-yellow-500/10 via-green-500/5 to-transparent rounded-[16px] blur-2xl" />
      
      {/* Card */}
      <div className="relative rounded-2xl p-6 bg-[#0f0f12]/90 backdrop-blur-xl border border-white/5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
        {/* Icon */}
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500/10 to-yellow-500/10 border border-green-500/20 flex items-center justify-center mb-3">
          <Icon className="w-5 h-5 text-green-400" />
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-semibold text-white mb-2">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-sm text-neutral-400 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
