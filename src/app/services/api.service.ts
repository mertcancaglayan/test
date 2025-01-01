import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileData } from '../models/ProfileData.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = environment.apiUrl!;

  constructor(private http: HttpClient) {}

  getData(): Observable<ProfileData> {
    return this.http.get<ProfileData>(this.apiUrl);
  }
}
