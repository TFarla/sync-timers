import React from 'react';
import styled from 'styled-components';
import Timers from './components/timers';

const StyleApp = styled.div({
  margin: 0,
  fontFamily: " -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen'",
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale"
});


function App() {
  return (
    <StyleApp>
      <Timers />
    </StyleApp>
  );
}

export default App;
