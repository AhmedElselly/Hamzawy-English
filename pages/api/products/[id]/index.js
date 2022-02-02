import dbConnect from "../../../../utils/mongo";
import Product from "../../../../models/Product";

const handler = async (req, res) => {
	const {method, query: {id}} = req;
	dbConnect();
	if(method === 'GET'){
		try{
			const product = await Product.findById(id);
			return res.json(product);
		} catch(err){
			res.status(500).json(err);
		}
	}

    if(method === 'DELETE'){
		try{
			const products = await Product.findOneAndDelete({_id: id});
			return res.json(products);
		} catch(err){
			res.status(500).json(err);
		}
	}	
}

export default handler;