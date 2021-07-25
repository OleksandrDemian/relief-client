import React, {useState} from "react";
import Input from "../../../components/Input";
import ProjectSelect from "../../../components/Helpers/ProjectSelect";
import {bindValue} from "../../../utils/bindValue";
import SectionContainer from "../../../components/SectionContainer";
import {useProjectsContext} from "../../../../context/projects";
import {usePostEnvironment} from "../../../../dataHooks/useEnvironments";
import {Heading} from "../../../components/Heading";
import Button from "../../../components/Button";
import {ColumnForm} from "../../../components/Form/styled";
import {ButtonsRow} from "../../../components/Button/styled";

const NewEnvironmentRoute = () => {
	const {currentProjectId} = useProjectsContext();
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [projectId, setProjectId] = useState(currentProjectId);
	const {
		mutate,
		isLoading
	} = usePostEnvironment(projectId);

	const onSubmit = (e) => {
		e.stopPropagation();
		e.preventDefault();

		mutate({
			projectId,
			name,
			description
		});
	};

	const disable = isLoading;

	return (
		<SectionContainer>
			<Heading>Create environment</Heading>
			<ColumnForm onSubmit={onSubmit}>
				<ProjectSelect
					value={projectId}
					onChange={(projectId) => setProjectId(projectId)}
					disabled={disable}
				/>
				<Input
					label="Name"
					value={name}
					onInput={bindValue(setName)}
					disabled={disable}
				/>
				<Input
					label="Description"
					value={description}
					onInput={bindValue(setDescription)}
					disabled={disable}
				/>
				<ButtonsRow>
					<Button
						type="submit"
						disabled={disable}
					>
						Submit
					</Button>
				</ButtonsRow>
			</ColumnForm>
		</SectionContainer>
	);
};

export default NewEnvironmentRoute;
