import React, { Component } from 'react';
import ProductDetailView from '../components/ProductDetailView';
import api from '../api';

export default class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      title: '',
      mainImgUrl: '',
      detailImgUrls: [],
      description: 0,
      loading: true,
    };
  }

  async componentDidMount() {
    const { data: product } = await api.get('/products/1');
    this.setState({
      ...product,
      loading: false,
    });
  }

  render() {
    return <ProductDetailView {...this.state} />;
  }
}
