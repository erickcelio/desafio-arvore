import React from 'react';

import { Container } from './styles';
import Days from './components/Days';

const Calendar: React.FC = () => {
  return (
    <Container>
      <Days />
    </Container>
  );
};

export default Calendar;
