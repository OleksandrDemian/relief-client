import styled, {css} from "styled-components";
import {from} from "../../../hooks/useMediaQuery";

export const InputContainer = styled.div`
  ${({theme, disabled = false}) => css`
    display: flex;
    flex-direction: column;

    border: ${theme.misc.border};
    border-radius: ${theme.border.radius};
    overflow: hidden;
    padding: 0.5rem;
    gap: 0.4rem;

    :focus-within {
      border-color: ${theme.colors.borderActive};
    }
    
    ${disabled && css`
      background-color: #b9bbbe;
      ${StyledLabelContainer} {
        background-color: #b9bbbe;
      }
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
    padding: 0 1rem;
    color: ${theme.colors.text};

    ${from.tablet} {
      font-size: ${theme.fontSizes.subtext};
    }
  `}
`;

export const StyledInput = styled.input`
  ${({theme}) => css`
    border: none;
    flex-grow: 1;
    font-size: ${theme.fontSizes.text};
    padding: 0 1rem;
    color: ${theme.colors.text};
    margin: 0;
    outline: 0;
  `}
`;

export const StyledTextArea = styled.textarea`
  ${({theme}) => css`
    border: none;
    flex-grow: 1;
    font-size: ${theme.fontSizes.text};
    padding: 0 1rem;
    color: ${theme.colors.text};
    margin: 0;
    outline: 0;
    resize: vertical;
    min-height: 10rem;
  `}
`;
