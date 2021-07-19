import React, {useState} from "react";
import Input from "../../../../components/Input";
import {bindValue} from "../../../../utils/bindValue";
import Button from "../../../../components/Button";
import {ColumnForm} from "../../../../components/Form/styled";
import {ButtonsRow} from "../../../../components/Button/styled";

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
		<ColumnForm onSubmit={onSubmit}>
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
					Submit
				</Button>
			</ButtonsRow>
		</ColumnForm>
	);
};

export default CreateTestForm;
