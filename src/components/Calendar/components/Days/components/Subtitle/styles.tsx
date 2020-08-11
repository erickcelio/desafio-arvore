import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  span {
    margin: 0 8px;
    font-size: 12px;
    color: ${props => props.theme.colors.display[400]};
  }

  div {
    width: 10px;
    height: 10px;

    & + div {
      margin-left: 2px;
    }

    &:nth-of-type(1) {
      background-color: ${props => props.theme.colors.primary[0]};
    }

    &:nth-of-type(2) {
      background-color: ${props => props.theme.colors.primary[100]};
    }

    &:nth-of-type(3) {
      background-color: ${props => props.theme.colors.primary[200]};
    }

    &:nth-of-type(4) {
      background-color: ${props => props.theme.colors.primary[300]};
    }

    &:nth-of-type(5) {
      background-color: ${props => props.theme.colors.primary[400]};
    }
  }
`;
