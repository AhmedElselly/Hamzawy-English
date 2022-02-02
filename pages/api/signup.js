import dbConnect from '../../utils/mongo';
import User from '../../models/User';
import cookie from 'cookie';
import bcrypt from 'bcrypt';

const handler = async (req, res) => {
	const {method} = req;
	dbConnect();

	if(method === 'POST'){
		try {
			console.log(req.body);
			const user = await new User(req.body);
			user.password = bcrypt.hashSync(req.body.password, 12)
			user.save((err, user) => {
				if(err) return res.status(500).json({err});
				return res.json(user);
			});
		} catch (error) {
			res.status(500).json({error})
		}
	}
}

export default handler;