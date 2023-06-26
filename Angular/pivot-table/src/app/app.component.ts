import { Component, OnInit } from '@angular/core';
import { FieldListService, IDataOptions, IDataSet } from '@syncfusion/ej2-angular-pivotview';

@Component({
  selector: 'app-root',
  // specifies the template string for the pivot table component
  template: `<ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings
  [showFieldList]="true"></ejs-pivotview>`,
  providers: [FieldListService],
})
export class AppComponent implements OnInit {
    public pivotData: IDataSet[] | undefined;
    public dataSourceSettings: IDataOptions | undefined;

    ngOnInit(): void {

        this.dataSourceSettings = {
          url: 'https://localhost:44346/Pivot',
          enableSorting: true,
          expandAll: false,
          dataSource: [],
          columns: [
            { name: 'DEPARTMENT_ID', caption: 'Department ID' },
            { name: 'EMPLOYEE_NAME', caption: 'Employee Name' },
          ],
          rows: [
            { name: 'JOB', caption: 'Job' },
            { name: 'SALARY', caption: 'Salary' }
          ],
          values: [
            { name: 'EMPLOYEE_ID', caption: 'Employee ID' },
            { name: 'CC_EMPLOYEES', caption: 'Employees' },
            { name: 'CC_TAX_PERCENTAGE', caption: 'Percentage' },
          ],
          filters: []
        };
    }
}