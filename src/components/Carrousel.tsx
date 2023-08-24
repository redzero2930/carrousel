import { useState } from 'react';
import nintendo from '../assets/img/nintendo.png';
import playstation from '../assets/img/playstation.jpg';
import xbox from '../assets/img/xbox.png';
import './Carrousel.css'

export default function Carrousel() {
    const images = [nintendo, playstation, xbox];
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(images[0]);

    const previous = () => {
        const condition = selectedIndex > 0;
        const PrevousIndex = condition ? selectedIndex - 1 : images.length - 1
        setSelectedImage(images[PrevousIndex]);
        setSelectedIndex(PrevousIndex);
    };

    const next = () => {
       const condition = selectedIndex < images.length - 1;
       const nextIndex = condition ? selectedIndex + 1 : 0;
       setSelectedImage(images[nextIndex]);
       setSelectedIndex(nextIndex);
    };

    return (
        <div className='carrousel'>
            <button className='moveButton' onClick={previous}>{"<"}</button>
            <img
            className='carrouselImg' 
            src={selectedImage} 
            alt="console"
            />
            <button className='moveButton' onClick={next}>{">"}</button>
        </div>
    );
}



