import React from 'react';
import {render} from 'react-dom';
import './style.css';
import {table1, table1_params} from './table1.js';
import {table2} from './table2.js';
import DynamicTableSkeleton from './DynamicTableSkeleton.js';
export class App extends React.Component {
  render() {
        return (
            <div>
            <div>
            <DynamicTableSkeleton table={table1} table_params={table1_params} />
            </div>
            </div>
          );
    } 
}
export default App;
render(<App />, document.getElementById('root'));
