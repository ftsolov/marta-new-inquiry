import React from 'react';

const Question = ({question}) => {
  return (
    <h1 className={'text-3xl text-navy font-semibold mb-8'}>
      {question}
    </h1>
  );
};

export default Question;
