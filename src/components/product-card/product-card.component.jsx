import './product-card.styles.css';

import Button from '../button/button.component';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product

    return (
        <div className='product-card-container' >
            <div className='card-img' >
                <img src={require('../../assets/img/'+imageUrl+'.jpg')} alt={`${name}`} />
            </div>
            <div className='footer' >
                <span className='name' > {name} </span>
                <span className='price' > {price} </span>

            </div>
            <Button buttonType='inverted' >Add to Cart</Button>
        </div>
    )
}

export default ProductCard;