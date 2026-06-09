'use client';

import React from 'react';

interface ImagePlaceholderProps {
  label?: string;
  className?: string;
  aspectRatio?: string;
  dark?: boolean;
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  label = 'Image',
  className = '',
  aspectRatio = 'aspect-[4/3]',
  dark = true,
}) => {
  return (
    <div
      className={`relative overflow-hidden flex items-center justify-center ${aspectRatio} ${dark ? 'bg-navy-800' : 'bg-muted-300'} ${className}`}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />
      <div className="relative z-10 text-center px-6">
        <div className="w-10 h-0.5 bg-primary-500 mx-auto mb-4" />
        <p className="text-xs font-semibold tracking-[0.18em] uppercase text-white/50">
          {label}
        </p>
      </div>
    </div>
  );
};

export default ImagePlaceholder;
