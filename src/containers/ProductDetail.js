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
        //   {
        //     "id": 1,
        //     "productId": 1,
        //     "title": "ASUS LAPTOP",
        //     "price": 80
        //   },
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

  // 서버측 장바구니에 항목을 추가하는 함수
  // 장바구니에 필요한 정보만 알려준다.
  // async handleCreateCratItem(optionId, quantity) {
  //   //
  //   alert(`장바구니 테스트, ${optionId}, ${quantity}`);
  // }

  // 클래스 필드 문법
  handleCreateCratItem = async (optionId, quantity) => {
    //
    alert(`장바구니 테스트, ${optionId}, ${quantity}`);
  };

  render() {
    return (
      <ProductDetailView
        {...this.state}
        // this를 고정시켜서 내려보낸다.
        // 위쪽에서 화살표 함수를 써줬다면 이미 this가 고정되어 아래 화살표 함수를 사용할 필요가 없다.
        onCreateCartItem={this.handleCreateCratItem}
      />
    );
  }
}
