import SectionContainer from "../../../components/SectionContainer";
import CreateTest from "../CreateTest";

const NewTestRoute = ({projectId}) => {
	return (
		<SectionContainer>
			<CreateTest
				projectId={projectId}
			/>
		</SectionContainer>
	);
};

export default NewTestRoute;
