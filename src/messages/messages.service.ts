import { MessagesRespository } from "./messages.repository";

export class MessagesService{
 messagesRepo: MessagesRespository
 constructor() {
    this.messagesRepo = new MessagesRespository()
 }

 findOne(id: string){
    return this.messagesRepo.findOne(id)
 }
 findAll(){
    return this.messagesRepo.findAll()
 }
 create(content: string){
    return this.messagesRepo.create(content)
 }
}