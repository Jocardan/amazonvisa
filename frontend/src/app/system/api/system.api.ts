import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SystemApi {
  public constructor(private readonly http: HttpClient) {}

  public consultaCEP(cep: string) {
    return this.http.get(`//viacep.com.br/ws/${cep}/json`);
  }
}
