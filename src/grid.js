import React, { useState } from 'react';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

const mockColumnData = [{
    headerName: "Make", field: "make", sortable: true, filter: true
  }, {
    headerName: "Model", field: "model", sortable: true, filter: true
  }, {
    headerName: "Price", field: "price", sortable: true, filter: true
  }];

  const mockRowData = [{
    make: "Toyota", model: "Celica", price: 35000
  }, {
    make: "Ford", model: "Mondeo", price: 32000
  }, {
    make: "Porsche", model: "Boxter", price: 72000
  }];

const Grid = () => {
    const [columnDefs, setColumnDefs] = useState(mockColumnData);
    const [rowData, setRowData] = useState(mockRowData);

    return (
        <div
            className="ag-theme-balham"
            style={{
                height: '250px',
                width: 'auto'  
            }}
        >
            <AgGridReact
                columnDefs={columnDefs}
                rowData={rowData}>
            </AgGridReact>
        </div>
    );
};

export default Grid;