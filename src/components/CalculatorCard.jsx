import React from 'react';
import '../styles/calculator.css';
import { DigitButton } from './DigitButton';
import { History } from './History';
import { OperationButton } from './OperationButton';

export const CalculatorCard = () => {
  return (
    <div className="card">
      <div className="calc">
        <h3 className="header">Standard Calculator</h3>
        <div className="main">
          <div className="calc-grid">
            <div className="output">0</div>
            <DigitButton digit="7" />
            <DigitButton digit="8" />
            <DigitButton digit="9" />
            <button>⌫</button>
            <OperationButton operation="÷" operationType="basic" />

            <DigitButton digit="4" />
            <DigitButton digit="5" />
            <DigitButton digit="6" />
            <button>C</button>
            <OperationButton operation="x" operationType="basic" />

            <DigitButton digit="3" />
            <DigitButton digit="2" />
            <DigitButton digit="1" />
            <button>CE</button>
            <OperationButton operation="-" operationType="basic" />

            <button>+/-</button>
            <DigitButton digit="0" />
            <DigitButton digit="." />
            <OperationButton operation="%" />
            <OperationButton operation="+" operationType="basic" />

            <OperationButton operation="1/x" />
            <OperationButton operation="x²" />
            <OperationButton operation="√" />
            <button className="equal-btn">=</button>
          </div>
          <div className="history">
            <div className="header">History</div>
            <div className="history-list">
              <History history="2+3=5" />
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm4 12H8v-9h2v9zm6 0h-2v-9h2v9zm.618-15L15 2H9L7.382 4H3v2h18V4z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
