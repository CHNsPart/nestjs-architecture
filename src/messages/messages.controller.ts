import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {

    messagesService: MessagesService
    constructor() {
        // not real app uses
        // Intections will come here
        this.messagesService = new MessagesService()
    }

    @Get()
    listMessages() {
        return this.messagesService.findAll()
    }

    @Post()
    createMessages(@Body() body: CreateMessageDto) {
        return this.messagesService.create(body.content)
    }

    @Get("/:id")
    getMessages(@Param("id") id: string) {
        return this.messagesService.findOne(id)
    }
}
