import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const Repos = sequelize.define ('repositories', {
    projectName: {
        type: DataTypes.TEXT,
    },
    language: {
        type: DataTypes.ENUM('javascript', 'python'),
    },
    creationDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
}) 