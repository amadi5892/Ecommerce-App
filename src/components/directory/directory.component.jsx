import './directory.styles.css'

const Directory = ({categories}) => {
    const {imageUrl, title} = categories
    return (
        <div className='directory-container' >
            <div className='background-image' />
            <div className='body'>
                <h2>Men's Cologne</h2>
                <p>Shop Now</p>
            </div>
        </div>
    )
}

export default Directory