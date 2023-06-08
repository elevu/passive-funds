import { Component } from '@angular/core';
import { FundService } from './fund.service';
import { Fund } from "./fund";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    funds: Fund[]

    constructor(public fundService: FundService) {
    this.funds = [] as Fund[];
  }
  title = 'passive-funds'

    ngOnInit(): void {
    this.fundService.getFunds().subscribe((response: Fund[]) => {
      console.log(response);
    });
  }
}
