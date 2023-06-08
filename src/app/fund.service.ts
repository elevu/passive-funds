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
    const url = 'https://www.avanza.se/_api/fund-guide/list?shouldCheckFondExcludedFromPromotion=true';

    return this.http.post<Fund[]>(url, {"startIndex": 0, "indexFund": true, "showActivelyManagedFunds": false, "sustainabilityProfile": false, "lowCo2": false, "svanenMark": false, "noFossilFuelInvolvement": false, "commonRegionFilter": [], "otherRegionFilter": [], "alignmentFilter": [], "industryFilter": [], "fundTypeFilter": ["Aktiefond"], "interestTypeFilter": [], "sortField": "totalFee", "sortDirection": "ASCENDING", "name": "", "recommendedHoldingPeriodFilter": [], "companyFilter": [], "productInvolvementsFilter": [], "ratingFilter": [], "sustainabilityRatingFilter": [], "environmentalRatingFilter": [], "socialRatingFilter": [], "governanceRatingFilter": []});
  }
}
