import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

export const VerticalSpacer = styled.div<{ size?: number }>`
  height: ${({ size = 16 }) => size}pt;
  width: 100%;
`;

export const PrimaryTitle = styled.h2`
  color: ${(props) => props.theme.palette.primary.main};
`;

export const SecondaryTitle = styled.h4`
  color: ${(props) => props.theme.palette.secondary.main};
`;
