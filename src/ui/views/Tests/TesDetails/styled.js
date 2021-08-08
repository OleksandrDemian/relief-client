import styled from "styled-components";
import {CardsColumn} from "../../../components/Card/styled";
import {ButtonsRow} from "../../../components/Button/styled";
import {InputContainer} from "../../../components/Input/styled";

export const TestDetailsContainer = styled(CardsColumn)``;

export const TestActionsRow = styled(ButtonsRow)`
  align-items: flex-end;

  ${InputContainer} {
    margin: 0;
  }
`;

export const BadgesBar = styled.div`
  display: flex;
  gap: 1rem;
`;
