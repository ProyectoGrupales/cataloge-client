import styles from './Modal.module.scss';

export default function Modal({ openModal, setOpenModal }) {
	return openModal ? (
		<div className={styles.mainContainer_div}>
			Modal
			<button onClick={() => setOpenModal(!openModal)}>x</button>
		</div>
	) : null;
}
