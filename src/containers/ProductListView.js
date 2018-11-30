import React, { Component } from 'react';
import withLoading from '../hoc/withLoading';
import { Link } from 'react-router-dom';

// 상품 목록 배열 데이터를 받아서 화면을 그려주는 컴포넌트
class ProductListView extends Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        {products.map(p => (
          <div key={p.id}>
            <div>{p.id}</div>
            <Link to={`/product/${p.id}`}>{p.title}</Link>
            <img src={p.imgURL} alt={p.title} />
          </div>
        ))}
      </div>
    );
  }
}

export default withLoading(ProductListView);
