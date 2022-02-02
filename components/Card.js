import Link from 'next/link';
import styles from '../styles/Card.module.css';
import { Markup } from 'react-render-markup';

const Card = ({_id, title, desc, image,  price}) => {
	return(
		<div className={styles.container}>
			<Link href={`/products/${_id}`}>
				<img src={image} style={{cursor: 'pointer', objectFit: 'cover'}}  />
			</Link>
			<h1 className={styles.title}>{title}</h1>
			<span className={styles.price}>${price}</span>
			<div className={styles.desc}>
				<Markup markup={`${desc.substr(0, 20)}...`} />
			</div>
		</div>
	)
}

export default Card;