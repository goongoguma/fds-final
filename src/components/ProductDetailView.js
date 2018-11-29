import React, { Component } from 'react';

export default class ProductDetailView extends Component {
  // 하나의 페이지가 보여줘야 할 정보들
  static defaultProps = {
    id: null,
    title: '',
    description: '',
    mainImgUrl: '',
    detailImgUrls: [],
    options: [
      //   {
      //     "id": 1,
      //     "productId": 1,
      //     "title": "ASUS LAPTOP",
      //     "price": 80
      //   },
    ],
  };
  render() {
    const {
      id,
      title,
      description,
      mainImgUrl,
      detailImgUrls,
      options,
    } = this.props;
    return (
      <div>
        <select>
          {options.map(o => (
            <option value={o.id}>{o.title}</option>
          ))}
        </select>
        <div>{id}</div>
        <div>{title}</div>
        <div>{description}</div>
        <img src={mainImgUrl} alt={title} />
        {detailImgUrls.map(url => (
          <img src={url} alt={title} />
        ))}
      </div>
    );
  }
}
