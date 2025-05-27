
import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-brand-primary text-blue-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm">
          &copy; {currentYear} Udhërrëfyesi Strategjik për Dixhitalizimin e Kadastrës Shqiptare.
        </p>
        <p className="text-xs mt-1">
          Bazuar në dokumentin zyrtar. Ky aplikacion është vetëm për qëllime vizualizimi.
        </p>
      </div>
    </footer>
  );
};
