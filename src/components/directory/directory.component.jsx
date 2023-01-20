import DirectoryItem from '../directory-item/directory-item.component'

import { DirectoryContainer } from './directory.styles';

const categories = [
    {
        "id": 1,
        "title": "Men's",
        "imageUrl": "mens",
        "route": 'shop/mens'
    },
    {
        "id": 2,
        "title": "Women's",
        "imageUrl": "womens",
        "route": 'shop/womens'
    },
    {
        "id": 3,
        "title": "Unisex",
        "imageUrl": "unisex",
        "route": 'shop/unisex'
    }
];

const Directory = () => {

    return (
    <DirectoryContainer >
        {categories.map((category) => (
            <DirectoryItem key={category.id} category={category} />
        ))}
    </DirectoryContainer>
    )
}

export default Directory