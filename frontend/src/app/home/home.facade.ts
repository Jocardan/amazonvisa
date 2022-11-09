import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { HomeApi } from './api/home.api';
import { HomeState } from './state/home.state';

@Injectable()
export class HomeFacade {
  constructor(private state: HomeState, private api: HomeApi) {}

  public getAddress(cep: string) {
    return this.api.consultaCEP(cep).pipe(map((e) => e));
  }
}
