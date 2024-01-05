import { useState, useEffect } from "react";

const prepareArray = (arr: string[], size: number) => {
    const amount = size * size / 2;
    const newArray = arr.sort(() => 0.5 - Math.random()).slice(0, amount);
    return [...newArray, ...newArray].sort(() => 0.5 - Math.random());
}


const useImages = (size: number) => {
    const [allImages, setAllImages] = useState<Array<string>>([]);
    const [suffledImages, setSuffledImages] = useState<Array<string>>([]);

    useEffect(() => {
        const imgs = importAll((require as any).context('../assets/memoryGame', false, /\.(png|jpe?g|svg)$/));
        setAllImages(imgs)
    }, [])

    useEffect(() => {
        if(size) {
            const suffledArray = prepareArray(allImages, size);
            setSuffledImages(suffledArray);
        }
    }, [allImages, size])

    const importAll = (r: any) => {
        const images: string[] = [];
        r.keys().forEach((item: string, index: number) => { images[index] = r(item); });
        return images
    }

    return { suffledImages };
}

export default useImages;