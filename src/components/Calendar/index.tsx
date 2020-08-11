import React from 'react';

import { Container } from './styles';
import Days from './components/Days';

export interface IContribution {
  date: string;
  count: number;
}

interface ICalendar {
  year: number;
  contributions: IContribution[];
}

const Calendar: React.FC<ICalendar> = ({ year, contributions }) => {
  return (
    <Container>
      <Days years={[year - 1, year]} contributions={contributions} />
    </Container>
  );
};

export default Calendar;
