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
                height: '250px',
                width: 'auto'  
            }}
        >
            <button onClick={onButtonClick}>Get selected rows</button>
            <AgGridReact
              checkboxSelection={true}
              sortable={true}
              filter={true}
              rowData={rowData}
              rowSelection="multiple"
              onGridReady={onGridReady}
            >
              {payrollColumns.map((column, i) => (
                <AgGridColumn field={column.field} key={i} />
              ))}
            </AgGridReact>
        </div>
    );
};

export default Grid;