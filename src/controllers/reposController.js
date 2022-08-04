import { Repos } from '../models/Repositories.js'

export const getRepos = async (req, res) => {  
    try {
        const repos = await Repos.findAll()
        console.log(repos);
        res.status(200).json(repos)
    } catch (error) {
        return res.status(500).json({ message: error.message }) 
    }
}
export const getRepo = async (req, res) => {  
    const { id } = req.params;

    try { 
        const repo = await Repos.findOne({
            where: {
                userId: id,
            }
        });

        if(!repo) return res.status(404).json({ message: `There is no project with id: ${id}`})
        
        res.status(200).json(repo)
    } catch (error) {
        return res.status(500).json({ message: error.message }) 
    }
}
export const postRepo = async (req, res) => {  
    const { userId, projectName, language, creationDate, description } = req.body;  //creationDate

    try {
        const newRepo = await Repos.create({
            userId: userId,
            projectName: projectName,
            language: language,    
            creationDate: creationDate,
            description: description,
        })
    
        console.log(newRepo);
        res.status(200).send('repo created')
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
export const updateRepo = async (req, res) => { 
    const { id } = req.params;
    const { userId, userName, projectName, language, creationDate, description } = req.body;

    try {
       const dataToUpdate = await Repos.findOne({
        where: {
            userId: id,
        }
    });

       dataToUpdate.userName = userName;
       dataToUpdate.projectName = projectName;
       dataToUpdate.language = language;
       dataToUpdate.creationDate = creationDate;
       dataToUpdate.description = description;
       dataToUpdate.userId = userId;

       await dataToUpdate.save()

       res.status(200).json(dataToUpdate)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    } 
}
export const deleteRepo = async (req, res) => {  
    const { id } = req.params;
    try {
        const repoToDelete = await Repos.destroy({
            where: {
                userId: id,
            }
        })

        res.status(204).send('Repo deleted')
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}