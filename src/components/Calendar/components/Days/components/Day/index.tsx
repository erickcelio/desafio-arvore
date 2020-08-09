/* eslint-disable react/jsx-one-expression-per-line */
import React, { useCallback, useState } from 'react';

import { Container, DayInfo } from './styles';

interface IDay {
  day: string | number;
  month: string | number;
  year: string | number;
  contributions: number;
}

const Day: React.FC<IDay> = ({ day, month, year, contributions }) => {
  const [showInfo, setShowInfo] = useState(false);

  const handleOnMouseEnter = useCallback(() => setShowInfo(true), []);
  const handleOnMouseLeave = useCallback(() => setShowInfo(false), []);

  return (
    <Container
      onMouseLeave={handleOnMouseLeave}
      onMouseEnter={handleOnMouseEnter}
    >
      <DayInfo show={showInfo}>
        {contributions || 'No'} contributions on {month} {day}, {year}
      </DayInfo>
    </Container>
  );
};

export default Day;
