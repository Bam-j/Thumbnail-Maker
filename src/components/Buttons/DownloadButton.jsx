import styled from "styled-components";
import { BiDownload } from "react-icons/bi";

export const DownloadButton = ({ onClick }) => {
	return (
		<DownloadButtonWrapper>
			<Download onClick={() => onClick()}>
				<BiDownload/>
				&nbsp;download
			</Download>
		</DownloadButtonWrapper>
	);
};

const DownloadButtonWrapper = styled.div`
	display: flex;
	justify-content: center;
`;

const Download = styled.button`
	margin-top: 1rem;
	background-color: #3a6add;
	border-radius: 4px;
	outline: none;
	border: none;
	cursor: pointer;
	color: #eaeaea;
	width: 5rem;
	height: 1rem;
	
	&:hover {
		background-color: #6a9add;
		color: #292929;
	}
`;