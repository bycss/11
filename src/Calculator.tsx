import { useState } from 'react';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');

  const handleNumber = (number: string) => {
    if (display === '0') {
      setDisplay(number);
    } else {
      setDisplay(display + number);
    }
  };

  const handleOperator = (operator: string) => {
    setEquation(display + ' ' + operator + ' ');
    setDisplay('0');
  };

  const handleEqual = () => {
    const result = eval(equation + display);
    setDisplay(result.toString());
    setEquation('');
  };

  const handleClear = () => {
    setDisplay('0');
    setEquation('');
  };

  const handleDecimal = () => {
    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="backdrop-blur-lg bg-white/20 p-6 rounded-2xl shadow-2xl w-full max-w-xs">
        <h1 className="text-2xl font-bold text-white text-center mb-4">计算器</h1>
        <div className="bg-white/10 p-4 rounded-xl mb-4">
          <div className="text-sm text-gray-200 h-6">{equation}</div>
          <div className="text-3xl text-white text-right font-semibold">{display}</div>
        </div>
        
        <div className="grid grid-cols-4 gap-2">
          <button
            onClick={handleClear}
            className="col-span-2 bg-red-500/80 hover:bg-red-600/80 text-white p-4 rounded-xl transition-all duration-200 text-xl font-semibold active:scale-95"
          >
            AC
          </button>
          <button
            onClick={() => handleOperator('/')}
            className="bg-purple-500/80 hover:bg-purple-600/80 text-white p-4 rounded-xl transition-all duration-200 text-xl font-semibold active:scale-95"
          >
            ÷
          </button>
          <button
            onClick={() => handleOperator('*')}
            className="bg-purple-500/80 hover:bg-purple-600/80 text-white p-4 rounded-xl transition-all duration-200 text-xl font-semibold active:scale-95"
          >
            ×
          </button>
          
          {['7', '8', '9'].map((num) => (
            <button
              key={num}
              onClick={() => handleNumber(num)}
              className="bg-white/20 hover:bg-white/30 text-white p-4 rounded-xl transition-all duration-200 text-xl font-semibold active:scale-95"
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => handleOperator('-')}
            className="bg-purple-500/80 hover:bg-purple-600/80 text-white p-4 rounded-xl transition-all duration-200 text-xl font-semibold active:scale-95"
          >
            -
          </button>
          
          {['4', '5', '6'].map((num) => (
            <button
              key={num}
              onClick={() => handleNumber(num)}
              className="bg-white/20 hover:bg-white/30 text-white p-4 rounded-xl transition-all duration-200 text-xl font-semibold active:scale-95"
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => handleOperator('+')}
            className="bg-purple-500/80 hover:bg-purple-600/80 text-white p-4 rounded-xl transition-all duration-200 text-xl font-semibold active:scale-95"
          >
            +
          </button>
          
          {['1', '2', '3'].map((num) => (
            <button
              key={num}
              onClick={() => handleNumber(num)}
              className="bg-white/20 hover:bg-white/30 text-white p-4 rounded-xl transition-all duration-200 text-xl font-semibold active:scale-95"
            >
              {num}
            </button>
          ))}
          <button
            onClick={handleEqual}
            className="bg-green-500/80 hover:bg-green-600/80 text-white p-4 rounded-xl transition-all duration-200 text-xl font-semibold active:scale-95 row-span-2"
          >
            =
          </button>
          
          <button
            onClick={() => handleNumber('0')}
            className="bg-white/20 hover:bg-white/30 text-white p-4 rounded-xl transition-all duration-200 text-xl font-semibold active:scale-95 col-span-2"
          >
            0
          </button>
          <button
            onClick={handleDecimal}
            className="bg-white/20 hover:bg-white/30 text-white p-4 rounded-xl transition-all duration-200 text-xl font-semibold active:scale-95"
          >
            .
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
