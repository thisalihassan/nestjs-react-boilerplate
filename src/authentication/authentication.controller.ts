import {
  Controller,
  HttpCode,
  Post,
  Request,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Response } from 'express';
import { AuthenticationService } from './authentication.service';

@Controller('api')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @ApiOperation({ summary: 'User enters email password to login.' })
  @ApiResponse({
    status: 200,
    description: 'User logged in.',
  })
  @Post('login')
  @HttpCode(200)
  @UseGuards(AuthGuard('local'))
  async login(@Request() req, @Res({ passthrough: true }) response: Response) {
    const accessToken = await this.authenticationService.loginUser({
      userId: req.user.id,
      email: req.user.email,
    });
    response.cookie(
      'Authorization',
      { token: accessToken },
      { httpOnly: true },
    );
    return req.user;
  }
}
