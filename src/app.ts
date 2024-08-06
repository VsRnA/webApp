import express from 'express';
import { env } from '#infrastructure/env/index';
import authRouter from '#routes/auth';
import sequelize from '#config/sequelize';

const app = express();
env.init();

const PORT = env.get('PORT');

sequelize.sync({ alter: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server listen on port: ${PORT}`);
  });
}).catch((err) => console.log(err));

app.use(express.json());

app.use('/v1/auth', authRouter);
