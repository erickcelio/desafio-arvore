import React, { useState, useEffect, useCallback } from 'react';
import { ThemeProvider } from 'styled-components';

import Theme from './styles/Theme';
import GlobalStyle from './styles/GlobalStyle';
import Calendar, { IContribution } from './components/Calendar';
import { getContributions } from './services/contributions';
import { SELECTED_YEAR } from './constants';

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
      <Calendar contributions={contributions} year={SELECTED_YEAR} />
    </ThemeProvider>
  );
};

export default App;
