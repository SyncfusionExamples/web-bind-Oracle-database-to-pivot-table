var pivotObj = new ej.pivotview.PivotView({
	dataSourceSettings: {
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
	},
	showFieldList: true,
	width: '100%'
});
pivotObj.appendTo('#PivotView');