import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuarios.entity';
import { RolesService } from '../roles/roles.service';
import * as bcrypt from 'bcrypt';

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

  async findByEmail(correo: string): Promise<Usuario> {
    return await this.usuarioRepository.findOne({ where: { correo } });
  }

  async create(usuario: Partial<Usuario>, rolId?: number): Promise<Usuario> {
    // Verificar si el usuario ya existe por correo
    const existingUser = await this.findByEmail(usuario.correo);
    if (existingUser) {
      throw new HttpException('El correo ya está registrado', HttpStatus.CONFLICT);
    }
  
    try {
      // Obtener rol (por defecto rol_id = 2)
      const rol = rolId
        ? await this.rolesService.findOne(rolId)
        : await this.rolesService.findOne(2);
  
      if (!rol) {
        throw new Error('Rol no encontrado');
      }
  
      // Hashear la contraseña
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(usuario.password, salt);
  
      // Crear nuevo usuario con la contraseña hasheada
      const nuevoUsuario = this.usuarioRepository.create({
        ...usuario,
        password: hashedPassword, // Guardar el hash de la contraseña
        rol: rol,
      });
  
      return await this.usuarioRepository.save(nuevoUsuario);
    } catch (error) {
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
