const expres = require('express');
const rateLimit = require('./rate-limit')

const app = expres();

app.use(rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minues
    maxRequests: 100
}))

app.get('/', (req, res) => {
    res.send('Hello, you are under the limit!')
})