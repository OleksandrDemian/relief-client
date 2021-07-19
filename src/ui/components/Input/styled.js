import styled, {css} from "styled-components";
import {from} from "../../../hooks/useMediaQuery";

const INPUT_STYLES = css`
  border-radius: 0.25rem;
  border: 0.0625rem solid #DEDCDB;
  display: inline-flex;
  font-size: 0.875rem;
  line-height: 1.375rem;
  padding: 0.25rem;
`;

export const InputContainer = styled.div`
  ${({theme, disabled = false}) => css`
    display: flex;
    flex-direction: column;
    
    overflow: hidden;
    gap: 0.1rem;
    margin: 0.2rem 0;

    :focus-within {
      border-color: ${theme.colors.borderActive};
    }
    
    ${disabled && css`
      ${StyledInput} {
        background-color: #b9bbbe;
      }
      ${StyledTextArea} {
        background-color: #b9bbbe;
      }
    `}
  `}
`;

export const StyledLabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledLabel = styled.label`
  ${({theme}) => css`
    font-size: ${theme.fontSizes.subtext};
    color: ${theme.colors.text};

    ${from.tablet} {
      font-size: ${theme.fontSizes.subtext};
    }
  `}
`;

export const StyledInput = styled.input`
  ${INPUT_STYLES}
`;

export const StyledTextArea = styled.textarea`
  resize: vertical;
  min-height: 10rem;
  ${INPUT_STYLES}
`;
