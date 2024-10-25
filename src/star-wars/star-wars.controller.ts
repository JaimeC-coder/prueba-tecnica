import { Controller, Get, Param } from '@nestjs/common';
import { StarWarsService } from './star-wars.service';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { PersonajeStarWarsDto } from './dtos/starwars.dto';

@ApiTags('star-wars')
@Controller('star-wars')
export class StarWarsController {
  constructor(private readonly starWarsService: StarWarsService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener todos los personajes' })
  @ApiResponse({ status: 200, description: 'Lista de personajes.', type: [PersonajeStarWarsDto] })
  async findAll() {
    return await this.starWarsService.getPersonas();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un personaje por ID' })
  @ApiParam({ name: 'id', required: true, description: 'ID del personaje' })
  @ApiResponse({ status: 200, description: 'Personaje encontrado.', type: PersonajeStarWarsDto })
  @ApiResponse({ status: 404, description: 'Personaje no encontrado.' })
  async findOne(@Param('id') id: string) {
    return await this.starWarsService.getPersonaje(id);
  }
}
