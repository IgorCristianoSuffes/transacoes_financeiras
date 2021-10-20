import { response } from 'express';
import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    const validBalnce = this.transactions.find
  }

  public create(title: string, value: number, type: 'income' | 'outcome'): Transaction {
    const transaction = new Transaction({title, value, type});

    this.transactions.push(transaction);

    console.log(this.transactions);

    return transaction;
  }
}

export default TransactionsRepository;
