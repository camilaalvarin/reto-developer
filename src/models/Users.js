import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { Repos } from './Repositories.js';
import { Login } from './LoginHistory.js';

export const User = sequelize.define ('users', {
    name: {
        type: DataTypes.TEXT,
        // primaryKey: true,
    },
    email: {
        type: DataTypes.TEXT,
    },
    birthDate: {
        type: DataTypes.DATE, 
    },
    favLanguage: {
        type: DataTypes.ENUM('javascript', 'python'),
        allowNull: true,

    },
    password: {
        type: DataTypes.TEXT,
    },
    userIdentification : {
        type: DataTypes.INTEGER,
        primaryKey: true,
    }
})

// REPOS
User.hasMany(Repos, {
    foreignKey: 'userId',   
    sourceKey: 'userIdentification'   
})

Repos.belongsTo(User, {
    foreignKey: 'userId',   
    targetId: 'userIdentification'   
})

// LOGIN
User.hasMany(Login, {
    foreignKey: 'userId',
    sourceKey: 'userIdentification'
})

Login.belongsTo(User, {
    foreignKey: 'userId',
    targetId: 'userIdentification'
})

// -------------------
// REPOS
// User.hasMany(Repos, {
//     foreignKey: 'userName',   
//     sourceKey: 'name'   
// })

// Repos.belongsTo(User, {
//     foreignKey: 'userName',   
//     targetId: 'name'   
// })

// LOGIN
// User.hasMany(Login, {
//     foreignKey: 'userName',
//     sourceKey: 'name'
// })

// Login.belongsTo(User, {
//     foreignKey: 'userName',
//     targetId: 'name'
// })