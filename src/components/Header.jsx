import styled from "styled-components";

export const Header = () => {
	const onClick = () => window.location.reload();


	return (
		<>
			<HeaderContainer>
				<Title onClick={onClick}>Thumbnail Maker</Title>
			</HeaderContainer>
		</>
	);
};

const HeaderContainer = styled.div`
	display: flex;
`;

const Title = styled.div`
	color: #ffffff;
	font-size: 1.5rem;
	margin: 15px;
	cursor: pointer;
	
	&:hover {
		color: #cccccc;
	}
`;