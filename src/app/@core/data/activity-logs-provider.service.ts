import { Injectable } from '@angular/core';

@Injectable()
export class ActivityProviderService {
	getAllActivity() {
		return [
			{
				operation: 'Register PTFI as Customer',
				status: 'Succeeded',
				timestamp: 1538639510,
				initiationUser: 'dapratama@esriindonesia.co.id',
				initiationEvent: 'Customer Management'
      },
      {
				operation: 'Deploy Solution X to "PTFI"',
				status: 'On Progress',
				timestamp: 1538639510,
				initiationUser: 'dapratama@esriindonesia.co.id',
				initiationEvent: 'Solution Management'
      },
      {
				operation: 'Backup Solution Z',
				status: 'Failed (Code: 999)',
				timestamp: 1538639510,
				initiationUser: 'dapratama@esriindonesia.co.id',
				initiationEvent: 'Backup & Restore'
      },
      {
				operation: 'Upgrade ArcGIS Server 10.5 to 10.6 on Solution B(PTFI), Solution Z(AHM), and Solution DEF(Pemkot Tangerang)',
				status: 'Succeeded',
				timestamp: 1538639510,
				initiationUser: 'dapratama@esriindonesia.co.id',
				initiationEvent: 'Patch & Upgrade'
      },
      {
				operation: 'Register PTFI as Customer',
				status: 'Succeeded',
				timestamp: 1538639510,
				initiationUser: 'dapratama@esriindonesia.co.id',
				initiationEvent: 'Customer Management'
      },
      {
				operation: 'Deploy Solution X to "PTFI"',
				status: 'On Progress',
				timestamp: 1538639510,
				initiationUser: 'dapratama@esriindonesia.co.id',
				initiationEvent: 'Solution Management'
      },
      {
				operation: 'Backup Solution Z',
				status: 'Failed (Code: 999)',
				timestamp: 1538639510,
				initiationUser: 'dapratama@esriindonesia.co.id',
				initiationEvent: 'Backup & Restore'
      },
      {
				operation: 'Upgrade ArcGIS Server 10.5 to 10.6 on Solution B(PTFI), Solution Z(AHM), and Solution DEF(Pemkot Tangerang)',
				status: 'Succeeded',
				timestamp: 1538639510,
				initiationUser: 'dapratama@esriindonesia.co.id',
				initiationEvent: 'Patch & Upgrade'
			},
		];
  }

  getActivityByCustomerManagement() {
		return [
			{
				operation: 'Register PTFI as Customer',
				status: 'Succeeded',
				timestamp: 1538639510,
				initiationUser: 'dapratama@esriindonesia.co.id',
				initiationEvent: 'Customer Management'
      },
      {
				operation: 'Register PTFI as Customer',
				status: 'Succeeded',
				timestamp: 1538639510,
				initiationUser: 'dapratama@esriindonesia.co.id',
				initiationEvent: 'Customer Management'
      },
		];
  }
  getActivityBySolutionManagement() {
		return [
			{
				operation: 'Deploy Solution X to "PTFI"',
				status: 'On Progress',
				timestamp: 1538639510,
				initiationUser: 'dapratama@esriindonesia.co.id',
				initiationEvent: 'Solution Management'
      },
      {
				operation: 'Deploy Solution X to "AHM"',
				status: 'On Progress',
				timestamp: 1538639510,
				initiationUser: 'dapratama@esriindonesia.co.id',
				initiationEvent: 'Solution Management'
      },
		];
  }
  getActivityByBackupRestore() {
		return [
			{
				operation: 'Backup Solution Z',
				status: 'Failed (Code: 999)',
				timestamp: 1538639510,
				initiationUser: 'dapratama@esriindonesia.co.id',
				initiationEvent: 'Backup & Restore'
      },
      {
				operation: 'Backup Solution Z',
				status: 'Failed (Code: 999)',
				timestamp: 1538639510,
				initiationUser: 'dapratama@esriindonesia.co.id',
				initiationEvent: 'Backup & Restore'
      },
		];
  }
  getActivityByPatchUpgrade() {
		return [
			{
				operation: 'Upgrade ArcGIS Server 10.5 to 10.6 on Solution B(PTFI), Solution Z(AHM), and Solution DEF(Pemkot Tangerang)',
				status: 'Succeeded',
				timestamp: 1538639510,
				initiationUser: 'dapratama@esriindonesia.co.id',
				initiationEvent: 'Patch & Upgrade'
      },
      {
				operation: 'Upgrade ArcGIS Server 10.5 to 10.6 on Solution B(PTFI), Solution Z(AHM), and Solution DEF(Pemkot Tangerang)',
				status: 'Succeeded',
				timestamp: 1538639510,
				initiationUser: 'dapratama@esriindonesia.co.id',
				initiationEvent: 'Patch & Upgrade'
			},
		];
	}
}
