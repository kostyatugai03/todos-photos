import { Button, Input } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import PhotoItem from '../components/PhotoComponents/PhotoItem';

export type Photo = {
    albumId: number,
    id: number,
    thumbnailUrl: string,
    title: string,
    url: string
}

const Photos = () => {
    const [albumId, setAlbumId] = useState<string>('');
    const [photos, setPhotos] = useState<Array<Photo> | []>([])
    const [updated, setUpdated] = useState<boolean>(false);

    const handleAlbumId = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void => {
        setAlbumId(e.target.value)
        setUpdated(true)
    }

    async function fetchPhotos () {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
        setPhotos(response.data);
        setUpdated(false)
    };
    
    return (
        <>
            <Input onChange={(e) => handleAlbumId(e)} id="filled-basic" value={albumId} />
            <Button disabled={!updated} onClick={fetchPhotos}>Get Album</Button>
            <PhotoItem photos={photos}/>
        </>
    );
};

export default Photos;