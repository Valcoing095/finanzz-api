import { Injectable } from '@nestjs/common';
import { CreatePagoDto } from './dto/create-pago.dto';
import { UpdatePagoDto } from './dto/update-pago.dto';

@Injectable()
export class PagosService {
  constructor(){}
  
  create(createPagoDto: CreatePagoDto) {
    return `This action adds a new pago ${createPagoDto}`;
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
