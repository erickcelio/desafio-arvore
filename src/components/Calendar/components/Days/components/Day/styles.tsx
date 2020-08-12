import styled, { css } from 'styled-components';

export const Contribution = styled.div<{ contributions: number }>`
  width: 10px;
  height: 10px;

  ${({ theme, contributions }) => {
    if (contributions > 0 && contributions < 11) {
      return css`
        background-color: ${theme.colors.primary[100]};
      `;
    }

    if (contributions > 10 && contributions < 21) {
      return css`
        background-color: ${theme.colors.primary[200]};
      `;
    }

    if (contributions > 20 && contributions < 31) {
      return css`
        background-color: ${theme.colors.primary[300]};
      `;
    }

    if (contributions > 30) {
      return css`
        background-color: ${theme.colors.primary[400]};
      `;
    }

    return css`
      background-color: ${theme.colors.primary[0]};
    `;
  }};
`;

export const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: center;

  & + & {
    margin-top: 2px;
  }
`;

interface IDayInfo {
  show: boolean;
}

export const DayInfo = styled.div<IDayInfo>`
  z-index: 1;
  color: white;
  padding: 8px;
  bottom: 15px;
  display: none;
  font-size: 14px;
  position: absolute;
  white-space: nowrap;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: ${props => props.theme.borderRadius[1]};

  ${({ show }) =>
    show &&
    css`
      display: flex;
    `}

  &::after {
    width: 0;
    height: 0;
    content: '';
    bottom: -5px;
    position: absolute;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;

    border-top: 5px solid rgba(0, 0, 0, 0.6);
  }
`;
