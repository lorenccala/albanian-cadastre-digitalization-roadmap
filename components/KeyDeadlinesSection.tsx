
import React from 'react';
import { KEY_DEADLINES_DATA } from '../constants';
import { KeyDeadline } from '../types';
import { SectionTitle } from './SectionTitle';
import { Card } from './Card';

export const KeyDeadlinesSection: React.FC = () => {
  return (
    <section id="key-deadlines" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Afatet Kryesore të Procesit" />
        <div className="mt-12 relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-1 bg-brand-secondary rounded-full transform -translate-x-1/2"></div>

          {KEY_DEADLINES_DATA.map((deadline: KeyDeadline, index: number) => (
            <div key={deadline.id} className={`mb-12 md:mb-16 flex md:items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="hidden md:block w-1/2"></div>
              <div className="hidden md:block relative">
                <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-brand-accent rounded-full border-4 border-white transform -translate-y-1/2 -translate-x-1/2 shadow-md"></div>
              </div>
              <div className="w-full md:w-1/2 md:px-8">
                <Card className={`shadow-xl ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className={`flex items-center mb-2 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                    {deadline.icon && React.cloneElement(deadline.icon as React.ReactElement, { className: "h-8 w-8 text-brand-primary mr-2"})}
                    <h3 className="text-2xl font-bold text-brand-primary">{deadline.title}</h3>
                  </div>
                  <p className="text-lg font-semibold text-brand-accent mb-2">{deadline.date}</p>
                  <p className="text-brand-text-light">{deadline.description}</p>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
