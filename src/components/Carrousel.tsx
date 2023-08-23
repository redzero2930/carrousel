import { useState } from 'react';
import nintendo from '../assets/img/nintendo.png';
import playstation from '../assets/img/playstation.jpg';
import xbox from '../assets/img/xbox.png';
import './Carrousel.css'

export default function Carrousel(props: any) {
    const images = [nintendo, playstation, xbox];
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(images[0]);

    const selectNewImage = (images: string[], next = true) => {
        const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0;
        const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.length - 1;
        setSelectedImage(images[nextIndex]);
        setSelectedIndex(nextIndex);
    };

    const previous = () => {
        selectNewImage( images, false);
    };

    const next = () => {
        selectNewImage( images, true);
    };

    return (
        <div className='carrousel'>
            <img 
            src={selectedImage} 
            alt="console"
            />
            <button onClick={previous}>{"<"}</button>
            <button onClick={next}>{">"}</button>
        </div>
    );
}



