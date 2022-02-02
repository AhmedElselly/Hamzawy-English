import { Fragment, useEffect, useState } from "react"
import Head from "next/head";
import Link from "next/link";
import styles from '../../styles/Admin.module.css';
import {isAuthenticated} from '../../actions/auth';
import Orders from "../../components/Orders";
import Products from "../../components/Products";

const Admin = props => {
	const [showOrders, setShowOrders] = useState(true);

	// const handleRemove = async id => {
	// 	const url = 'http://localhost:3000/api/products';

	// 	const res = await axiost.delete(`${url}/${id}`);
		
	// }
	
	return(
		<Fragment>
			<Head>
				<title>Admin Page</title>
				<meta name="description" content="Best products shop in town" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className={styles.jumbotron}>
				<h2 className={styles.adminDashTitle}>Admin Dashboard</h2>
				<p className={styles.username}>Good day </p>
			</div>
			<div className={styles.container2}>
				<div className={styles.left}>
					<h3 className={styles.adminTitle}>Admin Links</h3>
					<ul className={styles.links}>
						<li onClick={() => setShowOrders(true)} className={styles.navLink}>Orders</li>
						<li onClick={() => setShowOrders(false)} className={styles.navLink}>Products</li>
					</ul>
				</div>
				<div className={styles.right}>
					{showOrders ? (
						<Orders/>
					): (
						<Products/>
					)}
				</div>
			</div>
		</Fragment>
	)
}


export const getServerSideProps = async ctx => {
	try {
		const myCookie = ctx.req.cookies
		console.log(JSON.parse(myCookie.token).admin)
		
	} catch(err){
		return {
			redirect: {
				destination: '/login',
				permanent: false
			}
		}
	}

	
	return {
		props: {
			admin: ''
		}
	}
	
}


export default Admin;