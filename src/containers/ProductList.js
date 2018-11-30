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
    const { category } = this.props;
    // HomePage에서 받은 p.get('category')을 products뒤에 추가해주기
    // 하지만 링크를 클릭하면 반응이 없다가 새로고침을 하면 필터링이 적용이된다.
    // 키를 다시 줌으로써 모두 리셋하기
    const { data: products } = await api.get('/products', {
      params: {
        category,
      },
    });
    this.setState({
      products,
      loading: false,
    });
  }

  render() {
    const { products, loading } = this.state;
    // map에서 객체를 바로 반환하기 위해서 ({})를 사용
    const productsList = products.map(p => ({
      title: p.title,
      id: p.id,
      imgURL: p.mainImgUrl,
    }));
    // 서버로부터 받아온 데이터들을 presentational component인 ProductListView에서 화면을 그려주기 위해 보낸다.
    return <ProductListView loading={loading} products={productsList} />;
  }
}
