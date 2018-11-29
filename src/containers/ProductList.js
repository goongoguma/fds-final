import React, { Component } from 'react';
import ProductListView from './ProductListView';
import api from '../api';

// 서버로부터 데이터를 가져와서 ProductListView에 데이터를 넘겨주는 컴포넌트
export default class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      products: [],
    };
  }

  // 리액트 개발도구로 받은 데이터 확인해보기
  async componentDidMount() {
    const { data: products } = await api.get('/products');
    this.setState({
      products,
      loading: false,
    });
  }

  render() {
    const { products } = this.state;
    // map에서 객체를 바로 반환하기 위해서 ({})를 사용
    const productsList = products.map(p => ({
      title: p.title,
      id: p.id,
      imgURL: p.mainImgUrl,
    }));
    return <ProductListView products={productsList} />;
  }
}
