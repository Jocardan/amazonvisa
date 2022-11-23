import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../types/User';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private profile: BehaviorSubject<User | null> =
    new BehaviorSubject<User | null>(null);

  constructor() {}

  public signOut(): void {
    localStorage.removeItem('TOKEN');
    this.profile.next(null);
  }

  public getProfile(): Observable<User | null> {
    return this.profile.asObservable();
  }

  public setProfile(profile: User) {
    this.profile.next(profile);
  }
}
