import React, { useState } from 'react';

const App: React.FC = () => {
  const [display, setDisplay] = useState<string>('0');
  const [history, setHistory] = useState<string>('');
  const [lastOperation, setLastOperation] = useState<string>('');

  const handleNumber = (num: string) => {
    if (display === '0' && num !== '.') {
      setDisplay(num);
    } else if (display.length < 12) {
      if (num === '.' && display.includes('.')) return;
      setDisplay(display + num);
    }
  };

  const handleOperator = (op: string) => {
    setHistory(display + ' ' + op);
    setLastOperation(op);
    setDisplay('0');
  };

  const calculate = () => {
    if (!history) return;
    
    try {
      const expression = history + display;
      const result = eval(expression.replace('×', '*').replace('÷', '/'));
      setDisplay(Number(result.toFixed(8)).toString());
      setHistory('');
    } catch (error) {
      setDisplay('Error');
    }
  };

  const clear = () => {
    setDisplay('0');
    setHistory('');
  };

  const percentage = () => {
    setDisplay((parseFloat(display) / 100).toString());
  };

  const toggleSign = () => {
    setDisplay(display.startsWith('-') ? display.slice(1) : '-' + display);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-slate-800/50 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-slate-700">
        {/* Display */}
        <div className="p-6 space-y-2">
          <div className="text-right text-slate-400 h-6 font-mono text-lg">
            {history}
          </div>
          <div className="text-right text-5xl text-white font-semibold font-mono truncate transition-all">
            {display}
          </div>
        </div>

        {/* Keypad */}
        <div className="grid grid-cols-4 gap-3 p-6 bg-slate-900/30">
          {/* Row 1 */}
          <button onClick={clear}
            className="text-xl font-medium rounded-2xl bg-red-500/20 text-red-500 hover:bg-red-500/30 transition-all duration-200 active:scale-95 p-5">
            AC
          </button>
          <button onClick={toggleSign}
            className="text-xl font-medium rounded-2xl bg-slate-700/50 text-slate-300 hover:bg-slate-700/70 transition-all duration-200 active:scale-95 p-5">
            ±
          </button>
          <button onClick={percentage}
            className="text-xl font-medium rounded-2xl bg-slate-700/50 text-slate-300 hover:bg-slate-700/70 transition-all duration-200 active:scale-95 p-5">
            %
          </button>
          <button onClick={() => handleOperator('÷')}
            className="text-xl font-medium rounded-2xl bg-amber-500/20 text-amber-500 hover:bg-amber-500/30 transition-all duration-200 active:scale-95 p-5">
            ÷
          </button>

          {/* Numbers and operators */}
          {['7', '8', '9', '×', '4', '5', '6', '-', '1', '2', '3', '+'].map((btn) => (
            <button
              key={btn}
              onClick={() => {
                if (['+', '-', '×'].includes(btn)) handleOperator(btn);
                else handleNumber(btn);
              }}
              className={`text-xl font-medium rounded-2xl transition-all duration-200 active:scale-95 p-5
                ${['+', '-', '×'].includes(btn)
                  ? 'bg-amber-500/20 text-amber-500 hover:bg-amber-500/30'
                  : 'bg-slate-700/30 text-white hover:bg-slate-700/50'}`}
            >
              {btn}
            </button>
          ))}

          {/* Bottom row */}
          <button onClick={() => handleNumber('0')}
            className="col-span-2 text-xl font-medium rounded-2xl bg-slate-700/30 text-white hover:bg-slate-700/50 transition-all duration-200 active:scale-95 p-5">
            0
          </button>
          <button onClick={() => handleNumber('.')}
            className="text-xl font-medium rounded-2xl bg-slate-700/30 text-white hover:bg-slate-700/50 transition-all duration-200 active:scale-95 p-5">
            .
          </button>
          <button onClick={calculate}
            className="text-xl font-medium rounded-2xl bg-amber-500 text-white hover:bg-amber-600 transition-all duration-200 active:scale-95 p-5">
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;