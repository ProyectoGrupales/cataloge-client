// Icons
import CloseIcon from '@mui/icons-material/Close';
import style from './ProfileModal.module.scss';

const ProfileModal = ({ data, open, setOpen }) => {
	if (open) {
		return (
			<div className={style.container + ' ' + style.isVisible}>
				<button
					className={style.closeButton}
					onClick={() => {
						setOpen(!open);
					}}
				>
					<CloseIcon />
				</button>

				<div className={style.header}>
					<img src={data.image} />

					<div>
						<h1>{data.name}</h1>
						<p>
							{data.attention_hour[0][0]}hs a {data.attention_hour[0][1]}
							hs y de {data.attention_hour[1][0]}hs a{' '}
							{data.attention_hour[1][1]}
							hs
						</p>
					</div>
				</div>

				<div className={style.description}>
					<p>{data.description}</p>
				</div>

				<div className={style.branch_office}>
					<p>Sucursales:</p>
					{data.branch_office.map((item, index) => (
						<h5 key={index}>{item}</h5>
					))}
				</div>
			</div>
		);
	}
};

export default ProfileModal;
