import styles from '../styles/Cart.module.css';
import { useSelector, useDispatch } from 'react-redux';
import OrderDetailed from '../components/OrderDetailed';
import { useState } from 'react';
import axios from 'axios';
import {useRouter} from 'next/router';
// import {
// 	PayPalScriptProvider,
// 	PayPalButtons,
// 	usePayPalScriptReducer
// } from '@paypal/react-paypal-js';

// const amount = '2';
// const currency = 'usd';


const Cart = props => {
	const dispatch = useDispatch();
	const router = useRouter();
	const cart = useSelector(state => state.cart);
	const [cash, setCash] = useState(false);
	const url = 'http://localhost:3000/api';

	const createOrder = async data => {
		try {
			console.log('data', data)
			
			const res = await axios.post(`${url}/orders`, data);
			// console.log(res.data)
			if(res.status === 201){
				dispatch(reset());
				router.push(`/orders/${res.data._id}`);
			}
		} catch(err) {

		}
	}

	const handleCash = (bool) => setCash(bool);

	return(
		<div className={styles.container}>
			<div className={styles.left}>
				<table className={styles.table}>
					<tr className={styles.trTitle}>
						<th>Product</th>
						<th>Name</th>
						<th>Extras</th>
						<th>Price</th>
						<th>Quantity</th>
						<th>Total</th>
					</tr>
					{cart.products.map(product => (
						<tr className={styles.tr} key={product._id}>
							<td className={styles.td}>
								<div className={styles.imgContainer}>
									<img 
										src={product.image}
										width={'100%'}
										height={'100%'}
										style={{objectFit: 'cover'}}
									/>
								</div>
							</td>
							<td className={styles.td}>
								<span className={styles.name} >{product.title}</span>
							</td>
							<td className={styles.td}>
								<span className={styles.extras}>
									{product.extras.map(extra => (
										<span key={extra._id}>{extra.text}</span>
									))}									
								</span>
							</td>
							<td className={styles.td}>
								<span className={styles.price}>
									${product.price}
								</span>
							</td>
							<td className={styles.td}>
								<span className={styles.qty}>
									{product.qty}
								</span>
							</td>
							<td className={styles.td}>
								<span className={styles.total}>
									${product.price * product.qty}
								</span>
							</td>
						</tr>
					))}
					
				</table>
			</div>
			<div className={styles.right}>
				<div className={styles.wrapper}>
					<h2 className={styles.title}>Cart Total</h2>
					<div className={styles.totalText}>
						<b className={styles.totalTextTitle}>Subtotal: </b>${cart.total}
					</div>
					<div className={styles.totalText}>
						<b className={styles.totalTextTitle}>Discount: </b>$0.00
					</div>
					<div className={styles.totalText}>
						<b className={styles.totalTextTitle}>Total: </b>${cart.total}
					</div>
					<button onClick={() => setCash(true)} className={styles.btn}>Checkout now!</button>
				</div>
			</div>
			{cash && (
				<OrderDetailed total={cart.total} cart={cart} handleCashProp={handleCash} createOrder={createOrder} />
			)}
		</div>
	)
}

export default Cart;