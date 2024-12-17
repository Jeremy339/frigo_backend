import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
async login(@Body() loginDto: LoginDto) {
  const user = await this.authService.validateUser(
    loginDto.correo,
    loginDto.password,
  );
  const { access_token } = await this.authService.login(user);  // Garantizar que el token se devuelva correctamente
  return { access_token };
}
}
