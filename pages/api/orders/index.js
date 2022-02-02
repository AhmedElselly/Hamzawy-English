import dbConnect from '../../../utils/mongo';
import Order from '../../../models/Order';

const handler = async (req, res) => {
	const {method} = req;
	dbConnect();
	if(method === 'GET'){
		try{
			const orders = await Order.find().sort('-createdAt');
			return res.json(orders);
		} catch(err){
			res.status(500).json(err);
		}
	}

	if(method === 'POST'){
		try {
			console.log('1', req.body);
			const order = await new Order(req.body);
			order.save((err, order) => {
				if(err) return res.status(500).json({err});
				return res.json(order);
			})
		} catch (error) {
			res.status(500).json({error})
		}
	}
}

export default handler;