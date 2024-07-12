import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Institution } from './models/institution.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = 'http://localhost:8080/api/v1/institutions';

  constructor(private http: HttpClient) {}

  getInstitutions(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
