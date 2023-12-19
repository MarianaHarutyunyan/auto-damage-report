import React, { useEffect } from 'react';
import { CarDamage } from './components/CarDamage';
import { ApplicationConfigsOptions } from './types';

function App(props: ApplicationConfigsOptions) {
  const { onInit } = props;

  useEffect(() => {
    onInit();
  }, [onInit]);

  return (
    <div>
      <CarDamage {...props} />
    </div>
  );
}

export default App;
