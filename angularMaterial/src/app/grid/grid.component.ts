import {Component, OnInit, ViewChild} from '@angular/core';
import {ColDef} from "ag-grid-community";
import {HttpClient} from "@angular/common/http";
import {AgGridAngular} from "ag-grid-angular";
import data from '../grid/grid.data.json';
import {TARGET_ESTIMATE_CONSTANTS} from "./grid.interface";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  rowData: any[] = [];
  colDefs: ColDef[] = [
    {headerName: TARGET_ESTIMATE_CONSTANTS.PROGRAM_SELECTION_FILTER, field: 'Category', pinned: 'left'},
    {headerName: TARGET_ESTIMATE_CONSTANTS.TARGET_POPULATION, field: 'TotalTargetPopulation', pinned: 'left'},
    {headerName: TARGET_ESTIMATE_CONSTANTS.MONTH_01, field: 'Month01', width: 100},
    {headerName: TARGET_ESTIMATE_CONSTANTS.MONTH_02, field: 'Month02', width: 100},
    {headerName: TARGET_ESTIMATE_CONSTANTS.MONTH_03, field: 'Month03', width: 100},
    {headerName: TARGET_ESTIMATE_CONSTANTS.MONTH_04, field: 'Month04', width: 100},
    {headerName: TARGET_ESTIMATE_CONSTANTS.MONTH_05, field: 'Month05', width: 100},
    {headerName: TARGET_ESTIMATE_CONSTANTS.MONTH_06, field: 'Month06', width: 100},
    {headerName: TARGET_ESTIMATE_CONSTANTS.MONTH_07, field: 'Month07', width: 100},
    {headerName: TARGET_ESTIMATE_CONSTANTS.MONTH_08, field: 'Month08', width: 100},
    {headerName: TARGET_ESTIMATE_CONSTANTS.MONTH_09, field: 'Month09', width: 100},
    {headerName: TARGET_ESTIMATE_CONSTANTS.MONTH_10, field: 'Month10', width: 100},
    {headerName: TARGET_ESTIMATE_CONSTANTS.MONTH_11, field: 'Month11', width: 100},
    {headerName: TARGET_ESTIMATE_CONSTANTS.MONTH_12, field: 'Month12', width: 100},
    {headerName: TARGET_ESTIMATE_CONSTANTS.TOTAL, field: 'Total'},
  ];

  defaultColDefs: ColDef = {
    sortable: true, filter: true,
  }
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.rowData = data;
    this.agGrid.api.sizeColumnsToFit();
  }

  onCellClicked(event: any) {
    console.log({event})
  }

  clearSelection() {
    this.agGrid.api.deselectAll();
  }

  onGridReady(params: any) {

  }

}
