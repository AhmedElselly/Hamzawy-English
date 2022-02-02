import { useState } from 'react';
import styles from '../styles/OrderDetailed.module.css';

const OrderDetailed = ({total, createOrder, handleCashProp, cart}) => {
	const [customer, setCustomer] = useState({
		name: '',
		email: '',
		address: '',
		phone: ''
	})

	const handleChange = e => {
		setCustomer({...customer, [e.target.name]:e.target.value});
	}

	const {
		name,
		email,
		address,
		phone
	} = customer;

	const handleClick = e => {
		createOrder({name, email, address, phone, total, cart});
		handleCashProp(false)
	}

	const close = () => {
		handleCashProp(false);
	}


	return(
		<div className={styles.container}>
			<div className={styles.wrapper}>
			<span className={styles.close} onClick={close}>X</span>
				<h1>You will pay ${total} after delivery.</h1>
				<div className={styles.item}>
					<label className={styles.label}>Email</label>
					<input 
						type='text' 
						placeholder='Email' 
						className={styles.input}
						name='email'
						value={customer.email}
						onChange={handleChange}
					/>
				</div>
				<div className={styles.item}>
					<label className={styles.label}>Name</label>
					<input 
						type='text' 
						placeholder='John Doe' 
						className={styles.input}
						name='name'
						value={customer.name}
						onChange={handleChange}
					/>
				</div>
				<div className={styles.item}>
					<label className={styles.label}>Phone</label>
					<input 
						type='text' 
						placeholder='Phone Number' 
						className={styles.input}
						name='phone'
						value={customer.phone}
						onChange={handleChange}
					/>
				</div>
				<div className={styles.item}>
					<label className={styles.label}>Address</label>
					<input 
						type='text' 
						placeholder='Address' 
						className={styles.input}
						name='address'
						value={customer.address}
						onChange={handleChange}
					/>
				</div>
				<button className={styles.btn} onClick={handleClick}>Order</button>
			</div>
		</div>
	)
}

export default OrderDetailed;