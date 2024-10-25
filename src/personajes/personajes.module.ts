import { Module } from '@nestjs/common';
import { PersonajesController } from './personajes.controller';
import { PersonajesService } from './personajes.service';
import { DynamodbModule } from 'src/dynamodb/dynamodb.module';

@Module({
  controllers: [PersonajesController],
  providers: [PersonajesService],
  imports: [DynamodbModule],

})
export class PersonajesModule {}
