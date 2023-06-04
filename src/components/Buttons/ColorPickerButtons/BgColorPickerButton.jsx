import { BiColorFill } from "react-icons/bi";
import styled from "styled-components";
import { useState } from "react";
import { ColorPicker } from "../../Tools/ColorPicker";

/*
기능: 이 버튼을 누르면 Preview의 배경색이 변경. 컬러 선택기가 오픈.
 */
export const BgColorPickerButton = () => {
	const [isClick, setIsClick] = useState(false);

	const onClick = () => setIsClick(!isClick);

	return (
		<div className={'ColorPickerWrapper'}>
			<Button onClick={onClick}>
				<BiColorFill/>
			</Button>

			{
				isClick && (
					<div>
						<ColorPicker/>
					</div>
				)
			}
		</div>
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