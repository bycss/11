import React, { useState } from 'react';

const App: React.FC = () => {
  const [display, setDisplay] = useState<string>('0');
  const [equation, setEquation] = useState<string>('');

  const handleNumber = (num: string) => {
    setDisplay(prev => prev === '0' ? num : prev + num);
  };

  const handleOperator = (op: string) => {
    setEquation(display + ' ' + op + ' ');
    setDisplay('0');
  };

  const calculate = () => {
    try {
      const result = eval(equation + display);
      setDisplay(String(result));
      setEquation('');
    } catch (error) {
      setDisplay('Error');
    }
  };

  const clear = () => {
    setDisplay('0');
    setEquation('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 py-10 px-4">
      <div className="max-w-md mx-auto bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/20">
        {/* Calculator Display */}
        <div className="p-6 space-y-2">
          <div className="text-right text-gray-400 h-6 font-mono">
            {equation}
          </div>
          <div className="text-right text-4xl text-white font-semibold font-mono truncate">
            {display}
          </div>
        </div>

        {/* Calculator Buttons */}
        <div className="grid grid-cols-4 gap-2 p-6 bg-white/5">
          <button
            onClick={clear}
            className="col-span-2 p-4 text-xl font-bold rounded-2xl bg-red-500/80 hover:bg-red-600/80 text-white transition-all duration-200 active:scale-95"
          >
            AC
          </button>
          <button
            onClick={() => handleOperator('/')}
            className="p-4 text-xl font-bold rounded-2xl bg-indigo-500/50 hover:bg-indigo-600/50 text-white transition-all duration-200 active:scale-95"
          >
            ÷
          </button>
          <button
            onClick={() => handleOperator('*')}
            className="p-4 text-xl font-bold rounded-2xl bg-indigo-500/50 hover:bg-indigo-600/50 text-white transition-all duration-200 active:scale-95"
          >
            ×
          </button>

          {['7', '8', '9', '-', '4', '5', '6', '+', '1', '2', '3', '='].map((btn) => (
            <button
              key={btn}
              onClick={() => {
                if (btn === '=') calculate();
                else if (['+', '-'].includes(btn)) handleOperator(btn);
                else handleNumber(btn);
              }}
              className={`p-4 text-xl font-bold rounded-2xl transition-all duration-200 active:scale-95
                ${btn === '=' 
                  ? 'bg-green-500/80 hover:bg-green-600/80 text-white row-span-2' 
                  : ['+', '-'].includes(btn)
                    ? 'bg-indigo-500/50 hover:bg-indigo-600/50 text-white'
                    : 'bg-white/10 hover:bg-white/20 text-white'}`}
            >
              {btn}
            </button>
          ))}

          <button
            onClick={() => handleNumber('0')}
            className="col-span-2 p-4 text-xl font-bold rounded-2xl bg-white/10 hover:bg-white/20 text-white transition-all duration-200 active:scale-95"
          >
            0
          </button>
          <button
            onClick={() => handleNumber('.')}
            className="p-4 text-xl font-bold rounded-2xl bg-white/10 hover:bg-white/20 text-white transition-all duration-200 active:scale-95"
          >
            .
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
