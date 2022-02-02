import dbConnect from "../../../../utils/mongo";
import Product from "../../../../models/Product";

const handler = async (req, res) => {
	const {method, query: {id}} = req;
	dbConnect();
	
	if(method === 'PUT'){
			console.log(req.body);
			const product = await Product.findById({_id: id});

			product.title = req.body.title;
			product.desc = req.body.desc;
			product.price = req.body.price;
			product.category = req.body.category;
			product.image = req.body.image;
				
			product.save((err, product) => {
				if(err) return res.status(500).json({err});
				return res.json(product);
			})
			

		
	}
}

export default handler;