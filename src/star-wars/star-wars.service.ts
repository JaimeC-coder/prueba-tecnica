import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { PersonajeStarWarsDto } from './dtos/starwars.dto';

@Injectable()
export class StarWarsService {
  async getPersonas(): Promise<PersonajeStarWarsDto[]> {
    try {
      const response = await axios.get('https://swapi.dev/api/people/');
      const personas = response.data.results.map(this.transformarModelo);

      // Manejo de estructuras circulares
      JSON.stringify(personas); // Esto lanza un error si hay estructuras circulares

      return personas;
    } catch (error) {
      console.error('Error al obtener las personas:', error);
      throw new Error('No se pudieron obtener los personajes.');
    }
  }

  async getPersonaje(id: string): Promise<PersonajeStarWarsDto> {
    try {
      const response = await axios.get(`https://swapi.dev/api/people/${id}/`);
      return this.transformarModelo(response.data);
    } catch (error) {
      console.error(`Error al obtener el personaje con ID ${id}:`, error);
      throw new Error('No se pudo obtener el personaje.');
    }
  }

  private transformarModelo(data: any): PersonajeStarWarsDto {
    return {
      nombre: data.name,
      nacimiento: data.birth_year,
      peso: data.mass,
      colorCabello: data.hair_color,
      altura: data.height,
      colorPiel: data.skin_color,
      colorOjos: data.eye_color,
      genero: data.gender,
    };
  }
}
