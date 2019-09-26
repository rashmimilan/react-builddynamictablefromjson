import React, { Component } from "react"

class ReadFromJson extends Component {
   constructor(props){
      super(props);    
      this.getColumnTitles = this.getColumnTitles.bind(this);
      this.extractKeys = this.extractKeys.bind(this);
}
 
extractKeys= function(){
   return Object.keys(this.props.inputjson[0]);
}

getColumnTitles = function(){
  // var columns = this.extractKeys();
   //return columns.map((each_column, value)=>{
    /*   return <th>{each_column.toUpperCase()} - {this.getValidColumnTitles(each_column)}</th>*/
//   return <th>{this.getValidColumnTitles(each_column)}</th>
   })
}


render(){
   return (
      <div><table><thead>
      <tr>{this.getColumnTitles()}</tr>
      </thead>
      <tbody>
      //{this.getRows()}
      </tbody></table></div>
   );
  }
}

export default ReadFromJson