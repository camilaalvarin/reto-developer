// const app = require('./app.js')
import app from './app.js'
import { sequelize } from './database/database.js'
// import './models/Users.js'
// import './models/LoginHistory.js'
// import './models/Repositories.js'

app.get('/', (req, res) => res.send('Hello World!'))

async function main() { 
    try {
        await sequelize.sync({force: false});
        app.listen(process.env.PORT || 3000)
        console.log('Server is listening on port', process.env.PORT || 3000);
    } catch (err) {
        console.log('Error: ', err)
    }
}
   
main()   