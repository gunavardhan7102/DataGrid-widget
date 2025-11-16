import React, {createElement, useState} from 'react';

const DataGridRow = ({ product }) => {
  console.log('sub product', product);
const[selected, setSelected] = useState(null)
  // Your original logic preserved
  console.log('selected', selected)
  const result = [];
  for (let i = 0; i < product.length; i += 5) {
    result.push({
      name: product[i],
      active: product[i + 1],
      category: product[i + 2],
      price: product[i + 3],
      stock: product[i + 4],
    });
  }

  console.log('result', result);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '30px',
        width: '100%',
      }}
    >
      <table
        style={{
          borderCollapse: 'collapse',
          width: '90%',
          maxWidth: '900px',
          fontFamily: 'Segoe UI, Arial, sans-serif',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          borderRadius: '10px',
          overflow: 'hidden',
        }}
      >
        <thead>
          <tr style={{ backgroundColor: '#4CAF50', color: '#fff' }}>
                 {
                  Object.keys(result[0]).map((key)=>{
        return(
                      <>
              <th style={thStyle}>{key.charAt(0).toUpperCase() + key.slice(1)}</th>
                   </>
        )
                })
               }
                </tr>
        </thead>
        <tbody>
          {result.map((res, index) => (
            <tr
              key={index}
              style={{
                backgroundColor: selected === res.name ? '#C5C4C3' : (index % 2 === 0 ? '#f9f9f9' : '#ffffff'),
                transition: 'background-color 0.3s ease',

              }}
              // onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#eafbea')}
              // onMouseLeave={(e) =>
              //   (e.currentTarget.style.backgroundColor =
              //     index % 2 === 0 ? '#f9f9f9' : '#ffffff')
              // }
             onClick={()=>setSelected(res.name)}
            >
              <td style={tdStyle}>{res.name}</td>
              <td style={tdStyle}>{res.active ? '✅' : '❌'}</td>
              <td style={tdStyle}>{res.category}</td>
              <td style={tdStyle}>${res.price}</td>
              <td style={tdStyle}>{res.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// ✅ Reusable style constants
const thStyle = {
  padding: '12px',
  borderBottom: '2px solid #ddd',
  textAlign: 'center',
  fontSize: '16px',
};

const tdStyle = {
  padding: '10px',
  borderBottom: '1px solid #ddd',
  textAlign: 'center',
  fontSize: '15px',
  color: '#333',
};

export default DataGridRow;
