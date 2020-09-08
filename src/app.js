import React from 'react';

import Grid from './grid';

const App = ({ title }) => {
  return (
    <>
      <div>{title}</div>
      <br />
      <Grid />
    </>
  );
}


export default App;