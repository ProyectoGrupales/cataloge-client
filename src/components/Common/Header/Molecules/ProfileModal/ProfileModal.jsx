// Icons
import CloseIcon from '@mui/icons-material/Close';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import style from './ProfileModal.module.scss';

import parserHour from '../../../../../services/parserAttentionHour';
const ProfileModal = ({ data, open, setOpen }) => {
	const attentionHour = parserHour(data.attention_hour);
	return (
		<div
			className={style.container + ' ' + `${open ? style.open : style.close}`}
		>
			<button
				className={style.closeButton}
				onClick={() => {
					setOpen(!open);
				}}
			>
				<CloseIcon />
			</button>

			<div className={style.header}>
				{data.image ? (
					<img src={data.image} />
				) : (
					<div className={style.imgFallback} />
				)}

				<div>
					<h1>{data.name}</h1>

					<div className={style.description}>
						<p>{data.description}</p>
					</div>
				</div>
			</div>

			<div className={style.hourContainer}>
				<WatchLaterIcon fontSize='small' />
				<p>{attentionHour}</p>
			</div>

			<div className={style.branch_office}>
				<p>Sucursales:</p>
				{data.branch_office.map((item, index) => (
					<div key={index}>
						<LocationOnIcon fontSize='small' />
						<h5>{item}</h5>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProfileModal;
