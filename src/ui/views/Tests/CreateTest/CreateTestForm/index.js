import React, {useState} from "react";
import Input from "../../../../components/Input";
import {bindValue} from "../../../../utils/bindValue";
import Button from "../../../../components/Button";
import {ColumnForm} from "../../../../components/Form/styled";
import {ButtonsRow} from "../../../../components/Button/styled";
import {ReactComponent as SaveIcon} from "../../../../assets/ionicons/save-outline.svg"
import ProjectSelect from "../../../../components/Helpers/ProjectSelect";
import {stringToNumber} from "../../../../../utils/stringToNumber";

const DEFAULT_DESCRIPTION =
`### Description

### Setup

### How to reproduce
`;

const CreateTestForm = ({onTestSubmit, disabled, placeHolder, showProjectSelect}) => {
	const [name, setName] = useState(placeHolder?.name || "");
	const [shortDescription, setShortDescription] = useState(placeHolder?.shortDescription || "");
	const [description, setDescription] = useState(placeHolder?.description || DEFAULT_DESCRIPTION);
	const [projectId, setProjectId] = useState(placeHolder?.projectId);

	const onSubmit = (e) => {
		e.preventDefault();
		e.stopPropagation();
		onTestSubmit({
			id: placeHolder?.id || undefined,
			name,
			shortDescription,
			description,
			projectId: stringToNumber(projectId)
		});
	};

	return (
		<ColumnForm onSubmit={onSubmit}>
			{showProjectSelect && (
				<ProjectSelect
					value={projectId}
					onChange={(id) => setProjectId(id)}
				/>
			)}
			<Input disabled={disabled} label="Name" value={name} onInput={bindValue(setName)} />
			<Input
				disabled={disabled}
				label="Short description"
				value={shortDescription}
				onInput={bindValue(setShortDescription)}
				maxLength={150}
			/>
			<Input
				type="multiline"
				label="Description (markdown)"
				value={description}
				onInput={bindValue(setDescription)}
				maxLength={1000}
				disabled={disabled}
			/>
			<ButtonsRow>
				<Button color="primary" variant="contained" type="submit" disabled={disabled}>
					<SaveIcon />
					Submit
				</Button>
			</ButtonsRow>
		</ColumnForm>
	);
};

export default CreateTestForm;
