import { APP_INITIALIZER } from '@angular/core';

import { UserService } from '../shared/services/user.service';

export const systemInitializer = (usersService: UserService) => () => {};

export const systemInitializerProvider = {
  provide: APP_INITIALIZER,
  useFactory: systemInitializer,
  multi: true,
  deps: [UserService],
};
