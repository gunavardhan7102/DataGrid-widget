import React, {createElement} from 'react'

const DatagridTopbar = ({productDataSource, add, edit, remove}) => {
    let num=productDataSource.offset
   const increase = () =>{
    num+=10;
    productDataSource.setOffset(num);
   }
   const decrease = () => {
    (num >= 10) && productDataSource.setOffset(num-=10) 
   }
    return(
 <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '30px',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
        <div
        style={{
          width: '90%',
          maxWidth: '900px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '15px',
        }}
      >
         <div>
          <button style={pageButtonStyle} onClick={decrease}>⟨ Prev</button>
          <button style={pageButtonStyle} onClick={increase}>Next ⟩</button>
        </div>

         <div>
          <button style={actionButtonStyle} onClick={add.execute}>➕ Add</button>
          <button style={actionButtonStyle} onClick={edit.execute}>✏️ Edit</button>
          <button style={{ ...actionButtonStyle, backgroundColor: '#f44336' }} onClick={remove.execute}>🗑️ Delete</button>
        </div>
      </div>
      </div>
   
    )
}



const pageButtonStyle = {
  backgroundColor: '#4CAF50',
  border: 'none',
  color: 'white',
  padding: '8px 14px',
  marginRight: '8px',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '14px',
  transition: 'background-color 0.3s',
};

const actionButtonStyle = {
  backgroundColor: '#2196F3',
  border: 'none',
  color: 'white',
  padding: '8px 14px',
  marginLeft: '8px',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '14px',
  transition: 'background-color 0.3s',
};

export default DatagridTopbar