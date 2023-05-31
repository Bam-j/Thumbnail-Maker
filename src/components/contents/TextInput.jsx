import styled from "styled-components";

export const TextInput = () => {
	return (
		<div>
			<InputField/>
		</div>
	);
};

const InputField = styled.input`
	display: flex;
	background: none;
	border-style: none none solid none;
	border-bottom-color: #c3c3c3;
	color: #ffffff;
	padding-top: 1.25rem;
	margin: auto;
	
	&:focus {
		outline: none;
	}
`;