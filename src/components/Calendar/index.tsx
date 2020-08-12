import React, { useMemo } from 'react';

import Days from './components/Days';
import { Container, CalendarHeader } from './styles';
import { countContributions } from '../../services/contributions';

export interface IContribution {
  date: string;
  count: number;
}

interface ICalendar {
  year: number;
  contributions: IContribution[];
}

const Calendar: React.FC<ICalendar> = ({ year, contributions }) => {
  const title = useMemo(
    () => `${countContributions(contributions, year)} contributions in ${year}`,
    [contributions, year],
  );

  return (
    <Container>
      <CalendarHeader>
        <h3>{title}</h3>
        <span>Contribution settings</span>
      </CalendarHeader>
      <Days years={[year - 1, year]} contributions={contributions} />
    </Container>
  );
};

export default Calendar;
