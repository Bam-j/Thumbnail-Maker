import styled from "styled-components";
import { FontColorPickerButton } from "./FontColorPickerButton";
import { BgColorPickerButton } from "./BgColorPickerButton";

export const ColorPickerButtons = () => {
	return (
		<ColorPickerButtonsWrapper>
			<FontColorPickerButton/>
			<BgColorPickerButton/>
		</ColorPickerButtonsWrapper>
	);
};

const ColorPickerButtonsWrapper = styled.div`
	display: flex;
	justify-content: center;
	padding-top: 1rem;
	transform: scale(1.5, 1.5);
`;