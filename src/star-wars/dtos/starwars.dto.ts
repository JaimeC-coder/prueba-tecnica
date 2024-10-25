import { ApiProperty } from '@nestjs/swagger';

export class PersonajeStarWarsDto {
  @ApiProperty({ description: 'Nombre del personaje' })
  nombre: string;

  @ApiProperty({ description: 'Año de nacimiento del personaje' })
  nacimiento: string;

  @ApiProperty({ description: 'Peso del personaje' })
  peso: string;

  @ApiProperty({ description: 'Color de cabello del personaje' })
  colorCabello: string;

  @ApiProperty({ description: 'Altura del personaje' })
  altura: string;

  @ApiProperty({ description: 'Color de piel del personaje' })
  colorPiel: string;

  @ApiProperty({ description: 'Color de ojos del personaje' })
  colorOjos: string;

  @ApiProperty({ description: 'Género del personaje' })
  genero: string;
}
