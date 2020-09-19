import React, { useState } from 'react';

import { AgGridReact, AgGridColumn } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

import { payrollColumns } from './columnConfigs';

  const mockRowData = [{
    make: "Toyota", model: "Celica", price: 35000
  }, {
    make: "Ford", model: "Mondeo", price: 32000
  }, {
    make: "Porsche", model: "Boxter", price: 72000
  }];

const Grid = () => {
    const [rowData, setRowData] = useState(mockRowData);

    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);

    const onButtonClick = e => {
      const selectedNodes = gridApi.getSelectedNodes()
      const selectedData = selectedNodes.map( node => node.data )
      const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model).join(', ')
      alert(`Selected nodes: ${selectedDataStringPresentation}`)
    }

    function onGridReady(params) {
      setGridApi(params.api);
      setGridColumnApi(params.columnApi);
    }

    return (
        <div
            className="ag-theme-balham"
            style={{
                width: 'auto'  
            }}
        >
            <button onClick={onButtonClick}>Get selected rows</button>
            <br />
            <AgGridReact
              checkboxSelection={true}
              domLayout='autoHeight'
              sortable={true}
              filter={true}
              rowData={rowData}
              rowSelection="multiple"
              onGridReady={onGridReady}
            >
              {payrollColumns.map((column, i) => {
                const { field, headerName } = column;
                return (
                  <AgGridColumn
                    key={i}
                    field={field}
                    headerName={headerName}
                  />
                );
              })}
            </AgGridReact>
        </div>
    );
};

export default Grid;