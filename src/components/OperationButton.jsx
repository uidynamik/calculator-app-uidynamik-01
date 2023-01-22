import React from 'react';

export const OperationButton = ({ operationType, operation }) => {
  return (
    <button className={operationType === 'basic' ? 'basic-operation-btn' : ''}>
      {operation}
    </button>
  );
};
