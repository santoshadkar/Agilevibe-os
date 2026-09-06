import React from 'react';

interface RotheErdeLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const RotheErdeLogo: React.FC<RotheErdeLogoProps> = ({ 
  className = '', 
  size = 'md',
  showText = false
}) => {
  const sizeMap = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16'
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`relative overflow-hidden rounded-xl bg-[#00a3e0] p-1 shadow-lg shadow-cyan-500/20 border border-cyan-400/40 flex items-center justify-center shrink-0 ${sizeMap[size]}`}>
        <img
          src="/thyssenkrupp_logo.png"
          alt="thyssenkrupp rothe erde official logo"
          className="h-full w-full object-contain rounded-lg"
        />
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className="text-sm font-black tracking-tight text-white uppercase flex items-center gap-1.5">
            thyssenkrupp <span className="text-cyan-400 font-extrabold lowercase font-sans">rothe erde</span>
          </span>
          <span className="text-[10px] font-semibold text-gray-400">
            Rothe Erde India Pvt. Ltd. • Gondedumala
          </span>
        </div>
      )}
    </div>
  );
};
