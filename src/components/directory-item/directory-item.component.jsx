import { useNavigate } from 'react-router-dom';

import { DirectoryItemContainer, BackgroundImage, Image, H2, Body, Para } from './directory-item.styles';

const DirectoryItem = ({category}) => {
    const {imageUrl, title, route} = category;
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);

    return (
        <DirectoryItemContainer onClick={onNavigateHandler} >
            <BackgroundImage>
                <Image src={require('../../assets/img/'+imageUrl+'.jpg')} alt='...'/>
            </BackgroundImage>
            <Body>
                <H2>{title}</H2>
                <Para>Shop Now</Para>
            </Body>
        </DirectoryItemContainer>
    )
}

export default DirectoryItem