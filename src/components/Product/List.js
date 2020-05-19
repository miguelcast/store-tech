import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { List as ListUI } from '@ui-kitten/components';

import Item from './Item';
import { PRODUCTS } from '../../graphql';

function useProducts() {
  const { loading, data, error } = useQuery(PRODUCTS);
  return {
    loading,
    products: data?.products || [],
    error,
  };
}

function List() {
  const { products } = useProducts();

  return (
    <ListUI
      data={products}
      renderItem={Item}
    />
  );
}

export default List;
