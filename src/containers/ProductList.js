import React, { Component } from 'react';
import ProductListView from './ProductListView';

// 서버로부터 데이터를 가져와서 ProductListView에 데이터를 넘겨주는 컴포넌트
export default class ProductList extends Component {
  render() {
    const products = [
      {
        id: 1,
        title: '자켓',
        imgURL: '',
      },
      {
        id: 2,
        title: '코드',
        imgURL: '',
      },
    ];
    return <ProductListView products={products} />;
  }
}
