const express = require('express')
const app = express();
const cors = require('cors')
const PORT = process.env.PORT || 3000;


app.use(cors());

app.use(express.json()); //to parse everything into json

const boardRoutes = require('./routes/boards'); // board routing
const cardRoutes = require('./routes/cards'); //imports cards routing

app.use(boardRoutes);
app.use(cardRoutes);


app.use((err, req, res, next) => {
    if (err instanceof ValidationError) {
        return res.status(err.statusCode).json({ error: err.message })
    }

    // Additional Prisma error checks can be placed here
    res.status(500).json({ error: "Internal Server Error" })
})


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})