import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuarios.entity';
import { RolesService } from '../roles/roles.service';
import { QueryFailedError } from 'typeorm';
import { HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,

    private readonly rolesService: RolesService,
  ) {}

  async findAll(): Promise<Usuario[]> {
    return await this.usuarioRepository.find({ relations: ['rol'] });
  }

  async findOne(id: number): Promise<Usuario> {
    return await this.usuarioRepository.findOne({ 
      where: { usuario_id: id }, 
      relations: ['rol'] 
    });
  }

  async create(usuario: Partial<Usuario>, rolId?: number): Promise<Usuario> {
    // Verificamos si el usuario ya existe por usuario_id
    const existingUser = await this.usuarioRepository.findOne({
      where: { usuario_id: usuario.usuario_id },
    });

    if (existingUser) {
      // Si el usuario existe, lanzamos una excepción con un mensaje adecuado
      throw new HttpException('El usuario con ese ID ya existe', HttpStatus.CONFLICT);
    }

    try {
      // Si no existe, continuamos con la creación
      const rol = rolId
        ? await this.rolesService.findOne(rolId)
        : await this.rolesService.findOne(2); // Rol por defecto

      if (!rol) {
        throw new Error('Rol no encontrado');
      }

      const nuevoUsuario = this.usuarioRepository.create({
        ...usuario,
        rol: rol, // Asignamos el rol al usuario
      });

      return await this.usuarioRepository.save(nuevoUsuario);
    } catch (error) {
      // Capturamos cualquier otro error
      throw error;
    }
  }

  async update(id: number, usuario: Partial<Usuario>): Promise<Usuario> {
    await this.usuarioRepository.update(id, usuario);
    return await this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.usuarioRepository.delete(id);
  }
}
