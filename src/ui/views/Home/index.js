import React from "react";
import SectionContainer from "../../components/SectionContainer";
import {Heading} from "../../components/Heading";
import Projects from "./ProjectsList";

const Home = () => {
	return (
		<SectionContainer>
			<Heading>
				Welcome to Laser Unicorns
			</Heading>
			<p>The place where your tests are invalidated magically</p>
			<Projects />
		</SectionContainer>
	);
}

export default Home;
