import styled from "styled-components";

export const StyledSelect = styled.select`
  border-radius: 0.25rem;
  border: 0.0625rem solid #DEDCDB;
  font-size: 0.875rem;
  line-height: 1.375rem;
  padding: 0.4rem;

  :disabled {
    background-color: #b9bbbe;
  }
`;

export const StyledSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  gap: 0.1rem;
  margin: 0.2rem 0;
`;
