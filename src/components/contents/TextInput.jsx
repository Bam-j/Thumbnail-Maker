import styled from "styled-components";

export const TextInput = () => {
	const fontSizeList = [20, 30, 40, 50, 60, 70, 80];

	return (
		<InputWrapper>
			<Input/>
			<SelectFontSize>
				{
					fontSizeList.map(size =>(
						<option key={size} value={size}>{size}</option>
					))
				}
			</SelectFontSize>
		</InputWrapper>
	);
};

const InputWrapper = styled.div`
	display: flex;
	justify-content: center;
	margin: auto;
`;

const Input = styled.input`
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

const SelectFontSize = styled.select`
	width: 50px;
	height: 20px;
	margin: auto;
`;