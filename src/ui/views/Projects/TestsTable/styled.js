import styled from "styled-components";
import {Link} from "react-router-dom";
import {CardContainer, CardsColumn} from "../../../components/Card/styled";

export const TestsContainer = styled(CardsColumn)`
  margin-top: 1rem;
`;

export const TestRowContainer = styled(CardContainer)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const TestRowDescription = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const TestRowTitleLink = styled(Link)`
  text-decoration: none;
`;
