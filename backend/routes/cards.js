
//create a card(post)
// update a cards up votes(put)
//delete car
//get all cards
const express = require('express')
const router = express.Router()

const { PrismaClient } = require('../generated/prisma')
const prisma = new PrismaClient()

//get all cards 
// WORKS
router.get('/:boardId', async (req, res) => {
    const { boardId } = req.params

    try {
        const cards = await prisma.card.findMany({
            where: { board_id: parseInt(boardId) }
        });
        res.json(cards)
    } catch (err) {
        res.status(500).send('error viewing boards cards')
    }
});


//create new card
//WORKS
router.post('/:boardId', async (req, res) => {
    const { boardId } = req.params
    const { message, gif, owner } = req.body;

    try {
        const newCard = await prisma.card.create({ //create card
            data: {
                board_id: parseInt(boardId),
                message,
                gif,
                owner: owner || null,
                upvotes: 0,
            }
        })
        res.status(201).json(newCard) // success for post is 201
    } catch (err) {
        res.status(500).send('error creating cards')
    }
});


//update upvotes
//WORKS
router.put('/:boardId/:cardId', async (req, res) => {
    const { cardId } = req.params
    try {
        const upvoteCard = await prisma.card.update({
            where: { id: parseInt(cardId) },
            data: {
                upvotes: { increment: 1 }
            }
        })
        res.json(upvoteCard)
    } catch (err) {
        res.status(500).send('error updating upvtoes')
    }
})

router.put('/:boardId/:cardId/pin', async (req, res) => {
    const { cardId } = req.params;
    try { // find the id of the card that we are pininng and change the date pinned
        const card = await prisma.card.findUnique({ where: { id: parseInt(cardId) } });

        if (!card) return res.status(404).send('Card not found');

        const updatedCard = await prisma.card.update({
            where: { id: parseInt(cardId) },
            data: {
                pinnedAt: card.pinnedAt ? null : new Date(), // toggle on the date
            },
        });

        res.json(updatedCard);
    } catch (err) {
        res.status(500).send('error updating pinned state');
    }

})
//delete card
//WORKS
router.delete('/:boardId/:cardId', async (req, res) => {
    const { cardId } = req.params
    try {
        await prisma.card.delete({
            where: { id: parseInt(cardId) }
        })
        res.status(204).send() // no content to return

    } catch (err) {
        res.status(500).send('error viewing boards cards')
    }

})


module.exports = router;  