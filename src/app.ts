import express from 'express';
import { env } from '#infrastructure/env/index';

const app = express();
env.init();

const PORT = env.get('PORT');

app.listen(PORT, () => {
  console.log(`Server listen on port: ${PORT}`);
});
