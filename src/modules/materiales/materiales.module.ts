import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaterialesService } from './materiales.service';
import { MaterialesController } from './materiales.controller';
import { Material } from './entities/materiales.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Material])],
  controllers: [MaterialesController],
  providers: [MaterialesService],
  exports: [MaterialesService],
})
export class MaterialesModule {}