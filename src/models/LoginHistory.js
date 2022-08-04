import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const Login = sequelize.define ('loginHistory', {
    password: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    dateAndTime: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    type: {
        type: DataTypes.ENUM('x', 'y'),
    }
})