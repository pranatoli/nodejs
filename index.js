let express = require('express');
let app = express();
const port = 3000;
const routes = require('./routes/index');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api', routes)

app.listen(port, () => console.log('server started on port ' + port))