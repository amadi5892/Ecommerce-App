import './directory-item.styles.css';

const DirectoryItem = ({category}) => {
    const {imageUrl, title} = category;

    return (
        <div className='directory-item-container' >
            <div className='background-image'>
                <img src={require('../../assets/img/'+imageUrl+'.jpg')} alt='...'/>
            </div>
            <div className='body'>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    )
}

export default DirectoryItem