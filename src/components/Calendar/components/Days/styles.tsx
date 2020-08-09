import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const WeekContainer = styled.div`
  & + & {
    margin-left: 4px;
  }
`;
