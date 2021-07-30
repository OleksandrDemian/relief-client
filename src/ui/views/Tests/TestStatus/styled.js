import styled, {css} from "styled-components";
import Status from "../../../../enum/status";

export const TestStatusesContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const TestStatusContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0 0.5rem;
  ${({theme}) => css`
    border: ${theme.misc.border};
    border-radius: ${theme.border.radius};
    background-color: ${({status}) => {
      switch (status) {
        case Status.PASSED.id:
          return theme.colors.success[0];
        case Status.NOT_PASSED.id:
          return theme.colors.error[0];
        case Status.PENDING.id:
        default:
          return theme.colors.warning[0];
      }
    }};
  `}
`;

export const TestStatusNameText = styled.span`
  font-weight: bold;
  color: white;
`;
