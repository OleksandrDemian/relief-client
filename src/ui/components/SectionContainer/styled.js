import styled from "styled-components";
import {from} from "../../../hooks/useMediaQuery";

export const Container = styled.div`
  	display: flex;
  	flex-direction: column;
  	align-items: center;
	padding: 1rem;
	max-width: 100vh;
  	width: 100%;

  	${from.tablet} {
      padding: ${p => p.theme.section.padding};
	}
`;

export const InnerContainer = styled.div`
	width: 100%;
`;
