import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios'; // Asegúrate de importar HttpModule desde '@nestjs/axios'
import { StarWarsService } from './star-wars.service'; 
@Module({
    imports: [HttpModule], // Importa HttpModule
    providers: [StarWarsService], // Añade el servicio como proveedor
    exports: [StarWarsService],
  
})
export class StarWarsModule {}




