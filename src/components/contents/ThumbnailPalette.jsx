import { FiDownload } from "react-icons/fi";

export const ThumbnailPalette = () => {
	return (
		<>
			<div className={'thumbnail-palette-container'}>
				<div
					id={'thumbnail'}
					className={'thumbnail'}
					spellCheck={false}
					contentEditable={'true'}
					suppressContentEditableWarning={true}
					style={{
						width: `250px`,
						height: `150px`,
						backgroundColor: '#ffffff',
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						color: '#000000'
					}}>
					테스트 문구
				</div>
				<FiDownload />
			</div>
		</>
	);
};