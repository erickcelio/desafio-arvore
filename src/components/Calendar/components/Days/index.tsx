import React, { useCallback, useMemo } from 'react';

import { getWeekDaysFromYears, dayObject } from '../../../../utils/days';
import { IContribution } from '../..';

import {
  Container,
  WeekContainer,
  DaysNames,
  MonthName,
  InformationsContainer,
  WeekAndDaysContainer,
} from './styles';
import Day from './components/Day';
import Subtitle from './components/Subtitle';

interface IDays {
  years: number[];
  contributions: IContribution[];
}

const Days: React.FC<IDays> = ({ contributions, years }) => {
  const weeks = useMemo(() => {
    return getWeekDaysFromYears(years, 54);
  }, [years]);

  const getContributions = useCallback(
    (date: string) => {
      const findedContribution = contributions.find(
        contribution => contribution.date === date,
      );
      return findedContribution?.count || 0;
    },
    [contributions],
  );

  const renderMonthName = useCallback((week: dayObject[]) => {
    const [firstDay, secondDay] = week;

    if (
      secondDay &&
      firstDay.monthName === secondDay.monthName &&
      parseInt(firstDay.day, 10) < 8
    ) {
      return <MonthName>{firstDay.monthName}</MonthName>;
    }
  }, []);

  return (
    <Container>
      <WeekAndDaysContainer>
        <DaysNames>
          <span>Mon</span>
          <span>Wed</span>
          <span>Fri</span>
        </DaysNames>
        {weeks.map(week => (
          <WeekContainer key={`week-${week[0].date}`}>
            {renderMonthName(week)}
            {week.map(({ day, monthName, year, date }) => (
              <Day
                key={date}
                day={day}
                month={monthName}
                year={year}
                contributions={getContributions(date)}
              />
            ))}
          </WeekContainer>
        ))}
      </WeekAndDaysContainer>

      <InformationsContainer>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://docs.github.com/en/github/setting-up-and-managing-your-github-profile/why-are-my-contributions-not-showing-up-on-my-profile"
        >
          Learn how we count contributions.
        </a>
        <Subtitle />
      </InformationsContainer>
    </Container>
  );
};

export default Days;
