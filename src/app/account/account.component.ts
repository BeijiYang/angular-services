import { Component, Input } from '@angular/core';
import { AccountsService } from '../accoounts.service';
// import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(
    // private loggingService: LoggingService,
    private accountService: AccountsService
  ) {

  }

  onSetTo(status: string) {
    this.accountService.updateAccount(this.id, status);
    // this.loggingService.logStatusChange(status)
  }
}
