import { Component } from '@angular/core';
import { IGX_LIST_DIRECTIVES, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent, IgxRippleDirective } from 'igniteui-angular';

@Component({
  selector: 'app-medications',
  imports: [IGX_LIST_DIRECTIVES, IgxIconButtonDirective, IgxRippleDirective, IgxIconComponent, IgxButtonDirective],
  templateUrl: './medications.component.html',
  styleUrls: ['./medications.component.scss']
})
export class MedicationsComponent {}
