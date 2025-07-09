import React, { useState } from 'react';

interface Calculator {
  id: number;
  name: string;
  description: string;
  category: string;
}

const Calculators: React.FC = () => {
  const [selectedCalculator, setSelectedCalculator] = useState<string>('tip');

  const calculators: Calculator[] = [
    {
      id: 1,
      name: "Tip Calculator",
      description: "Calculate tips and split bills easily",
      category: "Finance"
    },
    {
      id: 2,
      name: "BMI Calculator",
      description: "Calculate your Body Mass Index",
      category: "Health"
    },
    {
      id: 3,
      name: "Unit Converter",
      description: "Convert between different units",
      category: "Utility"
    },
    {
      id: 4,
      name: "Percentage Calculator",
      description: "Calculate percentages and percentage changes",
      category: "Math"
    }
  ];

  // Simple Tip Calculator Component
  const TipCalculator = () => {
    const [bill, setBill] = useState<number>(0);
    const [tipPercent, setTipPercent] = useState<number>(15);
    const [people, setPeople] = useState<number>(1);

    const tipAmount = (bill * tipPercent) / 100;
    const totalAmount = bill + tipAmount;
    const perPerson = totalAmount / people;

    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Tip Calculator</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Bill Amount ($)
            </label>
            <input
              type="number"
              value={bill}
              onChange={(e) => setBill(Number(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="0.00"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tip Percentage ({tipPercent}%)
            </label>
            <input
              type="range"
              min="0"
              max="30"
              value={tipPercent}
              onChange={(e) => setTipPercent(Number(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>0%</span>
              <span>30%</span>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Number of People
            </label>
            <input
              type="number"
              min="1"
              value={people}
              onChange={(e) => setPeople(Number(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-gray-50 rounded-md">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-700">Tip Amount:</span>
            <span className="font-semibold">${tipAmount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-700">Total Amount:</span>
            <span className="font-semibold">${totalAmount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Per Person:</span>
            <span className="font-bold text-blue-600">${perPerson.toFixed(2)}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Calculators</h1>
        <p className="text-lg text-gray-600">
          Interactive tools and calculators to help solve everyday problems.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Calculator List */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Available Calculators</h2>
            <div className="space-y-3">
              {calculators.map((calc) => (
                <button
                  key={calc.id}
                  onClick={() => setSelectedCalculator(calc.name.toLowerCase().replace(' ', ''))}
                  className={`w-full text-left p-3 rounded-md transition-colors ${
                    selectedCalculator === calc.name.toLowerCase().replace(' ', '')
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <div className="font-medium">{calc.name}</div>
                  <div className={`text-sm ${
                    selectedCalculator === calc.name.toLowerCase().replace(' ', '')
                      ? 'text-blue-100'
                      : 'text-gray-600'
                  }`}>
                    {calc.description}
                  </div>
                  <div className={`text-xs mt-1 ${
                    selectedCalculator === calc.name.toLowerCase().replace(' ', '')
                      ? 'text-blue-200'
                      : 'text-gray-500'
                  }`}>
                    {calc.category}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Calculator Display */}
        <div className="lg:col-span-2">
          {selectedCalculator === 'tip' && <TipCalculator />}
          {selectedCalculator === 'bmi' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">BMI Calculator</h3>
              <p className="text-gray-600">BMI Calculator coming soon...</p>
            </div>
          )}
          {selectedCalculator === 'unit' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Unit Converter</h3>
              <p className="text-gray-600">Unit Converter coming soon...</p>
            </div>
          )}
          {selectedCalculator === 'percentage' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Percentage Calculator</h3>
              <p className="text-gray-600">Percentage Calculator coming soon...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Calculators;