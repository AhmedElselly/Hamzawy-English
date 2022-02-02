import { useState } from 'react';
import Container from '../components/Container';
import styles from '../styles/Contact.module.css';

const Contact = props => {
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [message, setMessage] = useState('');

	const handleChange = e => {
		if(e.target.name === 'email'){
			setEmail(e.target.value);
		}
		if(e.target.name === 'phone'){
			setPhone(e.target.value);
		}
		if(e.target.name === 'message'){
			setMessage(e.target.value);
		}
		
	}

	const handleSubmit = e => {
		e.preventDefault();
	}
	return(
		<Container>
			<div className={styles.wrapper}>
				<div className={styles.innerContainer}>
					<h2 className={styles.title}>Contact</h2>
					<form onSubmit={handleSubmit}>
						<div className={styles.item}>
							<label className={styles.label}>Email</label>
							<input 
								className={styles.input}
								type='email' 
								name='email'
								value={email}
								onChange={handleChange}
							/>
						</div>
						<div className={styles.item}>
							<label className={styles.label}>Phone</label>
							<input 
								className={styles.input}
								type='text' 
								name='phone'
								value={phone}
								onChange={handleChange}
							/>
						</div>
						<div className={styles.item}>
							<label className={styles.label}>Your Message</label>
							<textarea className={styles.textarea} name='message'>{message}</textarea>
						</div>
						</form>
					</div>
			</div>
		</Container>
	)
}


export default Contact;