import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CalendarHeader = styled.div`
  display: flex;
  margin-bottom: 12px;
  justify-content: space-between;

  h3 {
    font-weight: normal;
  }

  span {
    display: flex;
    cursor: pointer;
    align-items: center;
    color: ${props => props.theme.colors.display[400]};

    &::after {
      margin-left: 4px;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 6px solid ${props => props.theme.colors.display[400]};

      content: '';
    }
  }
`;
