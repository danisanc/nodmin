import * as express from 'express';
import Nodmin from '../../nodmin';

import routes from './routes';

const app = express();
const PORT = 3000;

const nodmin = new Nodmin({
  resources: [
    {
      model: 'teste'
    }
  ]
});

app.use('/nodmin', nodmin.build());

app.use(routes);

app.listen(PORT, () => {
  console.log('server started');
});
