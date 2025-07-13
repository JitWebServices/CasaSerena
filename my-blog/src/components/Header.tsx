import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-sm" style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)', width: '100vw' }}>
      <div className="text-center py-16">
        <h1 className="text-8xl font-serif text-gray-900 leading-tight">
          MaisonSerene
        </h1>
        <p className="mt-4 text-3xl font-serif text-gray-700">
          Financial Advising
        </p>
      </div>
    </header>
  );
};

export default Header;