// post route to add new board
//delete board
// get boards
const express = require('express')
const router = express.Router()

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

// using /, get functions one for all of them and one to get a specific ones cards

//get function for rendering page
router.get('/', async (req, res) => {
    try {
        const boards = await prisma.board.findMany();
        res.json(boards)
    } catch (err) {
        res.status(500).send("error fetching boards")

    }
})


// get function for when view board is clicked
router.get('/:id', async (req, res) => {
    const { id } = req.params

    try {

        const cards = await prisma.card.findMany({
            where: { board_id: parseInt(id) }
        });

        res.json(cards)

    } catch (err) {
        res.status(500).send('error viewing boards cards')
    }

})


//post function for add board
router.post('/', async (req, res) => {
    try {
        let { title, category, author } = req.body

        const newBoard = await prisma.board.create({
            data: {
                title,
                category,
                author: author || null, // default to null if empty string or undefined
            }
        });

        res.status(201).json(newBoard)
    } catch (err) {
        res.status(500).send("error when creating")

    }
})



// delete function for boards delete board button
router.delete('/:id', async (req, res) => {
    const { id } = req.params

    try {


        await prisma.card.deleteMany({
            where: { board_id: parseInt(id) } //delete all cards accosiated
        });


        const deleteBoard = await prisma.board.delete({
            where: { id: parseInt(id) } // delete boards
        });

        res.status(204).send()
    } catch (err) {

        res.status(500).send('error deleting board')

    }
})


module.exports = router

