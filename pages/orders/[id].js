import styles from '../../styles/Order.module.css';
import PaidIcon from '@mui/icons-material/Paid';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import HouseIcon from '@mui/icons-material/House';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';

const Orders = props => {
	const status = 0;

	const statusClass = index => {
		if(index - status < 1) return styles.done;
		if(index - status === 1) return styles.inProgress;
		if(index - status > 1) return styles.undone;
	}

	return(
		<div className={styles.container}>
			<div className={styles.left}>
				<div className={styles.row}>
				<table className={styles.table}>
					<tr className={styles.trTitle}>
						<th>Order ID</th>
						<th>Customer</th>
						<th>Address</th>
						<th>Total</th>
					</tr>
					<tr className={styles.tr}>
						
						<td>
							<span className={styles.id} >546546541351321</span>
						</td>
						<td>
							<span className={styles.name}>
								Joe
							</span>
						</td>
						<td>
							<span className={styles.address}>
								20 Elton, Newyork
							</span>
						</td>
						<td>
							<span className={styles.total}>
								$39.80
							</span>
						</td>
					</tr>
				</table>
				</div>
				<div className={styles.row}>
					<div className={statusClass(0)}>
						<PaidIcon/>
						<span>Payment</span>
						<div className={styles.checkedIcon}>
							<CheckCircleIcon sx={{color: 'green'}}/>
						</div>
					</div>
					<div className={statusClass(1)}>
						<HourglassBottomIcon/>
						<span>Preparing</span>
						<div className={styles.checkedIcon}>
							<CheckCircleIcon sx={{color: 'green'}}/>
						</div>
					</div>
					<div className={statusClass(2)}>
						<DirectionsBikeIcon/>
						<span>On the way</span>
						<div className={styles.checkedIcon}>
							<CheckCircleIcon sx={{color: 'green'}}/>
						</div>
					</div>
					<div className={statusClass(3)}>
						<HouseIcon/>
						<span>Delivered</span>
						<div className={styles.checkedIcon}>
							<CheckCircleIcon sx={{color: 'green'}}/>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.right}>
				<div className={styles.wrapper}>
					<h2 className={styles.title}>Cart Total</h2>
					<div className={styles.totalText}>
						<b className={styles.totalTextTitle}>Subtotal: </b>$79.60
					</div>
					<div className={styles.totalText}>
						<b className={styles.totalTextTitle}>Discount: </b>$0.00
					</div>
					<div className={styles.totalText}>
						<b className={styles.totalTextTitle}>Total: </b>$79.60
					</div>
					<button disabled className={styles.btn}>Paid!</button>
				</div>
			</div>
		</div>
	)
}

export default Orders;