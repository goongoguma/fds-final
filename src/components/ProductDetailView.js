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
    // 장바구니 항목 추가 시 호출되는 함수
    // 욥션 id의 수량을 인수로 넘겨야 한다.
    onCreateCartItem: () => {},
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
    console.log(e.target.value); // 왜 숫자가 나오는건지?
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
          {/* select 태그안에서 option의 상태가 바뀌면, handleOptionChange가 실행되고 option의 value가 select의 value로 된다. */}
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
          min="1"
          max="10"
          onChange={e => this.handleQuantityChange(e)}
        />
        <div>가격: {totalPrice}</div>
        <button
          onClick={() => {
            // 수량에 이상이 있는경우
            const { selectedOptionId, quantity } = this.state;
            if (selectedOptionId === '') {
              alert('옵션을 선택하세요');
            } else if (quantity < 1) {
              alert('1이상의 수량을 입력하세요');
            } else {
              this.props.onCreateCartItem(selectedOptionId, quantity);
            }
            this.props.onCreateCartItem(
              this.state.selectedOptionId,
              this.state.quantity
            );
          }}
        >
          장바구니에 담기
        </button>
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
