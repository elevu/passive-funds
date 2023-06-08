import { Component } from '@angular/core';
import { FundService } from './fund.service';
import {Fund, FundsResponse} from "./fund";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Passive funds'
    funds: Fund[]

    constructor(public fundService: FundService) {
    this.funds = [] as Fund[];
  }
    ngOnInit(): void {
    this.fundService.getFunds().subscribe((response: FundsResponse) => {
      console.log(response);
      this.funds = response.funds
    });
  }
}
