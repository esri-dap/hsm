import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';

// import { UserActivityService, UserActive } from '../../../@core/data/user-activity.service';
import { ActivityLogsService, ActivityLogs } from '../../../@core/data/activity-logs.service';

@Component({
	selector: 'hsm-logs-recent',
	styleUrls: [ './logs-recent.component.scss' ],
	template: `
    <nb-card size="medium">
      <nb-card-header>
        <span>Recent Logs</span>
        <div class="dropdown ghost-dropdown" ngbDropdown>
          <button type="button" class="btn btn-sm" ngbDropdownToggle
                  [ngClass]="{ 'btn-success': currentTheme == 'default', 'btn-primary': currentTheme != 'default'}">
            {{ type }}
          </button>
          <ul ngbDropdownMenu class="dropdown-menu">
            <li class="dropdown-item"
                *ngFor="let t of types"
                (click)="getActivityLogs(t); type = t">
              {{ t }}
            </li>
          </ul>
        </div>
      </nb-card-header>
      <nb-card-body>
        <ul class="user-activity-list">
          <li *ngFor="let item of activityLogs">
            <div class="visited-date">
              {{ item.operation }}
            </div>
            <div class="visited-date">
              {{ item.status }}
            </div>
          </li>
        </ul>
      </nb-card-body>
    </nb-card>
  `
})
export class ActivityLogsRecentComponent implements OnDestroy, OnInit {
	private alive = true;

	activityLogs: ActivityLogs[] = [];
	type = 'activityAll';
	types = [
		'activityAll',
		'activityCustomerManagement',
		'activitySolutionManagement',
		'activityBackupRestore',
		'activityPatchUpgrade'
	];
	currentTheme: string;

	constructor(private themeService: NbThemeService, private activityLogsService: ActivityLogsService) {
		this.themeService.getJsTheme().pipe(takeWhile(() => this.alive)).subscribe((theme) => {
			this.currentTheme = theme.name;
		});
	}

	ngOnInit() {
		this.getActivityLogs(this.type);
	}

	getActivityLogs(category: string) {
		this.activityLogsService.getActivityLogs(category).subscribe((activityLogsData) => {
			console.log(activityLogsData);
			this.activityLogs = activityLogsData;
		});
	}

	ngOnDestroy() {
		this.alive = false;
	}
}
