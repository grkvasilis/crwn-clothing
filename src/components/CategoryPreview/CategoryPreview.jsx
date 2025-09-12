import { Link } from "react-router-dom"
import ProductCard from "../ProductCard/ProductCard"
import {CategoryPreviewContainer,Preview} from "./CategoryPreview.styles.jsx"

const CategoryPreview = ({title, products}) => {
  return (
    <CategoryPreviewContainer>
        <h2>
            <Link className="title" to={title}>{title.toUpperCase()}</Link>
        </h2>
        <Preview>
            {
                products.filter((_,idx)=>idx < 4)
                .map((product)=><ProductCard key={product.id} product={product}/>)
            }
        </Preview>
    </CategoryPreviewContainer>
  )
}

export default CategoryPreview