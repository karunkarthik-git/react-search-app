import React from 'react';
import ImageCard from './ImageCard';
import './ImageList.css'

const ImageList = (props) => {

    const images = props.images.map((image)=>{
        // Always add key to root div
        return <ImageCard image={image} key={image.id}/>;
    })

    return <div className='image-list'>{images}</div>
}
export default ImageList;