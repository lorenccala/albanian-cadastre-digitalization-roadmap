
import React from 'react';
import { HERO_DATA } from '../constants';
import { SectionTitle } from './SectionTitle';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-brand-primary sm:text-5xl md:text-6xl">
            {HERO_DATA.title}
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-brand-text-light">
            {HERO_DATA.subtitle}
          </p>
        </div>
        <div className="mt-16">
            <SectionTitle title="Përmbledhje Ekzekutive" />
            <div className="mt-6 bg-blue-50 p-6 md:p-8 rounded-lg shadow-md">
                 <p className="text-base md:text-lg text-brand-text leading-relaxed whitespace-pre-line">
                    {HERO_DATA.executiveSummary}
                 </p>
            </div>
        </div>
      </div>
    </section>
  );
};
