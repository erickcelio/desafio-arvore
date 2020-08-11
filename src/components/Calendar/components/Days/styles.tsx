import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 16px 16px 16px;
  border-radius: ${props => props.theme.borderRadius[1]};
  border: 1px solid ${props => props.theme.colors.display[300]};
`;

export const WeekAndDaysContainer = styled.div`
  display: flex;
`;

export const WeekContainer = styled.div`
  & + & {
    margin-left: 2px;
  }
  position: relative;
`;

export const DaysNames = styled.div`
  display: flex;
  font-size: 10px;
  margin-right: 8px;
  flex-direction: column;
  justify-content: space-evenly;
  color: ${props => props.theme.colors.display[400]};
`;

export const MonthName = styled.div`
  top: -20px;
  font-size: 10px;
  position: absolute;
  color: ${props => props.theme.colors.display[400]};
`;

export const InformationsContainer = styled.div`
  display: flex;
  margin-top: 16px;
  justify-content: space-between;

  a {
    font-size: 12px;
    margin-left: 8px;
  }
`;
