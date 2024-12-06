import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InformeServicio } from './entities/informe-servicio.entity';

@Injectable()
export class InformeServicioService {
  constructor(
    @InjectRepository(InformeServicio)
    private readonly informeServicioRepository: Repository<InformeServicio>,
  ) {}

  async findAll(): Promise<InformeServicio[]> {
    return await this.informeServicioRepository.find({ 
      relations: ['usuario', 'equipo', 'asignacionMaterial'] 
    });
  }

  async findOne(id: number): Promise<InformeServicio> {
    return await this.informeServicioRepository.findOne({ 
      where: { informe_servicio_id: id }, 
      relations: ['usuario', 'equipo', 'asignacionMaterial'] 
    });
  }

  async create(informeServicio: Partial<InformeServicio>): Promise<InformeServicio> {
    const nuevoInforme = this.informeServicioRepository.create(informeServicio);
    return await this.informeServicioRepository.save(nuevoInforme);
  }

  async update(id: number, informeServicio: Partial<InformeServicio>): Promise<InformeServicio> {
    await this.informeServicioRepository.update(id, informeServicio);
    return await this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.informeServicioRepository.delete(id);
  }
}