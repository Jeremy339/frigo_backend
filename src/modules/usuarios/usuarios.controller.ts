import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuario } from './entities/usuarios.entity';
import { CreateUsuariosDTO } from './dto/create-usuarios.dto';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get()
  async findAll(): Promise<Usuario[]> {
    return await this.usuariosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Usuario> {
    return await this.usuariosService.findOne(id);
  }

  @Post()
  async create(@Body() createUsuariosDto: CreateUsuariosDTO): Promise<Usuario> {
    // Extraemos el rolId del DTO
    const { rolId, ...usuarioData } = createUsuariosDto;
    
    // Llamamos al servicio pasando el usuario y el rolId
    return await this.usuariosService.create(usuarioData);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() usuario: Partial<Usuario>): Promise<Usuario> {
    return await this.usuariosService.update(id, usuario);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return await this.usuariosService.delete(id);
  }
}