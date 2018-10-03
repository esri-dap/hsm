import { NgModule } from '@angular/core';

import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { OverviewComponent } from './overview.component';

@NgModule({
    imports: [
      ThemeModule,
      NgxEchartsModule,
    ],
    declarations: [
      OverviewComponent,
    ],
  })
  export class OverviewModule { }