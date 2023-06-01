import styled from "styled-components";

export const TextInput = () => {
	const fontSizeList = [20, 30, 40, 50, 60, 70, 80];
	const fontList = [
		'Helvetica',
		'Nanum Gothic',
		'Nanum Gothic Coding',
		'Arial',
		'Courier',
		'Noto Sans KR'
	];

	return (
		<InputWrapper>
			<Input placeholder={'문구를 여기에 입력해주세요.'}/>
			<SelectFontSize>
				{
					fontSizeList.map(size => (
						<option key={size} value={size}>{size}</option>
					))
				}
			</SelectFontSize>
			<SelectFont>
				{
					fontList.map(font => (
						<option key={font} value={font}>{font}</option>
					))
				}
			</SelectFont>
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

	&:first-child {
		margin-right: 5px;
	}
	
	&::placeholder {
		font-size: smaller;
	}
`;

const SelectFontSize = styled.select`
	width: 50px;
	height: 20px;
	margin: auto auto auto 5px;
`;

const SelectFont = styled.select`
	width: 100px;
	height: 20px;
	margin: auto auto auto 5px;
	font-size: 0.5rem;
`;