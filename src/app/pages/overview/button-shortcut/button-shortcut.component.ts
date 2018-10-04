import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'hsm-button-shortcut',
	styleUrls: [ './button-shortcut.component.scss' ],
	template: `
    <nb-card (click)="shortcutRoute('path')" >
      <div class="icon-container">
        <div class="icon {{ type }}">
          <ng-content></ng-content>
        </div>
      </div>

      <div class="details">
        <div class="title">{{ title }}</div>
      </div>
    </nb-card>
  `
})
export class ButtonShortcutComponent {

    constructor(private router: Router) {

    }

	@Input() title: string;
	@Input() type: string;
    @Input() on = true;
    
    shortcutRoute(routerLink) {
        this.router.navigate([routerLink]);
    }
}
