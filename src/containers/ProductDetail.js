import React, { Component } from 'react';
import ProductDetailView from '../components/ProductDetailView';
import api from '../api';

export default class ProductDetail extends Component {
  static defaultProps = {
    // 표시해주어야 하는 상품의 id
    productId: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      title: '',
      mainImgUrl: '',
      detailImgUrls: [],
      description: 0,
      loading: true,
      options: [
        // "options": [
        //   {
        //     "id": 1,
        //     "productId": 1,
        //     "title": "ASUS LAPTOP",
        //     "price": 80
        //   },
        // ]
      ],
    };
  }

  async componentDidMount() {
    const { productId } = this.props;
    const { data: product } = await api.get('/products/' + productId, {
      params: {
        // options 불러오기,
        _embed: 'options',
      },
    });
    this.setState({
      ...product,
      loading: false,
    });
  }

  render() {
    return <ProductDetailView {...this.state} />;
  }
}
