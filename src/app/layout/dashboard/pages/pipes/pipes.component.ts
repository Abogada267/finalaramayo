import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FirstNamePipe, UserPipe } from '../../../../shared/full-name.pipe';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss',
})
export class PipesComponent {
  today = new Date();
  price = 10000;

  user: UserPipe = {
    firstName: 'Goku',
    lastName: 'Son',
  };

  constructor(private datePipe: DatePipe, private firstName: FirstNamePipe) {
    console.log(this.datePipe.transform(this.today, 'long'));
    console.log(this.firstName.transform(this.user));
  }
}
