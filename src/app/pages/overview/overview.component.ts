import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators/takeWhile';

interface ShortcutSettings {
    title: string;
    iconClass: string;
    type: string;
    path: string;
}

@Component({
	selector: 'hsm-overview',
	styleUrls: [ './overview.component.scss' ],
	templateUrl: './overview.component.html'
})
export class OverviewComponent implements OnDestroy {

    private alive = true;
  
    shortcutRegisterCustomer: ShortcutSettings = {
      title: 'Register New Customer',
      iconClass: 'nb-roller-shades',
      type: 'primary',
      path: '/',
    };
    shortcutCreateSolution: ShortcutSettings = {
      title: 'Create Solution for Customer',
      iconClass: 'nb-roller-shades',
      type: 'success',
      path: '/',
    };
    shortcutScheduleBackupRestore: ShortcutSettings = {
      title: 'Schedule a Backup/Restore (Batch)',
      iconClass: 'nb-roller-shades',
      type: 'info',
      path: '/',
    };
    shortcutSchedulePatchUpgrade: ShortcutSettings = {
      title: 'Schedule a Patch/Upgrade (Batch)',
      iconClass: 'nb-roller-shades',
      type: 'warning',
      path: '/',
    };
  
    statusCards: string;
  
    commonStatusCardsSet: ShortcutSettings[] = [
      this.shortcutRegisterCustomer,
      this.shortcutCreateSolution,
      this.shortcutScheduleBackupRestore,
      this.shortcutSchedulePatchUpgrade,
    ];
  
    statusCardsByThemes: {
      default: ShortcutSettings[];
      cosmic: ShortcutSettings[];
      corporate: ShortcutSettings[];
    } = {
      default: this.commonStatusCardsSet,
      cosmic: this.commonStatusCardsSet,
      corporate: [
        {
          ...this.shortcutRegisterCustomer,
          type: 'warning',
        },
        {
          ...this.shortcutCreateSolution,
          type: 'primary',
        },
        {
          ...this.shortcutScheduleBackupRestore,
          type: 'danger',
        },
        {
          ...this.shortcutSchedulePatchUpgrade,
          type: 'secondary',
        },
      ],
    };
  
    constructor(private themeService: NbThemeService) {
      this.themeService.getJsTheme()
        .pipe(takeWhile(() => this.alive))
        .subscribe(theme => {
          this.statusCards = this.statusCardsByThemes[theme.name];
      });
    }
  
    ngOnDestroy() {
      this.alive = false;
    }

  }
