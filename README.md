# react-builddynamictablefromjson
React JS - Dynamic Table  Skeleton to load data from Json Files. Options to hide and display columns and control rows based on some column value.

1. Include any non-nested Json file.
2. The script will automatically fetch all keys and print it as columns and display all values under it as rows.
3. Based on a key (for e.g. Show => true), the row display can be managed. In this case, if "Show=>true", then font color=blue else color=red.
4. With an additional json params file, we can handle whether to display a column or not. For e.g. 

export var table1 = [
    {city: "New York",   temperature: 40, show:true},
    {city: "New Delhi",  temperature: 45, show:false},
    {city: "New Jersey", temperature: 41, show:true},
    {city: "Bengaluru",  temperature: 32, show:false},
    {city: "Mumbai",     temperature: 46, show:true}    
]

export var table1_params = [ 
{city: "yes", temperature: "yes", show: "no"}
]

In this case, only "city" and "temperature" columns will be displayed in the final output table.


Working Example at:
https://stackblitz.com/edit/react-vvsinh?file=DynamicTableSkeleton.js
