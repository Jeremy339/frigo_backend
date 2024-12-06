import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EquiposService } from './equipos.service';
import { EquiposController } from './equipos.controller';
import { Equipo } from './entities/equipos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Equipo])],
  controllers: [EquiposController],
  providers: [EquiposService],
  exports: [EquiposService],
})
export class EquiposModule {}