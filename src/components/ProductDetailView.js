// import React, { Component } from 'react';

// export default class ProductDetailView extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       quantity: 1,
//       // 장바구니에 상품을 보낼때 id가 필요하다.
//       selectedOptionId: null,
//     };
//   }

//   // 하나의 페이지가 보여줘야 할 정보들
//   static defaultProps = {
//     id: null,
//     title: '',
//     price: 3000,
//     description: '',
//     mainImgUrl: '',
//     detailImgUrls: [],
//     options: [
//       //   {
//       //     "id": 1,
//       //     "productId": 1,
//       //     "title": "ASUS LAPTOP",
//       //     "price": 80
//       //   },
//     ],
//   };

//   handleChangeNumber(e) {
//     this.setState({
//       value: e.target.value,
//     });
//   }

//   handleChangeOption(e) {
//     this.setState({
//       selectedOptionId: e.target.value,
//     });
//   }

//   render() {
//     const {
//       id,
//       title,
//       price,
//       description,
//       mainImgUrl,
//       detailImgUrls,
//       options,
//       value,
//     } = this.props;
//     const { quantity, selectedOptionId } = this.state;
//     const selectedOption = options.find(o => o.id === selectedOptionId);
//     const totalPrice = selectedOption && selectedOption.price * quantity;
//     return (
//       <div>
//         <select
//           value={selectedOptionId}
//           onChange={e => this.handleChangeOption(e)}
//         />
//         <select>
//           {options.map(o => (
//             <option value={o.id}>{o.title}</option>
//           ))}
//         </select>

//         <select
//           value={this.state.selectedOptionId}
//           onChange={e => this.handleChangeOption(e)}
//         />

//         <input
//           type="number"
//           value={value}
//           name="quantity"
//           onChange={e => this.handleChangeNumber(e)}
//         />

//         <div>{price * this.state.value}</div>
//         <div>{id}</div>
//         <div>{title}</div>
//         <div>price</div>
//         <div>{description}</div>
//         <img src={mainImgUrl} alt={title} />
//         {detailImgUrls.map(url => (
//           <img src={url} alt={title} />
//         ))}
//       </div>
//     );
//   }
// }

import React, { Component } from 'react';
import withLoading from '../hoc/withLoading';

class ProductDetailView extends Component {
  static defaultProps = {
    id: null,
    title: '',
    description: '',
    mainImgUrl: '',
    detailImgUrls: [],
    options: [
      // {
      //   "id": 1,
      //   "productId": 1,
      //   "title": "Medium",
      //   "price": 30000
      // },
    ],
  };

  constructor(props) {
    super(props);

    this.state = {
      quantity: 1,
      selectedOptionId: '',
    };
  }

  handleOptionChange(e) {
    this.setState({
      selectedOptionId: parseInt(e.target.value),
      // 옵션이 바뀔때마다 수량을 다시 1로 초기화
      quantity: 1,
    });
  }

  handleQuantityChange(e) {
    this.setState({
      quantity: parseInt(e.target.value),
    });
  }

  render() {
    const {
      id,
      title,
      description,
      mainImgUrl,
      detailImgUrls,
      options,
    } = this.props;

    const { quantity, selectedOptionId } = this.state;

    const selectedOption = options.find(o => o.id === selectedOptionId);
    const totalPrice = selectedOption && selectedOption.price * quantity;
    return (
      <div>
        <select
          value={selectedOptionId}
          onChange={e => this.handleOptionChange(e)}
          required
        >
          {/* selected 대신에 빈문자열을 쓰고 초기상태에 빈문자열을 넣어놓는다 */}
          <option disabled value="">
            옵션을 선택하세요
          </option>
          {options.map(o => (
            <option key={o.id} value={o.id}>
              {o.title}
            </option>
          ))}
        </select>
        <input
          value={quantity}
          type="number"
          // 최소 최대수량
          min="1"
          max="10"
          onChange={e => this.handleQuantityChange(e)}
        />
        <div>가격: {totalPrice}</div>
        <div>{id}</div>
        <div>{title}</div>
        <div>{description}</div>
        <img src={mainImgUrl} alt={title} />
        {detailImgUrls.map(url => (
          <img key={url} src={url} alt={title} />
        ))}
      </div>
    );
  }
}

export default withLoading(ProductDetailView);
