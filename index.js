const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
app.use(express.static('pumpkins'));

app.listen(port, () => console.log(`Pumpkins listening on ${port}`))