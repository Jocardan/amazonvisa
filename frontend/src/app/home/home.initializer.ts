import { APP_INITIALIZER } from '@angular/core';

import { UserService } from '../shared/services/user.service';

export const homeInitializer = (usersService: UserService) => () => {};

export const homeInitializerProvider = {
  provide: APP_INITIALIZER,
  useFactory: homeInitializer,
  multi: true,
  deps: [UserService],
};
