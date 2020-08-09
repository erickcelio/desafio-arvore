import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  position: relative;
  justify-content: center;
  background-color: ${props => props.theme.colors.display[100]};

  & + & {
    margin-top: 4px;
  }
`;

interface IDayInfo {
  show: boolean;
}

export const DayInfo = styled.div<IDayInfo>`
  z-index: 1;
  color: white;
  padding: 8px;
  bottom: 25px;
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
    position: absolute;
    bottom: -5px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;

    border-top: 5px solid rgba(0, 0, 0, 0.6);
  }
`;
