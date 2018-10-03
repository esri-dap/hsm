import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators/takeWhile';

@Component({
	selector: 'hsm-overview',
	styleUrls: [ './overview.component.scss' ],
	templateUrl: './overview.component.html'
})
export class OverviewComponent implements OnDestroy {
	private alive = true;

	constructor(private themeService: NbThemeService) {
		this.themeService.getJsTheme().pipe(takeWhile(() => this.alive)).subscribe((theme) => {
            
		});
	}

	ngOnDestroy() {
		this.alive = false;
	}
}
