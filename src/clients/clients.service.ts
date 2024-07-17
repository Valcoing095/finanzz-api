import { Body, Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from './entities/client.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>){}

  create(@Body() createClientDto: CreateClientDto) {
    console.log(createClientDto)
    const client = this.clientRepository.create(createClientDto)
    return this.clientRepository.save(client) ;
  }

  findAll() {
    return this.clientRepository.find();
  }

  findOne(id) {
    return  this.clientRepository.findOneBy(id);
  }

  update(
    id: number, 
    updateClientDto: UpdateClientDto
    ) {
    return this.clientRepository.update(id,updateClientDto);
  }

  remove(id: number) {
    return this.clientRepository.softDelete(id)
  }
}
