import { BiColorFill } from "react-icons/bi";
import styled from "styled-components";

export const BgColorPickerButton = () => {
	return (
		<>
			<Button>
				<BiColorFill/>
			</Button>
		</>
	);
};

const Button = styled.button`
	background-color: #e3e3e3;
	width: 30px;
	height: 30px;
	outline: none;
	border: none;
	border-radius: 5px;
	cursor: pointer;

	&:hover {
		background-color: #a3a3a3;
	}
`;