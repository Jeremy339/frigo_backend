import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Material } from './entities/materiales.entity';

@Injectable()
export class MaterialesService {
  constructor(
    @InjectRepository(Material)
    private readonly materialRepository: Repository<Material>,
  ) {}

  async findAll(): Promise<Material[]> {
    return await this.materialRepository.find();
  }

  async findOne(id: number): Promise<Material> {
    return await this.materialRepository.findOne({ where: { material_id: id } });
  }

  async create(material: Partial<Material>): Promise<Material> {
    const nuevoMaterial = this.materialRepository.create(material);
    return await this.materialRepository.save(nuevoMaterial);
  }

  async update(id: number, material: Partial<Material>): Promise<Material> {
    await this.materialRepository.update(id, material);
    return await this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.materialRepository.delete(id);
  }
}