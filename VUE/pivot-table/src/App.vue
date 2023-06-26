<template>
  <div>
    <div class="control-section" style="overflow: auto">
      <div class="content-wrapper">
        <ejs-pivotview
          id="pivotview"
          ref="pivotview"
          :dataSourceSettings="dataSourceSettings"
          :showFieldList="showFieldList"
        ></ejs-pivotview>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import {
  FieldList,
  PivotViewPlugin,
} from "@syncfusion/ej2-vue-pivotview";

Vue.use(PivotViewPlugin);

export default {
  data() {
    return {
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
      showFieldList: true
    };
  },
  methods: {
  },
  provide: {
    pivotview: [FieldList]
  }
};

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-lists/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-grids/styles/material.css";
@import "../node_modules/@syncfusion/ej2-pivotview/styles/material.css";
</style>
