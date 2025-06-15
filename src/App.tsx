import React from 'react';

const App: React.FC = () => {
  return (
    <div className="w-full max-w-md mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="p-6 space-y-4">
          <div className="text-3xl font-bold text-gray-800 text-center">
            计算器
          </div>
          {/* Calculator content goes here */}
          <div className="bg-gray-100 p-4 rounded-lg">
            {/* Display */}
            <div className="text-right text-2xl font-mono p-2 mb-4 bg-white rounded shadow">
              0
            </div>
            {/* Buttons grid */}
            <div className="grid grid-cols-4 gap-2">
              {['7', '8', '9', '÷',
                '4', '5', '6', '×',
                '1', '2', '3', '-',
                '0', '.', '=', '+'].map((btn) => (
                <button
                  key={btn}
                  className="p-3 text-lg font-medium rounded-lg
                    ${btn === '=' ? 'bg-blue-500 text-white hover:bg-blue-600' : 
                    'bg-white hover:bg-gray-50 active:bg-gray-100'}
                    transition-colors duration-150 ease-in-out"
                >
                  {btn}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;