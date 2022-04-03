const express = require('express')
const app = express()
const router = express.Router()

const HOST = '127.0.0.1';
const PORT = 5000;

// predicate the router with a check and bail out when needed
router.use((req, res, next) => {
    if (!req.headers['x-auth']) return next('router')
    next()
})

router.get('/user/:id', (req, res) => {
    res.send('hello, user!')
})

router.post('/user', (req, res) => {
    res.status(201).send('creating user')
})


// use the router and 401 anything falling through
app.use('/admin', router, (req, res) => {
    res.sendStatus(401)
})

app.listen(PORT, HOST, () => {
    console.log(`HTTP Server running on http://${HOST}:${PORT}/`);
});