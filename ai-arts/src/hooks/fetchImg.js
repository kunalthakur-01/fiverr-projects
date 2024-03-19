import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";
import { useCallback } from "react";

import { useState } from "react";


const storage = getStorage();

const useFetchImg = () => {
    const [allImg, setAllImg] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImgDownloadUrl = useCallback((img, name) => {
        getDownloadURL(ref(storage, img))
            .then((url) => {
                // console.log(i);
                // console.log(name);
                // console.log(url);
                // setAllImg(allImg.push({ imgName: name, imgUrl: url }));
                setIsLoading(false);
                setAllImg(prevState => {
                    return [...prevState, { imgName: name, imgUrl: url } ];
                });

                // fetchData({imgName: name, imgUrl: url});
            })
            .catch((error) => {
                console.error(error.message);
                setIsLoading(false);
            });
    }, []);


    const getALLImg = useCallback((dir = 'Food&Drink') => {
        const listRef = ref(storage, dir);

        listAll(listRef)
            .then((res) => {
                setAllImg([]);
                setIsLoading(true);
                res.items.forEach((itemRef, i) => {
                    let imgName = itemRef.name.split('.')[0];
                    getImgDownloadUrl(itemRef, imgName);
                });
            }).catch((error) => {
                console.error(error.message);
            });
    }, [ getImgDownloadUrl ]);

    return [
        allImg,
        getALLImg,
        isLoading
    ]
};

export default useFetchImg;