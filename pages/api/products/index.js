import dbConnect from '../../../utils/mongo';
import Product from '../../../models/Product';

const handler = async (req, res) => {
	const {method, query} = req;
	dbConnect();
	if(method === 'GET'){
			console.log('querymongo', query)
			const products = await Product.paginate({}, {
				page: Number(query.page),
				limit: 8
			});
			return res.json(products);
		
	}

	if(method === 'POST'){
		try {
			console.log(req.body);
			const product = await new Product(req.body);
			product.save((err, product) => {
				if(err) return res.status(500).json({err});
				return res.json(product);
			})
			

		} catch (error) {
			res.status(500).json({error})
		}
	}
}

export default handler;