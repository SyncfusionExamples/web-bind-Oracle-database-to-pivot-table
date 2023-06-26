import { PivotViewComponent, FieldList, Inject } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import './App.css';

function App() {
  let dataSourceSettings = {
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

  return (<PivotViewComponent id='PivotView' height={350} dataSourceSettings={dataSourceSettings} showFieldList={true}>
    <Inject services={[FieldList]}/></PivotViewComponent>);
};
export default App;
