import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Roles } from './entities/roles.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Roles)
    private readonly rolRepository: Repository<Roles>,
  ) {}

  async findAll(): Promise<Roles[]> {
    return await this.rolRepository.find();
  }

  async findOne(id: number): Promise<Roles> {
    return await this.rolRepository.findOne({ where: { rol_id: id } });
  }

  async create(rol: Partial<Roles>): Promise<Roles> {
    const nuevoRol = this.rolRepository.create(rol);
    return await this.rolRepository.save(nuevoRol);
  }

  async update(id: number, rol: Partial<Roles>): Promise<Roles> {
    await this.rolRepository.update(id, rol);
    return await this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.rolRepository.delete(id);
  }
}