import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './create-transaction.dto';
import { FraudRule } from './rules/fraud-rule.interface';
import { HighAmountRule } from './rules/high-amount.rule';
import { NewRecipientRule } from './rules/new-recipient.rule';
import { VelocityRule } from './rules/velocity.rule';

@Injectable()
export class TransactionsService {
  private readonly transactionHistory: any[] = [];

  private readonly rules: FraudRule[] = [
    new HighAmountRule(),
    new NewRecipientRule(),
    new VelocityRule(),
  ];

  validateTransaction(dto: CreateTransactionDto) {
    let totalScore = 0;
    const brokenRules: string[] = [];

    for (const rule of this.rules) {
      const score = rule.execute(dto, this.transactionHistory);
      if (score > 0) {
        totalScore += score;
        brokenRules.push(rule.name);
      }
    }

    let action = 'ALLOWED';
    if (totalScore >= 70) {
      action = 'BLOCKED';
    } else if (totalScore >= 35) {
      action = 'REVIEW';
    }

    if (action !== 'BLOCKED') {
      this.transactionHistory.push({ ...dto, timestamp: new Date() });
    }

    return {
      totalScore,
      action,
      flaggedBy: brokenRules,
    };
  }
}
