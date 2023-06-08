import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FundsResponse } from './fund';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class FundService {
  constructor(private http: HttpClient) {}

  public getFunds(): Observable<FundsResponse> {
    const url = `${'https://us-central1-fund-trends.cloudfunctions.net/getDBFunds'}`;

    return this.http.get<FundsResponse>(url);
  }
}
