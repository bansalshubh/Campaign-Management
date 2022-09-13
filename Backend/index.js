const connecToMongo = require('./db');
const express = require('express')
const cors = require('cors');
const app = express()
const port = 5000
connecToMongo();

app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/campaigns',require('./routes/campaign'));
app.use('/api/usercampaigns',require('./routes/usercampaign'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})