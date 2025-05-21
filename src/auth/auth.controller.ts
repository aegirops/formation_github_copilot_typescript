import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginData: { username: string; password: string }) {
    return this.authService.login(loginData.username, loginData.password);
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  async logout(@Body() logoutData: { userId: string }) {
    return this.authService.logout(logoutData.userId);
  }
}
