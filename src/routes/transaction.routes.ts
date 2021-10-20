import { Router } from 'express';

import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateTransactionService from '../services/CreateTransactionService';

const transactionRouter = Router();

const transactionsRepository = new TransactionsRepository();

transactionRouter.get('/', (request, response) => {
  try {

    const listTransaction = transactionsRepository.all();

    return response.status(200).json(listTransaction);
    
  } catch (err: any) {
    return response.status(400).json({ error: err.message });
  }
});

transactionRouter.post('/', (request, response) => {
  try {
    const { title, value, type } = request.body;

    const transaction = transactionsRepository.create(title, value, type);

    return response.json(transaction);

  } catch (err:any) {
    return response.status(400).json({ error: err.message });
  }
});

export default transactionRouter;
