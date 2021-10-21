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

  public getBalance(): number {

    /*const array = this.transactions;
    const array2 = this.transactions;
    
    const incomeSum = array.filter
      ((transactions) => transactions.type === 'income').
      map((income) => income.value ++).
      reduce((total, income) => total += income);

    const outcomeSum = array2.filter
      ((transactions) => transactions.type === 'outcome').
      map((outcome) => outcome.value ++).
      reduce((total, outcome) => total += outcome);

    const totalSum = incomeSum-outcomeSum;

    return totalSum;*/

return 1;
    
  }

  public create(title: string, value: number, type: 'income' | 'outcome'): Transaction {
    const transaction = new Transaction({title, value, type});

    const balance: Balance;

    if (type === "income") {

      balance = {
        income: value;
        outcome: value;
        total: income - outcome;
      };

    }

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
