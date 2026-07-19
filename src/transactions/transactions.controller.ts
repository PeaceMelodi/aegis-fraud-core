import { Controller, Post, Body } from '@nestjs/common';
import { CreateTransactionDto } from './create-transaction.dto';
import { TransactionsService } from './transactions.service';

@Controller('transactions')
export class TransactionsController {
  
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  analyzeTransaction(@Body() dto: CreateTransactionDto) {
    const result = this.transactionsService.validateTransaction(dto);
    
    return {
      message: 'Transaction analyzed successfully!',
      evaluation: result,
    };
  }
}
