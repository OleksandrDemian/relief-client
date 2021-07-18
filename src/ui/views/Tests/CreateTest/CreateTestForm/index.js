import React, {useState} from "react";
import Input from "../../../../components/Input";
import {bindValue} from "../../../../utils/bindValue";
import {TestCreatorFormContainer} from "./styled";
import Button from "../../../../components/Button";

const DEFAULT_DESCRIPTION =
`### Description

### Setup

### How to reproduce
`;

const CreateTestForm = ({onTestSubmit, disabled, placeHolder}) => {
	const [name, setName] = useState(placeHolder?.name || "");
	const [shortDescription, setShortDescription] = useState(placeHolder?.shortDescription || "");
	const [description, setDescription] = useState(placeHolder?.description || DEFAULT_DESCRIPTION);

	const onSubmit = (e) => {
		e.preventDefault();
		e.stopPropagation();
		onTestSubmit({
			id: placeHolder?.id || undefined,
			name,
			shortDescription,
			description
		});
	};

	return (
		<TestCreatorFormContainer onSubmit={onSubmit}>
			<Input disabled={disabled} type="input" label="Name" value={name} onInput={bindValue(setName)} />
			<Input
				disabled={disabled}
				type="input"
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
			<Button color="primary" variant="contained" type="submit" disabled={disabled}>
				Submit
			</Button>
		</TestCreatorFormContainer>
	);
};

export default CreateTestForm;
