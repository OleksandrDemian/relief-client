import SectionContainer from "../../../components/SectionContainer";
import CreateTest from "../CreateTest";

const NewTest = ({projectId}) => {
	return (
		<SectionContainer>
			<CreateTest
				projectId={projectId}
			/>
		</SectionContainer>
	);
};

export default NewTest;
