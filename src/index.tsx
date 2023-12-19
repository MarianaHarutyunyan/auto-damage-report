import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { getCircles, postCircles } from './store/store';
import defaultOptionsOnlyForDev from './constants/defaultOptions';

if (import.meta.env.VITE_MODE === 'development') {
  const renderElement = document.getElementById('root');
  ReactDOM.createRoot(renderElement as HTMLElement).render(
    <App {...defaultOptionsOnlyForDev} />
  );
} else {
  window.TEST_CAR_APP = {
    init: (options) => {
      const { selector, options: appOptions } = options;
      if (selector && appOptions) {
        const renderElement = document.querySelector(selector);
        if (renderElement) {
          ReactDOM.createRoot(renderElement as HTMLElement).render(
            <App {...appOptions} />
          );
        }
      }
    }
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  const initializedOptions: string[] = await getCircles();

  window.TEST_CAR_APP &&
    window.TEST_CAR_APP.init({
      selector: "#root",
      options: {
        initializedOptions,
        onComplete: (positions: string[]) => {
          postCircles(positions);
        },
        onPositionChange: (positions: string[]) => {
          console.debug(positions)
        },
        onInit: () => {
          console.debug('_Effector Initialization_')
        }
      }
    });
});