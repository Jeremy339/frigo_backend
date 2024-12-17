import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuariosService } from '../usuarios/usuarios.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usuariosService: UsuariosService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(correo: string, password: string): Promise<any> {
    console.log('Buscando usuario con correo:', correo);
    const user = await this.usuariosService.findByEmail(correo);
  
    if (!user) {
      console.log('Usuario no encontrado');
      throw new UnauthorizedException('Correo o contraseña incorrectos');
    }
  
    console.log('Usuario encontrado:', user);
  
    // Comparar contraseñas
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      console.log('Contraseña incorrecta');
      throw new UnauthorizedException('Correo o contraseña incorrectos');
    }
  
    console.log('Contraseña válida');
  
    const { password: _, ...result } = user;
    return result;
  }
  

  async login(user: any) {
    const payload = { correo: user.correo, sub: user.usuario_id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
