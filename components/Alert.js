import styles from '../styles/Alert.module.css';
import DoneIcon from '@mui/icons-material/Done';

const Alert = ({message}) => {
	return(
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<DoneIcon className={styles.icon} />
				<span>{message}</span>
			</div>
		</div>
	)
}

export default Alert;