import React, {useMemo, useState} from "react";
import Input from "../../../components/Input";
import ProjectSelect from "../../../components/ProjectSelect";
import {bindValue} from "../../../utils/bindValue";
import SectionContainer from "../../../components/SectionContainer";
import {useProjectsContext} from "../../../../context/projects";
import {usePostEnvironment} from "../../../../dataHooks/useEnvironments";
import {stringToNumber} from "../../../../utils/stringToNumber";
import {Heading} from "../../../components/Heading";

const NewEnvironment = () => {
	const {currentProjectId} = useProjectsContext();
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [projectId, setProjectId] = useState(currentProjectId);
	const projectIdNum = useMemo(() => stringToNumber(projectId), [projectId]);
	const {
		mutate,
		isLoading
	} = usePostEnvironment(projectIdNum);

	const onSubmit = (e) => {
		e.stopPropagation();
		e.preventDefault();

		mutate({
			projectId: projectIdNum,
			name,
			description
		});
	};

	const disable = isLoading;

	return (
		<SectionContainer>
			<Heading>Create environment</Heading>
			<form onSubmit={onSubmit}>
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
				<button
					type="submit"
					disabled={disable}
				>
					Submit
				</button>
			</form>
		</SectionContainer>
	);
};

export default NewEnvironment;
