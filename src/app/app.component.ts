import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accoounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit {
  accounts: Array<{name: string; status: string}> = [];

  constructor(private accountService: AccountsService) {

  }

  ngOnInit() {
    this.accounts = this.accountService.accounts;
  }
}
