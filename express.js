const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.get('/', function (req, res) {
	  res.render('index', { title: 'Hey', message: 'Hello there!' })

});

const port = 4200;

app.listen(port, () => {
	console.log(`Server listening at ${port}`);
});
