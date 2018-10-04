import { NgModule } from '@angular/core';

import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { OverviewComponent } from './overview.component';
import { ButtonShortcutComponent } from './button-shortcut/button-shortcut.component';
import { ActivityLogsRecentComponent } from './logs-recent/logs-recent.component';

@NgModule({
    imports: [
      ThemeModule,
      NgxEchartsModule,
    ],
    declarations: [
      OverviewComponent,
      ButtonShortcutComponent,
      ActivityLogsRecentComponent,
    ],
  })
  export class OverviewModule {

  }
