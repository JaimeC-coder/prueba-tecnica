import { Injectable } from '@nestjs/common';
import axios from 'axios';


@Injectable()
export class StarWarsService {
  async getPersonas() {
    const response = await axios.get('https://swapi.dev/api/people/');
    return response;
  }
  async getPersonaje(id: string) {
    const response = await axios.get(`https://swapi.dev/api/people/${id}/`);
    return this.transformarModelo(response.data);
  }

  transformarModelo(data: any): any {
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
