import { Component } from '@angular/core';
import { IGX_DIALOG_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent, IgxRippleDirective } from 'igniteui-angular';

@Component({
  selector: 'app-appointments',
  imports: [IGX_DIALOG_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxIconButtonDirective, IgxRippleDirective, IgxIconComponent, IgxAvatarComponent, IgxButtonDirective],
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent {}
