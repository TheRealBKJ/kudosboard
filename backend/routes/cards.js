// get all cards for a boardid(get)
//create a card(post)
// update a cards up votes(put)
//delete car
const express = require('express')
const router = express.Router()

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

