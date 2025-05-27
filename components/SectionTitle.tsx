
import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-10 md:mb-12">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-primary">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl mx-auto text-xl text-brand-text-light sm:mt-4">
          {subtitle}
        </p>
      )}
      <div className="mt-4 h-1 w-24 bg-brand-accent mx-auto rounded"></div>
    </div>
  );
};
