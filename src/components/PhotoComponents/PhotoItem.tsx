import React from 'react'
import { Photo } from '../../pages/Photos';

const PhotoItem = ({photos}: {photos: Array<Photo> | []}) => {
    return (
        <div>
            {photos.length > 0 && photos.map((photo: Photo) => {
                return <img alt={photo.title} style={{ width: 100 }} src={photo.url}/>
            })}
        </div>
    )
}

export default PhotoItem;