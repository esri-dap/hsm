import { Injectable } from '@angular/core';
import { of as observableOf,  Observable } from 'rxjs';
import { ActivityProviderService } from './activity-logs-provider.service'

export class ActivityLogs {
  operation: string;
  status: string;
  timestamp: number;
  initiationUser: string;
  initiationEvent: string;
}

@Injectable()
export class ActivityLogsService {

  data = {};

  constructor(private activityProvider: ActivityProviderService) {
    this.data = {
      activityAll: this.getDataAllActivity(),
      activityCustomerManagement: this.getDataCustomerManagementActivity(),
      activitySolutionManagement: this.getDataSolutionManagementActivity(),
      activityBackupRestore: this.getDataBackupRestoreActivity(),
      activityPatchUpgrade: this.getDataPatchUpgradeActivity(),
    };
  }

  private getDataAllActivity(): ActivityLogs[] {
    return this.activityProvider.getAllActivity().map((activityAll) => {
        return {
          operation: activityAll.operation,
          status: activityAll.status,
          timestamp: activityAll.timestamp,
          initiationUser: activityAll.initiationUser,
          initiationEvent: activityAll.initiationEvent,
        }
    })
}

  private getDataCustomerManagementActivity(): ActivityLogs[] {
      return this.activityProvider.getActivityByCustomerManagement().map((activityCustomerManagement) => {
          return {
            operation: activityCustomerManagement.operation,
            status: activityCustomerManagement.status,
            timestamp: activityCustomerManagement.timestamp,
            initiationUser: activityCustomerManagement.initiationUser,
            initiationEvent: activityCustomerManagement.initiationEvent,
          }
      })
  }

  private getDataSolutionManagementActivity(): ActivityLogs[] {
    return this.activityProvider.getActivityBySolutionManagement().map((activitySolutionManagement) => {
        return {
          operation: activitySolutionManagement.operation,
          status: activitySolutionManagement.status,
          timestamp: activitySolutionManagement.timestamp,
          initiationUser: activitySolutionManagement.initiationUser,
          initiationEvent: activitySolutionManagement.initiationEvent,
        }
    })
}

   private getDataBackupRestoreActivity(): ActivityLogs[] {
      return this.activityProvider.getActivityByBackupRestore().map((activityBackupRestore) => {
          return {
            operation: activityBackupRestore.operation,
            status: activityBackupRestore.status,
            timestamp: activityBackupRestore.timestamp,
            initiationUser: activityBackupRestore.initiationUser,
            initiationEvent: activityBackupRestore.initiationEvent,
          }
      })
  }

  private getDataPatchUpgradeActivity(): ActivityLogs[] {
    return this.activityProvider.getActivityByPatchUpgrade().map((activityPatchUpgrade) => {
        return {
          operation: activityPatchUpgrade.operation,
          status: activityPatchUpgrade.status,
          timestamp: activityPatchUpgrade.timestamp,
          initiationUser: activityPatchUpgrade.initiationUser,
          initiationEvent: activityPatchUpgrade.initiationEvent,
        }
    })
}

  getActivityLogs(category: string): Observable<ActivityLogs[]> {
    return observableOf(this.data[category]);
  }

  
}
