
import React from 'react';
import { ACTORS_DATA } from '../constants';
import { Actor } from '../types';
import { SectionTitle } from './SectionTitle';
import { Card } from './Card';

export const ActorsSection: React.FC = () => {
  return (
    <section id="actors" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Aktorët Kryesorë dhe Përgjegjësitë" />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ACTORS_DATA.map((actor: Actor) => (
            <Card key={actor.id} className="flex flex-col transform hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {actor.icon && <div className="mr-4 text-brand-accent">{actor.icon}</div>}
                <div>
                  <h3 className="text-xl font-bold text-brand-primary">
                    {actor.name}
                    {actor.acronym && <span className="block text-sm text-brand-accent">({actor.acronym})</span>}
                  </h3>
                </div>
              </div>
              <p className="text-brand-text-light text-sm flex-grow">{actor.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
