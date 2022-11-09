import { APP_INITIALIZER } from '@angular/core';
import { UserFacade } from './user.facade';

export const userInitializer = (userFacade: UserFacade) => () => {};

export const userInitializerProvider = {
  provide: APP_INITIALIZER,
  useFactory: userInitializer,
  multi: true,
  deps: [UserFacade],
};
