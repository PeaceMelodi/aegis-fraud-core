import { FraudRule } from './fraud-rule.interface';
import { CreateTransactionDto } from '../create-transaction.dto';

export class HighAmountRule implements FraudRule {
  name = 'High Amount Check';

  execute(transaction: CreateTransactionDto, history: any[]): number {
    if (transaction.amount > 10000) {
      return 100;
    }
    
    if (transaction.amount > 2000) {
      return 40;
    }

    return 0;
  }
}
