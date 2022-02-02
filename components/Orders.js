import { Fragment, useEffect, useState } from "react"
import Head from "next/head";
import Link from "next/link";
import styles from '../styles/Orders.module.css';
import {getOrders} from '../actions/orders';

const Orders = props => {
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		getOrders().then(res => {
			console.log(res.data);
			setOrders(res.data);
		})
	}, []);

	const generateOrders = () => {
		return orders?.map(order => {
			return(
				<div className={styles.wrapper}>
					<div className={styles.orderId}>OrderID: {order._id}</div>
					<div className={styles.listItem}><b>Name</b>: {order.name}</div>
					<div className={styles.listItem}><b>Address</b>: {order.address}</div>
					<div className={styles.listItem}><b>Email</b>: {order.email}</div>
					<div className={styles.listItem}><b>Phone</b>: {order.phone}</div>
					<div className={styles.listItem}><b>Total</b>: ${order.total}</div>
					<h3 className={styles.totalProducts}>Total products in the order: {order.cart.products.length}</h3>
					{order.cart.products.map(product => (
						<div className={styles.product}>
							<div className={styles.listItem}>
								<h4 className={styles.header}>Title:</h4> <span className={styles.span}><Link href={`/products/${product._id}`} passHref><a>{product.title}</a></Link></span>
							</div>
							<div className={styles.listItem}>
							<h4 className={styles.header}>Quantity:</h4> <span className={styles.span}>{product.qty}</span></div>
							<div className={styles.listItem}><h4 className={styles.header}>Product Price: </h4><span className={styles.span}>${product.price}</span></div>
						</div>
					))}
					<hr className={styles.hr}/>
				</div>
			)
		})
	}

	return(
		<Fragment>
			<Head>
				<title>Orders Page</title>
				<meta name="description" content="Best products shop in town" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className={styles.container}>
				<h1 className={styles.totalOrders}>Total Orders {orders.length}</h1>
				{generateOrders()}
			</div>
		</Fragment>
	)
}


export default Orders;