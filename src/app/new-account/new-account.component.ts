import { Component } from '@angular/core';
import { AccountsService } from '../accoounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})

export class NewAccountComponent {
  constructor(
    private accountService: AccountsService
  ) {
    this.accountService.statusUpdated.subscribe(
      (status: string) => alert('new status: ' + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
  }
}
