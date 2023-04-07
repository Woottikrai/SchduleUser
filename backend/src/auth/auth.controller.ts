import {
  Body,
  Controller,
  Post,
  UnauthorizedException,
  InternalServerErrorException,
  UseGuards,
  Get,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { createloginDto } from './dto/login.dto';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: createloginDto) {
    try {
      const { email, password } = loginDto;

      const user = await this.authService.validateUserCredentials(
        email,
        password,
      );

      if (!user) {
        throw new UnauthorizedException();
      }

      return this.authService.loginWithCredentials(user);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getProfile(@Request() req) {
    const user = await this.authService.findAll();

    return user;
  }
}
