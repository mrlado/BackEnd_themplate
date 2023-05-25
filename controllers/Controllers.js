import {registration} from '../Services/Services.js'
import axios from 'axios';



export const Registration= async(req, res, next)=>{
    try{
        const {email, password} = req.body;
        const userData = await registration(email, password);
        return  res.status(200).json(userData);
        
    }catch(err){

    }
};
export const Login= async(req, res, next)=>{
    try{


    }catch(err){

    }
};
export const Logout= async(req, res, next)=>{
    try{


    }catch(err){

    }
};
export const Activate= async(req, res, next)=>{
    try{
        // console.log(req.body);
        console.log(res);

    }catch(err){

    }
};
export const Refresh= async(req, res, next)=>{
    try{


    }catch(err){

    }
};
export const User= async(req, res, next)=>{
    try{
        await fetch('https://fakestoreapi.com/products?limit=5')
            .then(res=>res.json())
            .then(json=> {

                return res.status(200).json(json);
            })
            
           
    }catch(err){

    }
};





