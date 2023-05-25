import express from 'express'
import cors from 'cors'
import ENV from 'dotenv'
import ConnectToBeck,{Requests} from './Sql/index.js'
import ConnectToMongo from './Mongodb/index.js'
import router from './Routes/index.js'




ENV.config()

const port = process.env.PORT || 8001
const app = express()
app.use(express.json())
app.use(cors())
app.use('/api',router)

const start = async () => {
    try {
            app.listen(port, () => {
                console.log(`Server listening on port ${port}`)
                // ConnectToBeck()
                ConnectToMongo(app)
            })
        } catch (err) {
            console.log(err)
        }

    
}

start()

