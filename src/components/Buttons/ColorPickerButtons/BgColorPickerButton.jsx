import { BiColorFill } from "react-icons/bi";
import styled from "styled-components";

/*
기능: 이 버튼을 누르면 Preview의 배경색이 변경. 컬러 선택기가 오픈.
 */
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