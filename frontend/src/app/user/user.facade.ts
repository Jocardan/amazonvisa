import { Injectable } from '@angular/core';
import { UserState } from './state/user.state';

@Injectable()
export class UserFacade {
  constructor(private readonly state: UserState) {}
}
