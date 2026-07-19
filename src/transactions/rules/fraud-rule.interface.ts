import { CreateTransactionDto } from '../create-transaction.dto';

export interface FraudRule {
  name: string;

  execute(transaction: CreateTransactionDto, history: any[]): number;
}
