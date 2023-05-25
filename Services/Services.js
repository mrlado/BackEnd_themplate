import userSchema from '../Mongodb/Model.js';
import bcrypt from 'bcrypt';
import { v4 } from 'uuid';


export const registration = async (email, password) => {
const candidate = await userSchema.findOne({email});
if(candidate){
    return console.log('User already exists');
}
const hashPassword = await bcrypt.hash(password, 3);
const id = v4();
const user = await userSchema.create({email,password:hashPassword});


return user;
}