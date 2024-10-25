import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePersonajeDto {
  @ApiProperty({ example: 'Luke Skywalker', description: 'Nombre del personaje' })
  @IsString()
  @IsNotEmpty()
  readonly nombre: string;

  @ApiProperty({ example: '172', description: 'Altura del personaje en cm' })
  @IsString()
  @IsNotEmpty()
  readonly altura: string;

  @ApiProperty({ example: '77', description: 'Peso del personaje en kg' })
  @IsString()
  @IsNotEmpty()
  readonly masa: string;

  @ApiProperty({ example: 'Male', description: 'Género del personaje' })
  @IsString()
  @IsNotEmpty()
  readonly genero: string;

  @ApiProperty({ example: 'Blond', description: 'Color de pelo del personaje' })
  @IsString()
  @IsNotEmpty()
  readonly color_pelo: string;

  @ApiProperty({ example: 'Fair', description: 'Color de piel del personaje' })
  @IsString()
  @IsNotEmpty()
  readonly color_piel: string;

  @ApiProperty({ example: 'Blue', description: 'Color de ojos del personaje' })
  @IsString()
  @IsNotEmpty()
  readonly color_ojos: string;

  @ApiProperty({ example: '19BBY', description: 'Fecha de nacimiento del personaje' })
  @IsString()
  @IsNotEmpty()
  readonly fecha_nacimiento: string;

  @ApiProperty({ example: 'Human', description: 'Especie del personaje' })
  @IsString()
  @IsNotEmpty()
  readonly especie: string;
}

export class PersonajeDto {
  @ApiProperty({ example: '613f324d-6dd6-44d9-8f0a-83f5af31efb8', description: 'ID único del personaje (generado por el sistema)' })
  readonly id: string;

  @ApiProperty({ example: 'Luke Skywalker', description: 'Nombre del personaje' })
  readonly nombre: string;

  @ApiProperty({ example: '172', description: 'Altura del personaje en cm' })
  readonly altura: string;

  @ApiProperty({ example: '77', description: 'Peso del personaje en kg' })
  readonly masa: string;

  @ApiProperty({ example: 'Male', description: 'Género del personaje' })
  readonly genero: string;

  @ApiProperty({ example: 'Blond', description: 'Color de pelo del personaje' })
  readonly color_pelo: string;

  @ApiProperty({ example: 'Fair', description: 'Color de piel del personaje' })
  readonly color_piel: string;

  @ApiProperty({ example: 'Blue', description: 'Color de ojos del personaje' })
  readonly color_ojos: string;

  @ApiProperty({ example: '19BBY', description: 'Fecha de nacimiento del personaje' })
  readonly fecha_nacimiento: string;

  @ApiProperty({ example: 'Human', description: 'Especie del personaje' })
  readonly especie: string;
}