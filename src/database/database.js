import Sequelize from "sequelize";
const { DATABASE, USER, PASSWORD } = process.env

export const sequelize = new Sequelize('cambalache', 'postgres', 'camila22', {
    host: 'localhost',
    dialect: 'postgres'
})