import { DynamodbService } from './../dynamodb/dynamodb.service';
import { Injectable } from '@nestjs/common';
import { CreatePersonajeDto } from './dtos/create-personaje.dto';


@Injectable()
export class PersonajesService {

    constructor(private readonly dynamoDBService: DynamodbService) {}

    async findAll() {
      return this.dynamoDBService.scan();  
    }
  
    async create(createPersonajeDto: CreatePersonajeDto) {
      return this.dynamoDBService.putItem(createPersonajeDto);
    }

    async findOne(id: string) {
      return this.dynamoDBService.getItem(id);
    }
}
