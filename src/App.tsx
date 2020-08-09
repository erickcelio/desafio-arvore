import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/GlobalStyle';
import Theme from './styles/Theme';
import Calendar from './components/Calendar';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Calendar />
    </ThemeProvider>
  );
};

export default App;
