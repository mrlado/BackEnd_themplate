import { Schema, model }  from "mongoose";

const userSchema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    // isactive: {type: Boolean, default: true},
    // isadmin: {type: Boolean, default: false},
    // created_at: {type: Date, default: Date.now},
    // updated_at: {type: Date, default: Date.now},
    // role: {type: String, default: "user"},
    // name: {type: String, default: "User"},
    // surname: {type: String, default: "User"},
    // phone: {type: String, default: "0000000000"},
    // address: {type: String, default: "User"},
    // city: {type: String, default: "User"},
    // country: {type: String, default: "User"},
    // zipcode: {type: String, default: "0000000000"},
    // avatar: {type: String, default: "https://i.ibb.co/5Y35sJ3/user.png"},
    // facebook: {type: String, default: ""},
    // google: {type: String, default: ""},
    // twitter: {type: String, default: ""},
    // github: {type: String, default: ""},
    // instagram: {type: String, default: ""},
    // linkedin: {type: String, default: ""},
    // website: {type: String, default: ""},
    // bio: {type: String, default: "User"},
    // location: {type: String, default: "User"},
    // website: {type: String, default: ""},
    // bio: {type: String, default: "User"},
    // location: {type: String, default: "User"},
    
})


export default model("User", userSchema);