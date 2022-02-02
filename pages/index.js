import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'
import Featured from '../components/Featured'
import ProductList from '../components/ProductList'
import ByCategory from '../components/ByCategory'


import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import queryString from 'query-string';
import { useState, Fragment } from 'react'
import Link from 'next/link'

const Home = ({productsList, categories}) => {
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);

	const handleChange = e => {
		setSearch(e.target.value)
	}

	const handleSubmit = async (e) => {
    e.preventDefault();
		const url = 'http://localhost:3000/api/products';
		console.log('hit search')
		const res = await axios.get(`${url}/search`, {
			params: {
				search
			},
			paramsSerializer: params => {
				console.log(queryString.stringify(params));
				return queryString.stringify(params, {arrayFormat: 'repeat'});
			}
		})

		console.log(res.data);
    setLoaded(true);
		setProducts(res.data);

	}

  return (
    <div className={styles.container}>
      <Head>
        <title>Hamzawy</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>

      <Layout/>
      <Featured/>

      {/* SEARCH BAR */}
      <form onSubmit={handleSubmit} className={styles.item}>
				<input 
					type='text' 
					placeholder='Search'
					name='search'
					value={search}
					onChange={handleChange}
					className={styles.input}
				/>
				<SearchIcon onClick={handleSubmit} fontSize='small' className={styles.searchIcon} sx={{
					color: 'gray',
					cursor: 'pointer'
				}} />
			</form>
      {/* SEARCH BAR */}

      {!loaded && <ProductList search={false} products={productsList}/>}
      {loaded && (
        <Fragment>
          
          <ProductList search={true} products={products}/>
          
        </Fragment>
      )}
      {categories.map((category, i) => <ByCategory key={i} category={category}/>)}
      {/* <Footer/> */}
    </div>
  )
}


export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req.cookies;
  const url = 'http://localhost:3000/api/products';
  const res = await axios.get(`${url}/home`);
  const categories = await axios.get(`${url}/categories`);
  return {
    props: {
      productsList: res.data,
      categories: categories.data
    }
  }
}

export default Home;