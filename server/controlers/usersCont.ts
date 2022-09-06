import { func } from 'joi';
import User from '../model/usersModel';
import { UserValidation } from '../model/usersModel';

export async function getAllUsers(req, res) {
	try {
		const users = await User.find({});
		res.send({ ok: true, users });
	} catch (error) {
		console.log(error.error);
		res.send({ error: error.message });
	}
}

export async function getUserFromDB(req, res) {
	try {
		const { userID } = req.body;
		if (!userID) throw new Error('no id sent from client');
		const userDB = await User.findById( userID );
		if (!userDB) throw new Error('no user found with this id');
		res.send({ ok: true, userDB });
	} catch (error) {
		console.log(error.error);
		res.send({ error: error.message });
	}
}

export const addUser = async (req, res) => {
	try {
		let { email, password, rePassword, username } = req.body;

		const { error } = UserValidation.validate({ password, email, repeatPassword: rePassword, username });
		if (error) throw error;

		const newUser = new User({ email, password, username });
		const result = await newUser.save();

		res.send({ result });
	} catch (error) {
		console.error(error);
		res.send({ error: error.message });
	}
};

export async function login(req, res) {
	try {
		const { email, password } = req.body;
		if (!email || !password) throw new Error('no email or password from client');
		const userDB = await User.findOne({ email, password });
		if (!userDB) {
			res.send({ success: false });
		} else {
			res.send({ success: true, userDB });
		}
	} catch (error) {
		console.log(error.error);
		res.send({ error: error.message });
	}
}
