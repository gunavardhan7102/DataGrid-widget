import React from 'react'

const usegetProductData = (props) => {
let myProductsData = []
    const{productName:prodname, 
      productData:{items: productItems},
      productData:productDataSource,
    productActive:prodActive,
  productCategory:prodCategory,
productPrice:prodPrice,
productQuantity:prodQuantity} = props;

// productDataSource.setOffset(0);
productDataSource.setLimit(10);

    productItems.forEach((product) => {
        const name = prodname.get(product).value;
        const active = prodActive.get(product).value;
        const category = prodCategory.get(product).value;
        const price = parseFloat(prodPrice.get(product).value).toFixed(2);
        const quantity = parseInt(prodQuantity.get(product).value);
        myProductsData.push(name, active, category, price, quantity);
    });

  return (
  {myProductsData, productDataSource}
  )
}

export default usegetProductData