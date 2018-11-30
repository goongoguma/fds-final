import React, { Component } from 'react';
import ProductList from '../containers/ProductList';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
  render() {
    const { location } = this.props;
    console.log(location.search);
    const p = new URLSearchParams(location.search);
    const category = p.get('category');
    return (
      <Layout>
        <h1>Home</h1>
        <Link to="/">All</Link>
        <Link to="/?category=Laptop">Laptop</Link>
        <Link to="/?category=Tablet">Tablet</Link>
        <ProductList category={p.get('category')} key={category} />
      </Layout>
    );
  }
}
