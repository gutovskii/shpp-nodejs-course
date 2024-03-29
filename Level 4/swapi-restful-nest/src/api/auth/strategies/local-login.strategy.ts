import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';

export const STRATEGY_LOCAL_LOGIN = 'local-login';

@Injectable()
export class LocalLoginStrategy extends PassportStrategy(
  Strategy,
  STRATEGY_LOCAL_LOGIN,
) {
  constructor(private _authService: AuthService) {
    super();
  }

  async validate(
    username: string,
    password: string,
  ): Promise<{ token: string }> {
    const token = await this._authService.login(username, password);
    return { token };
  }
}
