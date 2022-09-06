import mongoose from 'mongoose';
import Joi from 'joi';

const FactSchema = new mongoose.Schema({
	fact: {
		type: String,
		required: true,
		unique: true
	},
	factSrc: {
		type: String,
		required: true
	},
	isTrue: {
		type: Boolean,
		required: true
	}
});
//create a collection
const Fact = mongoose.model('facts', FactSchema);

export default Fact;

export const FactValidation = Joi.object({
	fact: Joi.string().required().email(),
	factSrc: Joi.string().required(),
    isTrue:Joi.string().required()
});
