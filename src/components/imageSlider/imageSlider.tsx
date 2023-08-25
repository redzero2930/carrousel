import { useState } from 'react';
import arrowleft from '../../assets/componentsImg/arrow-left.png';
import arrowright from '../../assets/componentsImg/arrow-rigth.png';
import nintendo from '../../assets/img/nintendo.png';
import playstation from '../../assets/img/playstation.jpg';
import xbox from '../../assets/img/xbox.png';
import './imageSlider.css'

export default function ImageSlider() {
    const images = [nintendo, playstation, xbox];
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(images[0]);

    const previous = () => {
        const condition = selectedIndex > 0;
        const previousIndex = condition ? selectedIndex - 1 : images.length - 1;
        setSelectedImage(images[previousIndex]);
        setSelectedIndex(previousIndex);
    };

    const next = () => {
       const condition = selectedIndex < images.length - 1;
       const nextIndex = condition ? selectedIndex + 1 : 0;
       setSelectedImage(images[nextIndex]);
       setSelectedIndex(nextIndex);
    };

    return (
        <div className='imageSlider'>
            <button className='moveButton' onClick={previous}>
                <img src={arrowleft} alt="Left Arrow" />
            </button>
            <img
                className='carrouselImg' 
                src={selectedImage} 
                alt="console"
            />
            <button className='moveButton' onClick={next}>
                <img src={arrowright} alt="Right Arrow" />
            </button>
        </div>
    );
}


