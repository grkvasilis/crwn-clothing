import { useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { selectCategoriesMap } from "../../store/categories/categorySelector";

import ProductCard from "../../components/ProductCard/ProductCard";

import { CategoryContainer, Title } from "./Category.styles";

const Category = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const { category } = useParams();

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
