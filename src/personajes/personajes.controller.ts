import { Controller, Get, Post, Body,Param } from '@nestjs/common';
import { PersonajesService } from './personajes.service';
import { CreatePersonajeDto } from './dtos/create-personaje.dto';

@Controller('api/personajes1')
export class PersonajesController {
  constructor(private readonly personajesService: PersonajesService) {}

  @Get('')
  findAll() {
    return this.personajesService.findAll();
  }

  @Post()
  create(@Body() createPersonajeDto: CreatePersonajeDto) {
    return this.personajesService.create(createPersonajeDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personajesService.findOne(id);
  }
}
