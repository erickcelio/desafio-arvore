import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/GlobalStyle';
import Theme from './styles/Theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <span>Teste Àrvore</span>
    </ThemeProvider>
  );
};

export default App;
