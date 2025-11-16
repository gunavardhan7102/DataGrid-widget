import React, {createElement} from 'react'

const DataGridWidgetWrapper = ({children}) => {
  return (
    <div style={{
    border: "1px solid",
    height: '85vh',
display:'flex',
justifyContent:'center',
alignItems:'start'
 }}>{children}</div>
  )
}

export default DataGridWidgetWrapper