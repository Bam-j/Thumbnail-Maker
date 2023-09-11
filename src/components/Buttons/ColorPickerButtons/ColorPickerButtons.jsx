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
	padding-top: 0.5rem;
`;