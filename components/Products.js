import { useEffect, useState } from 'react';
import styles from '../styles/AdminProducts.module.css';
import {getProducts} from '../actions/posts';
import Link from 'next/link';
import axios from 'axios';

const Products = props => {
	const [posts, setPosts] = useState([]);
	

	useEffect(() => {
		getProducts().then(res => {
			console.log(res.data)
			setPosts(res.data);
		})
	}, []);

	const testRemove = (id) => {
		setPosts(posts.filter(post => post._id !== id));
	}

	const handleRemove = async (id) => {
		const url = 'http://localhost:3000/api/products';
		const res = await axios.delete(`${url}/${id}`);
		
		setPosts(posts.filter(post => post._id !== id));
	}

	const generatePosts = () => {
		return posts?.map(post => {
			return(
				<div className={styles.card}>
					<Link href={`/products/${post._id}`}>
						<span className={styles.title}>{post.title}</span>
					</Link>
					<Link href={`/products/${post._id}/update`}>
						<span className={styles.update}>Update</span>
					</Link>
					<span onClick={() => handleRemove(post._id)} className={styles.remove}>Remove</span>
				</div>
			)
		})
	}

	return(
		<div>
			<h2 className={styles.totalProducts}>Total Products {posts.length}</h2>
			{generatePosts()}
		</div>
	)
}

export default Products;