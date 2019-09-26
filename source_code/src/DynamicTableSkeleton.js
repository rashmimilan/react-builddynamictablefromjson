import React, { Component } from "react"
class DynamicTableSkeleton extends Component {
   constructor(props){
   super(props);    
   this.getColumnTitles = this.getColumnTitles.bind(this);
   this.getValidColumnTitles = this.getValidColumnTitles.bind(this);   
   this.getRows = this.getRows.bind(this);
   this.extractKeys = this.extractKeys.bind(this);
}
 
extractKeys= function(){
   return Object.keys(this.props.table[0]);
}

getColumnTitles = function(){
   var key_params = Object.keys(this.props.table_params[0]);
   return key_params.map((each_column, value)=>{
   if(this.props.table_params[0][each_column] === "yes")
   return <th>{each_column}</th>
 })
}

getValidColumnTitles = function(each_column){
   var key_params = Object.keys(this.props.table_params); 
   return key_params.map((each_param_column, value)=>{ 
   return <td>{each_column} - {this.props.table_params[0][each_column]}</td>
  })
    //return (each_column.toUpperCase())
}

getRows = function(){
   var rows = this.props.table;
   return rows.map((each_row, value)=>{
   return <tr>
   {this.getEachRow(each_row)} 
   </tr>
  })      
}
      
getEachRow = function(each_row){
   var table_headers = this.extractKeys();
   const class_blue = { color:'blue'};
   const class_red = { color:'red'};
   const class_name = each_row.show ? class_blue : class_red;
   return table_headers.map((key, value)=>{
    if(this.props.table_params[0][key]) 
   return <td style={class_name}>{each_row[key]}</td>
  })
}

render(){
  return(
      <div><table><thead>
      <tr>{this.getColumnTitles()}</tr>
      </thead>
      <tbody>
      {this.getRows()}
      </tbody></table>
      </div>
   );
  }
}

export default DynamicTableSkeleton