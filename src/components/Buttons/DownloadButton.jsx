import styled from "styled-components";
import Button from '@mui/material/Button';
import { BiDownload } from "react-icons/bi";

export const DownloadButton = ({ onClick }) => {
	return (
		<DownloadButtonWrapper>
			<Button
				sx={{
					width: 'auto', height: '1rem', color: '#2B91FF', marginTop: '0.25rem'
				}}
				varient={'outlined'}
				size={'small'}
				onClick={() => onClick()}>
				<BiDownload/>
				&nbsp;download
			</Button>
		</DownloadButtonWrapper>
	);
};

const DownloadButtonWrapper = styled.div`
	display: flex;
	justify-content: center;
`;