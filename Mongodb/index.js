import mongoose from 'mongoose';    


const ConnectToMongo = async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_HOST, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
    }catch(err){
        console.log(err);
    }
}



export const Requests = (app) => {

    
}

export default ConnectToMongo;