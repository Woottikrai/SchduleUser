import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IsNull, Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { compareSync } from 'bcrypt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  [x: string]: any;
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUserCredentials(
    email: string,
    password: string,
  ): Promise<User> {
    const user = await this.userService.userRepository.findOne({
      where: {
        email: email,
      },
    });
    // if (user && (await compareSync(password, user.password))) {
    //   return user;
    // }

   if( user.password === password){
    return user;
   }

    return null;
  }

  async loginWithCredentials(user: any) {
    const payload = {
      email: user.email,
      roles: user.role,
      uuid: user.uuid,
      password: user.password,
    };

    const _resp = {
      userInfo: {
        email: user.email,
        user_id: user.id,
        uuid: user.uuid,
        role: user.role,
      },
      accessToken: this.jwtService.sign(payload),
    };

    return _resp;
  }
}
