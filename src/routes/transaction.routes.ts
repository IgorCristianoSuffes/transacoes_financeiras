import { Router } from 'express';

import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateTransactionService from '../services/CreateTransactionService';

const transactionRouter = Router();

const transactionsRepository = new TransactionsRepository();

transactionRouter.get('/', (request, response) => {
  try {

    const listTransaction = transactionsRepository.all();

    return response.status(200).json(listTransaction);
    
  } catch {
    return response.status(400).json({ error: "err.message" });
  }
});

transactionRouter.post('/', (request, response) => {
  try {
    const { title, value, type } = request.body;

    const validadBalance = transactionsRepository.getBalance();

    console.log(validadBalance);

    /*if (validadBalance < 0 || validadBalance === 0 && type === 'outcome') {
      return response.status(400).json({ error: "err.message" });
    }*/

    const transaction = transactionsRepository.create(title, value, type);

    return response.json(transaction);

  } catch {
    return response.status(400).json({ error: "err.message" });
  }
});

export default transactionRouter;
