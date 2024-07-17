import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  // Ruta para crear clientes
  // se deben enviar los siguientes paraetros:
  // {
  //   "nombre" : "Carolina Arboleda ",
  //   "apellido":"Velasco",
  //   "email" : "Carolina.arboleda@gmail.com",
  //   "direccion" : "Cra 38A 78-46",
  //   "telefono" : "3022475080"
  // }
  @Post('create/client')
  create(@Body() createClientDto: CreateClientDto) {
    console.log(CreateClientDto)
    return this.clientsService.create(createClientDto);
  }

  @Get()
  findAll() {
    return this.clientsService.findAll();
  }

  @Get(':id')
 async  findOne(@Param('id') id: string) {
     return this.clientsService.findOne(+id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
    return this.clientsService.update(+id, updateClientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientsService.remove(+id);
  }
}
