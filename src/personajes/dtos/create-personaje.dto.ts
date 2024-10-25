import { IsString, IsNotEmpty } from 'class-validator';

export class CreatePersonajeDto {
  @IsString()
  @IsNotEmpty()
  readonly nombre: string;

  @IsString()
  @IsNotEmpty()
  readonly altura: string;

  @IsString()
  @IsNotEmpty()
  readonly masa: string;

  @IsString()
  @IsNotEmpty()
  readonly genero: string;

  @IsString()
  @IsNotEmpty()
  readonly color_pelo: string;

  @IsString()
  @IsNotEmpty()
  readonly color_piel: string;

  @IsString()
  @IsNotEmpty()
  readonly color_ojos: string;

  @IsString()
  @IsNotEmpty()
  readonly fecha_nacimiento: string;

  @IsString()
  @IsNotEmpty()
  readonly especie: string;

  @IsString()
  @IsNotEmpty()
  readonly id: string;

}
