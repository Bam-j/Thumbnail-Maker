import styled from "styled-components";
import { BiDownload } from "react-icons/bi";

/*
기능: 버튼을 클릭하면, Preview의 이미지가 다운로드
 */
export const DownloadButton = () => {
	return (
		<DownloadButtonWrapper>
			<Download>
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
	background-color: #3a6aff;
	border-radius: 10px;
	outline: none;
	border: none;
	cursor: pointer;
	color: #eaeaea;
	
	&:hover {
		background-color: #6a9aff;
		color: #3a3a3a; 
	}
`;