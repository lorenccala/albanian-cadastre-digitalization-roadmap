
import React from 'react';
import { VISION_TEXT, KEY_GOALS_DATA, ASHK_OBJECTIVES_DATA } from '../constants';
import { KeyGoal, ASHKObjective } from '../types';
import { SectionTitle } from './SectionTitle';
import { Card } from './Card';
import { CheckIcon, TargetIcon } from './Icons';


export const VisionGoalsSection: React.FC = () => {
  return (
    <section id="vision-goals" className="py-16 md:py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Vizioni dhe Qëllimet Kryesore" />
        
        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-brand-primary mb-4">Vizioni Themelor</h3>
          <p className="text-lg text-brand-text-light leading-relaxed">{VISION_TEXT}</p>
        </div>

        <div className="mt-12">
          <h3 className="text-3xl font-semibold text-brand-primary mb-8 text-center">Qëllimet Kryesore të Udhërrëfyesit</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {KEY_GOALS_DATA.map((goal: KeyGoal) => (
              <Card key={goal.id} className="transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-3">
                  <TargetIcon className="h-7 w-7 text-brand-accent mr-3"/>
                  <h4 className="text-xl font-semibold text-brand-primary">{goal.title}</h4>
                </div>
                <p className="text-brand-text-light text-sm">{goal.description}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-semibold text-brand-primary mb-8 text-center">Objektivat Specifike të ASHK</h3>
           <div className="bg-white p-6 rounded-lg shadow-lg">
             <ul className="space-y-4">
                {ASHK_OBJECTIVES_DATA.map((obj: ASHKObjective) => (
                <li key={obj.id} className="flex items-start">
                    <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500 mr-3 mt-1" />
                    <div>
                        <p className="text-brand-text">{obj.description}</p>
                        <p className="text-sm text-brand-accent font-medium">{obj.deadline}</p>
                    </div>
                </li>
                ))}
            </ul>
           </div>
        </div>
      </div>
    </section>
  );
};
