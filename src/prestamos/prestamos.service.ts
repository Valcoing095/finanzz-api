import {  Body, Injectable } from '@nestjs/common';
import { CreatePrestamoDto } from './dto/create-prestamo.dto';
import { UpdatePrestamoDto } from './dto/update-prestamo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Prestamo } from './entities/prestamo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PrestamosService {
  constructor(
    @InjectRepository(Prestamo)
    private readonly prestamoRepositoy: Repository<Prestamo>){}
    
  create(@Body() createPrestamoDto: CreatePrestamoDto) {
    const prestamo = this.prestamoRepositoy.create(createPrestamoDto)
    return  this.prestamoRepositoy.save(prestamo)
    // return createPrestamoDto

  }

  findAll() {
    return `This action returns all prestamos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} prestamo`;
  }

  update(id: number, updatePrestamoDto: UpdatePrestamoDto) {
    return `This action updates a #${updatePrestamoDto} prestamo`;
  }

  remove(id: number) {
    return `This action removes a #${id} prestamo`;
  }
}
