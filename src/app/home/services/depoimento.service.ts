import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Depoimento } from 'src/app/core/types/type';

@Injectable({
  providedIn: 'root'
})
export class DepoimentoService {

  private apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  listar () : Observable<Depoimento[]> {
    return this.httpClient.get<Depoimento[]>(`${this.apiUrl}/depoimentos`)
  }
}
