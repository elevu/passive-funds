import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpResponse } from '@angular/common/http';
import { Fund } from './fund';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class FundService {
  constructor(private http: HttpClient) {}

  public getFunds(): Observable<Fund[]> {
    const url = `${'https://us-central1-fund-trends.cloudfunctions.net/getDBFunds'}`;

    return this.http.get<Fund[]>(url);
  }
}
