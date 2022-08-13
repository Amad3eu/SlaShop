import type { NextPage } from "next";
import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { specialOfferProductsActions } from "../store/specialOfferProducts-slice";
import { newestProductsActions } from "../store/newestProduct-slice";

import { client } from "../lib/client";

import Benefits from "../components/Benefits";
import Carousel from "../components/carousel";
import Offers from "../components/Offers/Offers";
import Category from "../components/category/Category";
import Newest from "../components/newest/Newest";
import { IProduct } from "../lib/types/products";
import { newestProductsFn } from "../utilities/sortByTimeStamp";

const Home: NextPage<{ products: IProduct[] }> = ({ products }) => {
  const dispatch = useDispatch();

  //add products to offers list
  useEffect(() => {
    const offersProducts = products.filter((item) => item.discount);
    dispatch(specialOfferProductsActions.addProducts(offersProducts));
  }, [dispatch, products]);

  //add products to newest list
  useEffect(() => {
    const sortedProductsByTimeStamp = newestProductsFn(products);
    dispatch(newestProductsActions.addProducts(sortedProductsByTimeStamp));
  }, [products, dispatch]);

  return (
    <div>
      <Carousel />
      <Benefits />
      <Offers />
      <Category />
      <Newest />
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const productQuery = `*[_type=='product']`;
  const products = await client.fetch(productQuery);

  return {
    props: {
      products,
    },
  };
};
