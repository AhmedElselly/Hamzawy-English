import { useState, Fragment, useEffect } from 'react';
import Head from 'next/head';
import styles from '../../../styles/Product.module.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {addProduct} from '../../../redux/cartSlice';
import { Markup } from 'react-render-markup';
import Alert from '../../../components/Alert';

const Product = ({product}) => {
	const [size, setSize] = useState(0);
	const [price, setPrice] = useState(product.price);
	const [extras, setExtras] = useState([]);
	const [qty, setQty] = useState(1);
	const [successMessage, setSuccessMessage] = useState('');
	const [success, setSuccess] = useState(false);
	const dispatch = useDispatch();

	const changePrice = number => {
		setPrice(price + number);
	}

	useEffect(() => {
		if(success){
			setTimeout(() => {
				setSuccess(false)
			}, 3000);			
		}
	}, [success]);

	const handleChange = (e, option) => {
		const checked = e.target.checked;
		if(checked){
			changePrice(option.price)
			setExtras(prev => [...prev, option]);
		} else {
			changePrice(-option.price);
			setExtras(extras.filter(extra => extra._id !== option._id));
		}
	}

	const handleQty = e => {
		setQty(e.target.value);
	}

	const handleAddToCart = () => {
		dispatch(addProduct({...product, extras, price, qty}));
		setSuccess(true)
		setSuccessMessage('Added product into cart');
	}


	return(
		<Fragment>
			<Head>
				<title>{product.title}</title>
				<meta name="description" content="Best products shop in town" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
		<div className={styles.container}>
			<div className={successMessage ? styles.alert : styles.none}>
				{success && (
					<Alert message={successMessage} />
				)}
			</div>
			<div className={styles.left}>
				<div className={styles.imgContainer}>
					<img src={product.image} style={{objectFit: 'contain'}} width={'100%'} height={'100%'} />
				</div>
			</div>
			<div className={styles.right}>
				<h1 className={styles.title}>{product.title}</h1>
				<div>
					<Markup markup={product.desc} />
				</div>
				<span className={styles.price}>${price}</span>

				{product.extraOptions && (
					<Fragment>
						<h3 className={styles.choose}>Choose additional ingredients</h3>
						<div className={styles.ingredients}>
							<div className={styles.option}>
								{product.extraOptions.map(option => (
									<Fragment>
										<input 
										type='checkbox' 
										id='double' 
										name='double' 
										className={styles.checkbox} 
										onChange={e => handleChange(e, option)}
									/>
									<label htmlFor='double'>Double Ingredients</label>
									</Fragment>
								))}
							</div>
							
						</div>
					</Fragment>
				)}
				
				<div className={styles.add}>
					<input type='number' onChange={handleQty} defaultValue={1} className={styles.qty} />
					<button onClick={handleAddToCart} className={styles.btn}>Add to cart</button>
				</div>
			</div>
		</div>
		</Fragment>
	)
}

export const getServerSideProps = async (ctx) => {
  const url = 'http://localhost:3000/api/products';
  const res = await axios.get(`${url}/${ctx.params.id}`);
  return {
    props: {
      product: res.data
    }
  }
}

export default Product;