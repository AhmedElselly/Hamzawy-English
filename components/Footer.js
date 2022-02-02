import styles from '../styles/Footer.module.css';

const Footer = props => {
	return(
		<div className={styles.container}>
			<div className={styles.item}>
				<img src='' />
			</div>
			<div className={styles.item}>
				<div className={styles.card}>
					<h2 className={styles.moto}>
						oh yes, we did the pizza, well baked slice of pizza
					</h2>
				</div>
				<div className={styles.card}>
					<h1 className={styles.title}>Find our restaurants</h1>
					<p className={styles.text}>
						1654 R. Don Road #235
						<br/> NewYork, 85022
						<br/> (602) 867-1011
					</p>
				</div>
				<div className={styles.card}></div>
			</div>
		</div>
	)
}

export default Footer;