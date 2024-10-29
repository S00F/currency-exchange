

export const rows = [
    createData(1.15, 159, 6.0, "eur to usd", 4.0),
    createData(1.05, 237, 9.0,  "usd to eur", 4.3),
    createData(1.07, 262, 16.0, "eur to usd", 6.0),
    createData(1.10, 305, 3.7, "usd to eur", 4.3),
    createData(1.12, 356, 16.0, "eur to usd", 3.9),
  ];
  
  export function createData(
    realrate: number,
    inputrate: number,
    amount: number,
    conversion: string,
    calculatedamount:number

  ) {
    return {realrate, inputrate, amount, conversion, calculatedamount };
  }

  interface History {
    realrate: number,
    inputrate: number,
    amount: number,
    conversion: string,
    calculatedamount:number
  }

  const columns: any[] = [
    { field: 'realrate', headerName: 'Taux réel', width: 100,  type: 'number' },
    { field: 'inputrate', headerName: 'Taux saisi', width: 100  ,type: 'number',},
    { field: 'amount', headerName: 'Montant', width: 100  ,type: 'number',},
    { field: 'conversion', headerName: 'Conversion', width: 100 },
    {
      field: 'calculatedamount',
      headerName: 'Montant calculé',
      type: 'number',
      width: 100,
    },
  
  ];
  