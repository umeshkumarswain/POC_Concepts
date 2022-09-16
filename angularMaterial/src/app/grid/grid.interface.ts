export interface ITargetEstimate{
  Year: string;
  Category: string;
  FullYearForecastMinimum: string;
  FullYearForecastMaximum: string;
  TotalTargetPopulation: number;
  Total: number;
  Month01:string;
  Month02:string;
  Month03:string;
  Month04:string;
  Month05:string;
  Month06:string;
  Month07:string;
  Month08:string;
  Month09:string;
  Month10:string;
  Month11:string;
  Month12:string;
  Targeted: number;
  TargetedPercentage: number;
  Remaining: number;
  RemainingPercentage: number;
  Completed: number;
  CompletedPercentage: number;
  Comment: string;
  Month_Total: number;
  isLocked: boolean;
  ProcessTypeId: number;
}
export const TARGET_ESTIMATE_CONSTANTS = {
  PROGRAM_SELECTION_FILTER:"Program Selection Filter",
  TARGET_POPULATION:"Target Population",
  MONTH_01:"Jan-22",
  MONTH_02:"Feb-22",
  MONTH_03:"Mar-22",
  MONTH_04:"Apr-22",
  MONTH_05:"May-22",
  MONTH_06:"Jun-22",
  MONTH_07:"Jul-22",
  MONTH_08:"Aug-22",
  MONTH_09:"Sep-22",
  MONTH_10:"Oct-22",
  MONTH_11:"Nov-22",
  MONTH_12:"Dec-22",
  TOTAL:"Total",

}
