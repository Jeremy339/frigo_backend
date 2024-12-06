import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Equipo } from './entities/equipos.entity';

@Injectable()
export class EquiposService {
  constructor(
    @InjectRepository(Equipo)
    private readonly equipoRepository: Repository<Equipo>,
  ) {}

  async findAll(): Promise<Equipo[]> {
    return await this.equipoRepository.find();
  }

  async findOne(id: number): Promise<Equipo> {
    return await this.equipoRepository.findOne({ where: { equipo_id: id } });
  }

  async create(equipo: Partial<Equipo>): Promise<Equipo> {
    const nuevoEquipo = this.equipoRepository.create(equipo);
    return await this.equipoRepository.save(nuevoEquipo);
  }

  async update(id: number, equipo: Partial<Equipo>): Promise<Equipo> {
    await this.equipoRepository.update(id, equipo);
    return await this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.equipoRepository.delete(id);
  }
}