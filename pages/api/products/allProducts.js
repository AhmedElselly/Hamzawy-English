import dbConnect from '../../../utils/mongo';
import Product from '../../../models/Product';

const handler = async (req, res) => {
	const {method} = req;
	dbConnect();
	if(method === 'GET'){
		try{
			const products = await Product.find().sort('-createdAt');
			return res.json(products);
		} catch(err){
			res.status(500).json(err);
		}
	}
}

export default handler;