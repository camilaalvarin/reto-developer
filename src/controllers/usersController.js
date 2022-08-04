import { User } from "../models/Users.js"
import { Repos } from "../models/Repositories.js"
import { Login } from "../models/LoginHistory.js"
// import jwt from "jsonwebtoken"


export const login = async (req, res) => {

    const {name, email} = req.body;
    try {
        const userToFind = await User.findOne({
            where: {
                email: email,
            }
        });
        res.status(200).json(userToFind)
    } catch (error) {
        return res.status(500).json({ message: error.message }) 
    }
}

export const getUsers = async (req, res) => {
    try {
        const users = await User.findAll()
        console.log(users);
        res.status(200).json(users)
    } catch (error) {
        return res.status(500).json({ message: error.message }) 
    }
}

export const getUser = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findOne({
            where: {
                userIdentification: id,
            }
        });

        if(!user) return res.status(404).json({ message: `There is no project with id: ${id}`})
        
        res.status(200).json(user)
    } catch (error) {
        return res.status(500).json({ message: error.message }) 
    }
}

export const postUser = async (req, res) => {
    const { userIdentification, name, email, birthDate, favLanguage, password} = req.body;

    try {
        const newUser = await User.create({
            userIdentification: userIdentification,
            name: name,
            email: email,
            birthDate: birthDate,
            favLanguage: favLanguage,
            password: password,
        })
        res.status(200).send('user created')
    } catch (error) {
        return res.status(500).json({ message: error.message })
    } 
    
}

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email, birthDate, favLanguage, password} = req.body;

    try {
       const dataToUpdate = await User.findByPk(id)

       dataToUpdate.name = name;
       dataToUpdate.email = email;
       dataToUpdate.birthDate = birthDate;
       dataToUpdate.favLanguage = favLanguage;
       dataToUpdate.password = password;

       await dataToUpdate.save()

       res.status(200).json(dataToUpdate)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const userToDelete = await User.destroy({
            where: {
                userIdentification: id,
            }
        })

        res.status(204).send('User deleted')
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

// USER REPOS
export const getUserRepos = async (req, res) => {
    const { id } = req.params;

    try {
        const userRepos = await Repos.findAll({
            where: {
                userId: id,
            }
        })
        if(userRepos.length === 0) return res.status(404).json({ message: `There is no user with id: ${id}`})
        res.status(200).json(userRepos)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

// USER LOGIN HISTORY
export const getUserLoginHistory = async (req, res) => {
    const { id } = req.params;

    try {
        const userLoginHistory = await Login.findAll({
            where: {
                userId: id,
            }
        })
        if(userLoginHistory.length === 0) return res.status(404).json({ message: `There is no user with id: ${id}`})
        res.status(200).json(userLoginHistory)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}
