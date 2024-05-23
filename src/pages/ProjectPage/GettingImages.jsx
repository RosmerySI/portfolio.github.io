import  { useState } from 'react';
import {gifs,calc1,calc2,clock1,clock2,l1,l2,l3,l4,l5,l6,l7,l8,l9,weather1,
        weather2,weather3,weather4,mb1,mb2,mb3,mb4,mb5,mb6,mb7,mb8,mb9,mb10
} from '../../assets/images/imagesIndex.js';

export const GettingImages = (id) => {

    const [images, setImages] = useState([]);

    const gettingImages = () => {
        switch (id) {
            case 'gif':
                setImages([
                    { src: gifs }
                ]);
                break;
            case 'calc':
                setImages([
                    { src: calc1 },
                    { src: calc2 }
                ]);
                break;
            case 'clock':
                setImages([
                    { src: clock1 },
                    { src: clock2 }
                ]);
                break;
            case 'l':
                setImages([
                    { src: l1 },
                    { src: l2 },
                    { src: l3 },
                    { src: l4 },
                    { src: l5 },
                    { src: l6 },
                    { src: l7 },
                    { src: l8 },
                    { src: l9 },
                ]);
                break;
            case 'weather':
                setImages([
                    { src: weather1 },
                    { src: weather2 },
                    { src: weather3 },
                    { src: weather4 },
                ]);
                break;
            case 'mb':
                setImages([
                    { src: mb2 },
                    { src: mb1 },
                    { src: mb3 },
                    { src: mb4 },
                    { src: mb5 },
                    { src: mb6 },
                    { src: mb7 },
                    { src: mb8 },
                    { src: mb9 },
                    { src: mb10 },
                ]);
                break;
            default:
                alert('Ha ocurrido un error');
        }
    }
    
    return { images,gettingImages };
};
