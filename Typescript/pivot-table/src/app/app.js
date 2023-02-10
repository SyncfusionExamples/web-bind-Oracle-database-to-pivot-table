define(["require", "exports", "@syncfusion/ej2-pivotview"], function (require, exports, ej2_pivotview_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ej2_pivotview_1.PivotView.Inject(ej2_pivotview_1.FieldList);
    var pivotTableObj = new ej2_pivotview_1.PivotView({
        dataSourceSettings: {
            url: 'https://localhost:7132/pivot',
            enableSorting: true,
            expandAll: false,
            dataSource: [],
            columns: [
                { name: 'CC_COUNTRY', caption: 'Contry' }
            ],
            rows: [
                { name: 'CC_STATE', caption: 'State' },
                { name: 'CC_CITY', caption: 'City' }
            ],
            values: [
                { name: 'CC_COMPANY', caption: 'Company' },
                { name: 'CC_EMPLOYEES', caption: 'Employees' },
                { name: 'CC_TAX_PERCENTAGE', caption: 'Percentage' },
            ],
            filters: []
        },
        showFieldList: true,
        height: 350
    });
    pivotTableObj.appendTo('#PivotTable');
});
