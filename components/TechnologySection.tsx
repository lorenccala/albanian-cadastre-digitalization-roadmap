
import React from 'react';
import { TECHNOLOGY_HIGHLIGHTS_DATA } from '../constants';
import { TechHighlight } from '../types';
import { SectionTitle } from './SectionTitle';
import { Card } from './Card';

export const TechnologySection: React.FC = () => {
  return (
    <section id="technology" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Arkitektura Teknologjike dhe Standardet" />
        <p className="mt-4 text-center text-brand-text-light max-w-3xl mx-auto">
          Suksesi i procesit të digjitalizimit mbështetet fuqimisht në një arkitekturë teknologjike moderne, të qëndrueshme dhe të shkallëzueshme, në përputhje me standardet ndërkombëtare, veçanërisht ato të Bashkimit Evropian.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TECHNOLOGY_HIGHLIGHTS_DATA.map((highlight: TechHighlight) => (
            <Card key={highlight.id} className="flex flex-col">
              <div className="flex items-center mb-3">
                 {highlight.icon ? highlight.icon : <div className="w-8 h-8 bg-brand-accent rounded-md mr-3"></div>}
                <h3 className="text-lg font-semibold text-brand-primary">{highlight.title}</h3>
              </div>
              <p className="text-brand-text-light text-sm flex-grow">{highlight.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
