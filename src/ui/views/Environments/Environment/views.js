import {EnvironmentContainer, EnvironmentHead} from "./styled";
import {ButtonsRow} from "../../../components/Button/styled";
import Button from "../../../components/Button";
import React, {useState} from "react";
import Input from "../../../components/Input";
import {bindValue} from "../../../utils/bindValue";

export const EnvironmentView = ({ name, description, _id, onEdit }) => {
	return (
		<EnvironmentContainer>
			<EnvironmentHead>{name}</EnvironmentHead>
			<p>{description}</p>
			<ButtonsRow>
				<Button onClick={onEdit}>Edit</Button>
			</ButtonsRow>
		</EnvironmentContainer>
	);
};

export const EnvironmentEditView = ({ name, description, _id, onClose, onSave, onRemove, disabled }) => {
	const [environment, setEnvironment] = useState({
		name,
		description
	});

	const setName = (name) => setEnvironment(env => ({
		...env,
		name
	}));

	const setDescription = (description) => setEnvironment(env => ({
		...env,
		description
	}));

	return (
		<EnvironmentContainer>
			<Input
				label="Name"
				value={environment.name}
				onInput={bindValue(setName)}
				disabled={disabled}
			/>
			<Input
				label="Description"
				value={environment.description}
				onInput={bindValue(setDescription)}
				disabled={disabled}
			/>
			<ButtonsRow>
				<Button onClick={onClose} disabled={disabled}>Close</Button>
				<Button onClick={() => onSave(environment)} disabled={disabled}>Update</Button>
				<Button onClick={onRemove} disabled={disabled}>Delete</Button>
			</ButtonsRow>
		</EnvironmentContainer>
	);
};
