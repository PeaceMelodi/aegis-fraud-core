import { FraudRule } from './fraud-rule.interface';
import { CreateTransactionDto } from '../create-transaction.dto';

export class NewRecipientRule implements FraudRule {
  name = 'New Recipient Check';

  private trustedRecipients = ['bob999', 'charlie777', 'eva444'];

  execute(transaction: CreateTransactionDto, history: any[]): number {
    const isTrusted = this.trustedRecipients.includes(transaction.recipientId);

    if (!isTrusted) {
      return 35;
    }

    return 0;
  }
}
