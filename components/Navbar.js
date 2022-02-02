import {Fragment, useEffect, useState} from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useSelector} from 'react-redux';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import { isAuthenticated, logout } from '../actions/auth';
import LogoutIcon from '@mui/icons-material/Logout';
import { useRouter } from 'next/router';


const Navbar = (props) => {
	const router = useRouter()
	const qty = useSelector(state => state.cart.qty);
	const [showFullNavbar, setShowFullNavbar] = useState(false);

	const handleLogout = () => {
		logout(() => {
			router.push('/login')
		});
	}

	const generateFullNavbar = () => {
		setShowFullNavbar(!showFullNavbar);
	}

	return(
		<div className={styles.container}>
			<div className={styles.item}>
				<div className={styles.callButton}>
						{/* <Image height={100} width={100} src='/img/favicon.ico' /> */}
						<Link href='/'>
							<PhoneInTalkIcon />
						</Link>
					</div>
				<div className={styles.badgeContainer}>
					
					<Link href='/'>
						<h1 className={styles.badge}>Hamzawy</h1>
					</Link>
					<div className={styles.text}>01125894457</div>
				</div>
			</div>
			
			<div className={styles.item}>
				{/* SEARCH BAR */}
				
			</div>
			<div className={styles.item}>
				<ul className={styles.list}>
					<Link href='/'><li className={styles.listItem}>Home</li></Link>
					<Link href='/products'><li className={styles.listItem}>Products</li></Link>				
					
					{/* <Link href='/contact'><li className={styles.listItem}>Contact</li></Link> */}
					{isAuthenticated() && (
						<Fragment>
							<Link href='/admin'><li className={styles.listItem}>Admin</li></Link>
							<Link href='/create'><li className={styles.listItem}>Create</li></Link>
							
							<LogoutIcon onClick={handleLogout} sx={{marginRight: 2, cursor: 'pointer'}}/>
							
						</Fragment>
					)}
					{!isAuthenticated() && (
						<Fragment>
							<Link href='/login'><li className={styles.listItem}>Login</li></Link>
							<Link href='/signup'><li className={styles.listItem}>Signup</li></Link>
						</Fragment>
					)}
					
				</ul>
				<div className={styles.cart}>
					<Link href='/cart'>
						<ShoppingCartIcon sx={{color: '#fff'}}/>
					</Link>
					<Link href='/cart'>
						<div className={styles.counter}>{qty}</div>
					</Link>
				</div>
				<div onClick={generateFullNavbar} className={styles.hamburger}>
					<div className={styles.line}></div>
					<div className={styles.line}></div>
					<div className={styles.line}></div>
				</div>
			</div>
			{showFullNavbar && (
				<div onClick={generateFullNavbar} className={styles.fullNavbar}>
					<div className={styles.closeContainer}>
						<span className={styles.close} onClick={generateFullNavbar}>X</span>
					</div>

					<ul className={styles.list}>
						<Link href='/'><li className={styles.listItem}>Home</li></Link>
						<Link href='/products'><li className={styles.listItem}>Products</li></Link>
						{isAuthenticated() && isAuthenticated().admin && (
							<Fragment>
								<Link href='/admin'><li className={styles.listItem}>Admin</li></Link>
								<Link href='/create'><li className={styles.listItem}>Create</li></Link>
								<li onClick={handleLogout} className={styles.listItem}>
								
								Logout
								</li>
							</Fragment>
						)}
						{!isAuthenticated() && (
							<Fragment>
								<Link href='/login'><li className={styles.listItem}>Login</li></Link>
								<Link href='/signup'><li className={styles.listItem}>Signup</li></Link>
							</Fragment>
						)}
						
					</ul>
				</div>
			)}
		</div>
	)
}


export default Navbar;