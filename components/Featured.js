import {useState} from 'react';
import styles from '../styles/Featured.module.css';
import Image from 'next/image';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Featured = props => {
	const [index, setIndex] = useState(0);
	const images = [
		'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',

		'https://images.unsplash.com/photo-1556910096-6f5e72db6803?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
		
		'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=968&q=80'
	]

	const handleClick = direction => {
		if(direction === 'l'){
			setIndex(index !== 0 ? index - 1 : 2)
		}
		if(direction === 'r'){
			setIndex(index !== 2 ? index + 1 : 2)
		}
	}


	return(
		<div className={styles.container}>
			{index !== 0 && <div className={styles.arrowLeftContainer} onClick={() => handleClick('l')}>
				<ArrowBackIosIcon sx={{
					color: '#fff',
					fontSize: 48
				}}/>
			</div>}		
			<div className={styles.wrapper}>
				<div className={styles.imageContainer} style={{transform: `translateX(${-100*index}vw)`}}>
					{images.map((src, i) => (
						<img key={i} className={styles.img} src={`${src}`} height='100%' width='100%' />
					))}
				</div>
			</div>
			{index !== 2 && <div className={styles.arrowRightContainer} onClick={() => handleClick('r')}>
				<ArrowForwardIosIcon fontSize='large' sx={{
					color: '#fff',
					fontSize: 48
				}}/>
			</div>}
		</div>
	)
}

export default Featured;