import styles from '../styles/ProductList.module.css';
import Link from 'next/link';
import Card from './Card';
import axios from 'axios';
import { useEffect, useState } from 'react';

const ProductList = (props) => {
	const [list, setList] = useState([]);
	useEffect(() => {	
		setList(props.products)
	}, [list])

  const listingPizza = () => {
    return list.map(product => (
      <Card key={product._id} _id={product._id} title={product.title} desc={product.desc} image={product.image} price={product.price}  />
    ))
  }
	return(
		<div className={styles.container}>
			<h1 className={styles.title}>THE MOST FAVORITE PRODUCTS</h1>

			<p className={styles.desc}>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque leo eu nisl efficitur pellentesque. Nunc hendrerit nunc ac luctus
			</p>
			{props.search && <Link href='/products' passHref>
            <a className={styles.searchMoreTop}>Search more</a>
          </Link>}

			<div className={styles.wrapper}>
				{listingPizza()}
			</div>
			{props.search && <Link href='/products' passHref>
            <a className={styles.searchMoreTop}>Search more</a>
          </Link>}
		</div>
	)
};

export default ProductList;