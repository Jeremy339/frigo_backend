import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InformeServicioService } from './informe-servicio.service';
import { InformeServicioController } from './informe-servicio.controller';
import { InformeServicio } from './entities/informe-servicio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InformeServicio])],
  controllers: [InformeServicioController],
  providers: [InformeServicioService],
  exports: [InformeServicioService],
})
export class InformeServicioModule {}