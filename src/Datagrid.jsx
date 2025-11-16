import { createElement, useCallback } from "react";


import "./ui/Datagrid.css";
import DatagridWrapper from "./components/DatagridWrapper";
import DataGridWidgetWrapper from "./components/DataGridWidgetWrapper";
import usegetProductData from "./hooks/usegetProductData";
import DataGridRow from "./components/DataGridRow";
import DatagridTopbar from "./components/DatagridTopbar";

export function Datagrid(props) {
 console.log('props', props) 

 const{productData : {status: productDataStatus}, add, edit, remove} = props    // productDataStatus = productData.status
if(productDataStatus === 'available'){
    
const {myProductsData, productDataSource} = usegetProductData(props)
console.warn('myProductsData',myProductsData)
return(
    <div>
    <DatagridTopbar productDataSource={productDataSource}  add = {add} edit={edit} remove={remove}/>
     <DataGridRow  product={myProductsData}/>
   </div>
            )
}
else 
    return <div>Loading...</div>
 
}
