import { Injectable } from '@nestjs/common';
import { CreatePagoDto } from './dto/create-pago.dto';
import { UpdatePagoDto } from './dto/update-pago.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pago } from './entities/pago.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PagosService {
  constructor( @InjectRepository(Pago)
  private readonly pagosRepository: Repository<Pago>){}
  
  create(createPagoDto: CreatePagoDto) {
    const pago = this.pagosRepository.create(createPagoDto)
    console.log(pago)
    return this.pagosRepository.save(pago) ;
  }

  findAll() {
    return `This action returns all pagos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pago`;
  }

  update(id: number, updatePagoDto: UpdatePagoDto) {
    return `This action updates a #${id} ${updatePagoDto} pago`;
  }

  remove(id: number) {
    return `This action removes a #${id} pago`;
  }
}
