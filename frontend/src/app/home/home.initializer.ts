import { APP_INITIALIZER } from '@angular/core';
import { ProfileService } from '../shared/services/profile.service';

import { UserService } from '../shared/services/user.service';

export const homeInitializer =
  (usersService: UserService, profileService: ProfileService) => () => {
    profileService.getProfile().subscribe(async (profile) => {
      const token = localStorage.getItem('TOKEN');
      if (!profile && token) {
        // const profile = await usersService.getUsers()
        // profileService.setProfile(profile)
      }
    });
  };

export const homeInitializerProvider = {
  provide: APP_INITIALIZER,
  useFactory: homeInitializer,
  multi: true,
  deps: [UserService],
};
