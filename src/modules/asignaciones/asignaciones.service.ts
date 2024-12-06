import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Asignacion } from './entities/asignaciones.entity';

@Injectable()
export class AsignacionesService {
  constructor(
    @InjectRepository(Asignacion)
    private readonly asignacionRepository: Repository<Asignacion>,
  ) {}

  async findAll(): Promise<Asignacion[]> {
    return await this.asignacionRepository.find({ relations: ['informeServicio'] });
  }

  async findOne(id: number): Promise<Asignacion> {
    return await this.asignacionRepository.findOne({ 
      where: { asignacion_id: id }, 
      relations: ['informeServicio'] 
    });
  }

  async create(asignacion: Partial<Asignacion>): Promise<Asignacion> {
    const nuevaAsignacion = this.asignacionRepository.create(asignacion);
    return await this.asignacionRepository.save(nuevaAsignacion);
  }

  async update(id: number, asignacion: Partial<Asignacion>): Promise<Asignacion> {
    await this.asignacionRepository.update(id, asignacion);
    return await this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.asignacionRepository.delete(id);
  }
}