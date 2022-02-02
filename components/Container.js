import styles from '../styles/Container.module.css';

const Container = props => {
	return(
		<div className={styles.container}>
			<div className={styles.left}></div>
			<div className={styles.right}>
				{props.children}
			</div>
		</div>
	)
}

export default Container;