import React, { useState, useEffect } from 'react';

import { getWeekDaysFromYears } from '../../../../utils/days';

import { Container, WeekContainer } from './styles';
import Day from './components/Day';

const Days: React.FC = () => {
  const [weeks, setWeeks] = useState(getWeekDaysFromYears([2019, 2020], 54));

  useEffect(() => {
    console.log({ weeks });
  }, [weeks]);

  return (
    <Container>
      {weeks.map(week => (
        <WeekContainer>
          {week.map(({ day, monthName, year }) => (
            <Day day={day} month={monthName} year={year} contributions={0} />
          ))}
        </WeekContainer>
      ))}
    </Container>
  );
};

export default Days;
