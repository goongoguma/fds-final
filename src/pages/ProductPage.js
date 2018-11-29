import React, { Component } from 'react';
import ProductDetail from '../containers/ProductDetail';
import Layout from '../components/Layout';

export default class ProductPage extends Component {
  render() {
    const { match } = this.props;
    // 각 페이지마다 다른 정보를 보여주기위해 productId사용
    const productId = match.params.productId;
    return (
      <Layout>
        <ProductDetail productId={productId} />
      </Layout>
    );
  }
}
