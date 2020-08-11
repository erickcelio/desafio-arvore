import React, { useState, useEffect, useCallback } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/GlobalStyle';
import Theme from './styles/Theme';
import Calendar, { IContribution } from './components/Calendar';
import { getContributions } from './services/contributions';

const App: React.FC = () => {
  const [contributions, setContributions] = useState<IContribution[]>([]);

  const fetchContributions = useCallback(async () => {
    setContributions(await getContributions());
  }, []);

  useEffect(() => {
    fetchContributions();
  }, [fetchContributions]);

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Calendar contributions={contributions} year={2017} />
    </ThemeProvider>
  );
};

export default App;
