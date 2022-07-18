import React from 'react';
import ME from './logo.png';
import ARROW from './arrow.svg';

const App = () => {
  return (
    <div>
      <h1>
        React SPA - {process.env.NODE_ENV} {process.env.name}
      </h1>
    </div>
  );
};

export default App;
