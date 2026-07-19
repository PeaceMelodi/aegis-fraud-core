import { FraudRule } from './fraud-rule.interface';
import { CreateTransactionDto } from '../create-transaction.dto';

export class VelocityRule implements FraudRule {
  name = 'Velocity Check';

  execute(transaction: CreateTransactionDto, history: any[]): number {
    const recentTransactions = history.filter(
      (tx) => tx.senderId === transaction.senderId
    );

    if (recentTransactions.length >= 3) {
      return 60;
    }

    return 0;
  }
}
