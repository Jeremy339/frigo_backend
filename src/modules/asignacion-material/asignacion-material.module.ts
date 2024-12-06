import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AsignacionMaterialService } from './asignacion-material.service';
import { AsignacionMaterialController } from './asignacion-material.controller';
import { AsignacionMaterial } from './entities/asignacion-material.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AsignacionMaterial])],
  controllers: [AsignacionMaterialController],
  providers: [AsignacionMaterialService],
  exports: [AsignacionMaterialService],
})
export class AsignacionMaterialModule {}