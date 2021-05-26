const express = require('express');
const { Nodmin } = require('../dist/nodmin');

const app = express();

const dashboard = new Nodmin({
  resources: [{}],
});

dashboard.build();

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000, () => {
  console.log('App listen on port 3000');
});
