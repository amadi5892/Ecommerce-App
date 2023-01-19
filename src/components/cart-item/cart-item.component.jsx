import './cart-item.styles.scss';

const CartItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;

    return (
        <div className='cart-item-container' >
            <img src={require('../../assets/img/'+imageUrl+'.jpg')} alt={`${name}`} />
            <div className='item-details' >
                <span className='name' >{name}</span>
                <span className='price' >{quantity} x ${price}</span>
            </div>
            <span>{quantity}</span>
        </div>
    )
}

export default CartItem;