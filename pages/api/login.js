import dbConnect from '../../utils/mongo';
import User from '../../models/User';
import cookie from 'cookie';
import bcrypt from 'bcrypt';

const handler = async (req, res) => {
	const {method} = req;
	dbConnect();

	if(method === 'POST'){
	
			const user = await User.findOne({email: req.body.email});
			const match = bcrypt.compareSync(req.body.password, user.password);

			if(match){
				console.log(match)
				res.setHeader('Set-Cookie', cookie.serialize('token', JSON.stringify(user), {
						maxAge: 60*60,
						sameSite: 'strict',
						path:'/'
				}))
				
				return res.json(user);			
			} else {
				return res.json({error: 'Email and password do not match'})
			}
		
	}
}

export default handler;