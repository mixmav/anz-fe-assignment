export type ParsedAccountData = {
    months: string[];
    years: number[];
    data: {
        cashInflowYear1: number[];
        cashOutflowYear1: number[];
        cashInflowYear2: number[];
        cashOutflowYear2: number[];
    };
};
