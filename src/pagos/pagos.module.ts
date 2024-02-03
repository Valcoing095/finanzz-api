import { Module } from '@nestjs/common';
import { PagosService } from './pagos.service';
import { PagosController } from './pagos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pago } from './entities/pago.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Pago])],
  controllers: [PagosController],
  providers: [PagosService],
  exports:[TypeOrmModule,PagosService] //Se usa para poder manejar el modelo repository
})
export class PagosModule {}
