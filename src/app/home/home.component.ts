import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IGX_LIST_DIRECTIVES, IgxIconButtonDirective, IgxIconComponent, IgxRippleDirective } from 'igniteui-angular';

@Component({
  selector: 'app-home',
  imports: [IGX_LIST_DIRECTIVES, IgxIconButtonDirective, IgxIconComponent, IgxRippleDirective, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}
