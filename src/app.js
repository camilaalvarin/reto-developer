// const express = require('express')
import express from "express"
import usersRoutes from './routes/usersRoutes.js'
import reposRoutes from './routes/reposRoutes.js'
import loginRoutes from './routes/loginRoutes.js'
const app = express()

// middleware
app.use(express.json())

app.use(usersRoutes)
app.use(reposRoutes)
app.use(loginRoutes)

export default app;
