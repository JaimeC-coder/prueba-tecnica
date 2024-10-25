import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonajesModule } from './personajes/personajes.module';
import { DynamodbModule } from './dynamodb/dynamodb.module';
import { SwaggerService } from './swagger/swagger.service';
import { SwaggerController } from './swagger/swagger.controller';
import { StarWarsController } from './star-wars/star-wars.controller';
import { StarWarsService } from './star-wars/star-wars.service';
import { StarWarsModule } from './star-wars/star-wars.module';

@Module({
  imports: [PersonajesModule, DynamodbModule, StarWarsModule],
  controllers: [AppController, SwaggerController, StarWarsController],
  providers: [AppService, SwaggerService, StarWarsService],
})
export class AppModule {}
