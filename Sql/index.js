import mysql from 'mysql'
import ENV from 'dotenv'


ENV.config()

const db= mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
})



const ConnectToBeck = () => {
try{
    db.connect()
    console.log('Connected to  SQL database')
    return db
}catch(err){
    console.log(err)
    return err
}

}


export const Requests = (app) => {
    app.get('/', (req,res) =>{
        res.json('hello backEnd started')
    })
    
    app.get('/d', (req,res) =>{
        const q = 'SELECT * FROM test.data;'
        db.query(q,(err,data) =>{
            if(err) return res.json(err)
            return res.json(data)
        })
    })
    
    
    app.post('/add',(req,res)=>{
        const q = 'INSERT INTO test.data (`title`, `desc`,`cover`) VALUES (?)'
        const values = [req.body.title, req.body.desc,req.body.cover]
        db.query(q,[values],(err,data) =>{
            if(err)return res.json(err)
            return res.json(data)
        })
    })

}
    








export default ConnectToBeck
