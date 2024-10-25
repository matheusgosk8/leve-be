import { add } from '@src/math/add';
import dotenv from 'dotenv-safe';
dotenv.config();

const a: number = 2;
const b: number = 3;

const result = add(a, b);
console.log('Resultado: ', result);
console.log('Nome: ', process.env.MY_NAME);
