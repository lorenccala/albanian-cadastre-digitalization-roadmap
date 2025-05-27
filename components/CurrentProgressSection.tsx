
import React from 'react';
import { CURRENT_PROGRESS_DATA } from '../constants';
import { ProgressItem } from '../types';
import { SectionTitle } from './SectionTitle';
import { Card } from './Card';
import { TrendingUpIcon } from './Icons';

export const CurrentProgressSection: React.FC = () => {
  return (
    <section id="current-progress" className="py-16 md:py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Progresi Aktual i QKD (Sipas Dokumentit)" />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {CURRENT_PROGRESS_DATA.map((item: ProgressItem) => (
            <Card key={item.id} className="text-center">
              <div className="flex justify-center mb-4">
                 <TrendingUpIcon className="h-12 w-12 text-brand-accent"/>
              </div>
              <h3 className="text-4xl font-bold text-brand-primary mb-2">{item.value}</h3>
              <p className="text-md font-semibold text-brand-text mb-1">{item.title}</p>
              <p className="text-sm text-brand-text-light">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
