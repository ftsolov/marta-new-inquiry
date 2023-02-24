import React from 'react';

const Question = ({question}) => {
  return (
    <h1 className={'text-2xl text-navy font-semibold mb-6'}>
      {question}
    </h1>
  );
};

export default Question;
