import React from 'react';

const ProgressBar = ({progress}) => {

  return (
    <div className={'absolute bottom-0 bg-border h-1 w-full'}>
      <div className={'bg-primary h-1 transition'} style={{width: progress/11 * 100 + "%"}}/>
    </div>
  );
};

export default ProgressBar;
