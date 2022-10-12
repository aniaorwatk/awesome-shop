
import ProductRow from "../ProductRow/ProductRow.jsx"


export function ProductsList({products}){
    console.log(products);
    return(
        
        <div>
            {products.map(product=>{
                return <ProductRow 
                product={product}
                key={product.id}
                />
            })}
            lista produktów
        </div>
    )
}