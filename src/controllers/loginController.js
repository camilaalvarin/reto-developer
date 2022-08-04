import { Login } from '../models/LoginHistory.js'
import { User } from '../models/Users.js'

export const getLogins = async (req, res) => { 
    try {
        const logins = await Login.findAll()
        console.log(logins);
        res.status(200).json(logins)
    } catch (error) {
        return res.status(500).json({ message: error.message }) 
    }
}
export const getLog = async (req, res) => { 
    const { id } = req.params;

    try { 
        const log = await Login.findOne({
            where: {
                userId: id,
            }
        });

        if(!log) return res.status(404).json({ message: `There is no project with id: ${id}`})
        
        res.status(200).json(log)
    } catch (error) {
        return res.status(500).json({ message: error.message }) 
    }
}
export const postLogin = async (req, res) => {  
    const { password, dateAndTime, type, userId } = req.body;

    try {

        const userCredentials = await User.findAll({
            where: {
                password: password,
                userIdentification: userId,
            }
        })

        if(userCredentials.length > 0) {
            const newLogin = await Login.create({
                password: password,
                dateAndTime: dateAndTime,
                type: type,
                userId: userId
            })
            res.status(200).send('repo created')
        } else {
            res.status(401).send('Invalid userId or password')
        }
        
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
export const updateLogin = async (req, res) => { 
    const { id } = req.params;
    const { password, dateAndTime, type, userId} = req.body;

    try {
       const dataToUpdate = await Login.findOne({
        where: {
            userId: id,
        }
    });

        dataToUpdate.userId = userId;
        dataToUpdate.password = password;
        dataToUpdate.dateAndTime = dateAndTime;
        dataToUpdate.type = type;

       await dataToUpdate.save()

       res.status(200).json(dataToUpdate)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    } 
}
export const deleteLogin = async (req, res) => {  
    const { id } = req.params;
    try {
        const logToDelete = await Login.destroy({
            where: {
                userId: id,
            }
        })

        res.status(204).send('Repo deleted')
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}