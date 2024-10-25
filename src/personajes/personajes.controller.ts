import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ApiTags ,ApiResponse,ApiBody,ApiParam} from '@nestjs/swagger';
import { PersonajesService } from './personajes.service';
import { CreatePersonajeDto,PersonajeDto } from './dtos/create-personaje.dto';

@ApiTags('Personajes')  // Crea una sección "Personajes" en Swagger
@Controller('personajes')
export class PersonajesController {
  constructor(private readonly personajesService: PersonajesService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Lista de personajes',
    type: [CreatePersonajeDto],  // La respuesta es un array de DTOs de personajes
  })
  findAll() {
    return this.personajesService.findAll();
  }

  @Post()
  @ApiBody({ type: CreatePersonajeDto })  // Se usa CreatePersonajeDto para la solicitud
  @ApiResponse({
    status: 201,
    description: 'Personaje creado correctamente',
    type: PersonajeDto,  // La respuesta incluirá el ID generado y los datos del personaje
  })
  create(@Body() createPersonajeDto: CreatePersonajeDto) {
    return this.personajesService.create(createPersonajeDto);  // El servicio generará el ID automáticamente
  }

  @Get(':id')
  @ApiParam({ name: 'id', description: 'ID del personaje' })  // Define el parámetro de la ruta
  @ApiResponse({
    status: 200,
    description: 'Detalles del personaje',
    type: CreatePersonajeDto,  // El tipo de dato de la respuesta
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personajesService.findOne(id);
  }
}
