import { Controller, Get, Post, Body, Param  } from '@nestjs/common';
import { StarWarsService } from './star-wars.service';


@Controller('api')
export class StarWarsController {
  constructor(private readonly personajesService: StarWarsService) {}

  @Get('')
  findAll() {
    return this.personajesService.getPersonas();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personajesService.getPersonaje(id);
  }
}
