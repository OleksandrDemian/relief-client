import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: ${p => p.theme.section.padding};
`;

export const InnerContainer = styled.div`
  width: 100%;
`;
