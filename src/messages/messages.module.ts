import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { MessagesRespository } from './messages.repository';

@Module({
  controllers: [MessagesController],
  providers: [MessagesService, MessagesRespository]
})
export class MessagesModule {}
