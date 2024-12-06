import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AsignacionMaterial } from './entities/asignacion-material.entity';

@Injectable()
export class AsignacionMaterialService {
  constructor(
    @InjectRepository(AsignacionMaterial)
    private readonly asignacionMaterialRepository: Repository<AsignacionMaterial>,
  ) {}

  async findAll(): Promise<AsignacionMaterial[]> {
    return await this.asignacionMaterialRepository.find({
      relations: ['material'], // Especifica las relaciones que quieres incluir
    });
  }

  async findOne(id: number): Promise<AsignacionMaterial> {
    return await this.asignacionMaterialRepository.findOne({
      where: { asignacion_material_id: id }, // Condición para el ID
      relations: ['material'], // Especifica las relaciones que quieres incluir
    });
  }

  async create(asignacionMaterial: Partial<AsignacionMaterial>): Promise<AsignacionMaterial> {
    const nuevaAsignacionMaterial = this.asignacionMaterialRepository.create(asignacionMaterial);
    return await this.asignacionMaterialRepository.save(nuevaAsignacionMaterial);
  }

  async update(id: number, asignacionMaterial: Partial<AsignacionMaterial>): Promise<AsignacionMaterial> {
    await this.asignacionMaterialRepository.update(id, asignacionMaterial);
    return await this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    const asignacionMaterial = await this.findOne(id); // Carga el registro
    if (asignacionMaterial) {
      await this.asignacionMaterialRepository.remove(asignacionMaterial);
    }
  }
}
