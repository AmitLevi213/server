// create small express app
const express = require('express');
const app = express();
const cors = require('cors');

// app.use(cors({
//     origin: ['http://127.0.0.1:5500', 'https://www.example.com', 'https://www.example2.com'],
//     optionsSuccessStatus: 200
// }));

// app.get('/', (req, res) => {
//     res.send({ message: 'Hello World'});
// });

// app.listen(3001, () => {
//     console.log('listening on port 3001');
// });


module.exports = cors({
    origin: [
     'http://127.0.0.1:5500', // allow to server to accept request from live server
     'http://localhost:3000'], // allow to server to accept request from localhost 3000 (currently not exist)
    optionsSuccessStatus: 200
});