import React, { Component } from 'react';

// 상품 목록 배열 데이터를 받아서 화면을 그려주는 컴포넌트
export default class ProductListView extends Component {
  static defaultProps = {
    // 서버로부터 받아온 상품 목록 데이터
    products: [
      // 어떠한 데이터를 받아올것인지?
      // {
      //   id: 1,
      //   title: '자켓',
      //   imgURL: '...'
      // }
    ],
  };
  render() {
    const { products } = this.props;
    return (
      <div>
        {products.map(p => (
          <div key={p.id}>
            <div>{p.id}</div>
            <div>{p.title}</div>
            <img src={p.imgURL} alt={p.title} />
          </div>
        ))}
      </div>
    );
  }
}
