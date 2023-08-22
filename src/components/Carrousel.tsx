import {useState} from 'react'
import xbox from '../assets/img/xbox.png'

export default function Carrousel (props: any){
    const images = ['nintendo.png','playstation.jpg','xbox.png']
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(images[0]);

    const selectNewImage = (index: number, images: string[], next = true) => {
        const condition = next ? selectedIndex < images.length : selectedIndex > 0; 
        const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.length - 1 
        setSelectedImage(images[nextIndex])
        setSelectedIndex(nextIndex)
    }

    const previous = () => {
        selectNewImage(selectedIndex, images, false)
    }

    const next = () => {
        selectNewImage(selectedIndex, images, false)
    }

    return(
        <>
            <img src={xbox} alt="console"/>
        </>
    )
}


