import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';

import useFetchImg from '../../hooks/fetchImg';

import styles from './Categories.module.css';

const Categories = () => {

    const [allImg, getALLImg, isLoading] = useFetchImg();
    // const [bgImg, setBgImg] = useState();
    // console.log(allImg);

    const params = useParams();


    useEffect(() => {
        getALLImg(params.categories);
    }, [params.categories, getALLImg]);


    const col1_images = [];
    const col2_images = [];
    const col3_images = [];
    let bgImg;

    allImg.forEach((img, i) => {
        const length = allImg.length - 1;
        const colWiseLength = Math.floor((length / 3)) + 1;
        if (img.imgName === (params.categories + '_bg')) {
            bgImg = img.imgUrl;
        }
        else if (i <= colWiseLength) {
            col1_images.push(img);
        }

        else if (i > colWiseLength && i <= colWiseLength * 2) {
            col2_images.push(img);
        }

        else if (i > colWiseLength * 2 && i <= colWiseLength * 3) {
            col3_images.push(img);
        }
    });

    const categoryWiseData = {
        'Abstract': {
            title: 'Abstract',
            about: "Welcome to the world of abstract images! Here you'll find a collection of photos that defy explanation. They may look like random blobs of color, but each one is a masterpiece."
        },
        'Aerial Photography': {
            title: 'Aerial Photography',
            about: "Aerial photography images are absolutely amazing. They provide a new perspective and can really make you think about the world around you. Take a look at these incredible aerial photography images and be prepared to be wowed!"
        },
        'Animals&Wildlife': {
            title: 'Animals & Wildlife',
            about: "Welcome to the world of Animals & Wildlife images! Here you will find all sorts of images of animals and wildlife in their natural habitats. From the majestic grizzly bear to the tiny hummingbird, there is something here for everyone."
        },
        'Architectural Concepts': {
            title: "Architectural Concepts",
            about: "There's more to architecture than just buildings and bridges! In this category, you'll find all sorts of images related to architectural concepts, from the absurd to the just plain funny. So take a break from those stuffy old buildings!"
        },
        'Automotive': {
            title: "Automotive",
            about: "This is the category for all things automotive. From cars and trucks to motorcycles and RVs, if it has an engine it belongs here!"
        },
        'Fantasy&Sci-Fi': {
            title: "Fantasy & Sci-Fi",
            about: "Ladies and gentlemen, prepare to be transported to another world! A world of dragons, wizards, and space ships. A world of adventure, mystery, and imagination. Welcome to the world of Fantasy & Sci-Fi images."
        },
        'Food&Drink': {
            title: "Food & Drink",
            about: "Do not read this article while you are hungry! Welcome to the realm of food photography, where you may see images of hot meals, cold drinks, and more."
        },
        'Holidays': {
            title: "Holidays",
            about: "This category is for images of holidays. Whether you're celebrating Christmas, Hanukkah, el Día de los Muertos, Vaisakhi, New Year's, or another holiday, we want you to see our festive photos!"
        },
        'Landscape': {
            title: "Landscape",
            about: "Get your cameras ready for some breathtaking landscape images! From mountain ranges to sandy beaches, there is no shortage of natural beauty to capture. Whether you're a seasoned photographer or just beginning your journey, these images will inspire you to get out and explore the world around you."
        },
        'Mecha': {
            title: "Mecha",
            about: "There's something about mecha style images that just makes my heart go pitter patter. Maybe it's the way they look like they could come to life and stomp all over everything, or maybe it's just the general badassery of them. Whatever the reason, I just can't get enough of these huge, hulking machines."
        },
        'Pixel&Voxel': {
            title: "Pixel & Voxel",
            about: "Welcome to the exciting world of Pixel & Voxel images! Here you'll find a wide variety of images to suit your every need, from the mundane to the extraordinary. Whether you're looking for a simple image to spruce up your website or an intricate 3D rendering to impress your clients, we've got you covered. So browse through our selection and find the perfect image for your project!"
        },
        'Portraits': {
            title: "Portraits",
            about: "A portrait is a painting, photograph, sculpture, or other artistic representation of a person, in which the face and its expression is predominant. The intent is to display the likeness, personality, and even the mood of the person."
        },
        'Realism': {
            title: "Realism",
            about: "Realism images are all about capturing the world as it is, without any embellishments or artifice. Whether it's a photo of a person, a place, or a thing, Realism images present a straightforward view of the subject."
        },
        'Space': {
            title: "Space",
            about: "There's something about space that just captivates us. The vastness of it, the mystery of it. And the fact that there's just so darn much of it out there. We've collected some of the best space images for your viewing pleasure. From the stars to the planets to the galaxies beyond, these images will take your breath away."
        },
        'Sports': {
            title: "Sports",
            about: "Welcome to the world of sports photography! Here you'll find images of athletes in action, caught in the heat of the moment. Whether it's the thrill of victory or the agony of defeat, these photos capture the essence of sports. Soak in the excitement and get ready to be inspired!"
        },
        'Storybook Realism': {
            title: "Storybook Realism",
            about: "In a world of storybook realism, the characters are as real as you and me. But they live in a world of make- believe, where everything is possible.These Characters are some of the most beloved characters in the world. They are known for their kindness, their courage, and their sense of humor.<br /> And now, you can see them like never before. In a world of storybook realism, they come to life before your very eyes."
        },
    };


    if (isLoading) {
        return (
            <div className={styles.loading_state}>
                <h1>LOADING...</h1>
            </div>
        );
    }

    return (
        <section className={styles.categories_section}>
            <div className={styles.header} style={{ backgroundImage: `url(${bgImg})` }}>
                <div className={styles.header_text}>
                    <h1>{categoryWiseData[params.categories].title}</h1>
                    <h2>{categoryWiseData[params.categories].about}</h2>
                    <p>Read more about the &nbsp;&nbsp;&nbsp;&nbsp; <Link to={'/license'}>Ai-Arts License </Link></p>
                </div>
            </div>

            <div className={styles.all_img}>
                <div className={styles.col_img}>
                    {col1_images.map(img => (
                        <div key={img.imgName} className={styles.img}>
                            <img src={img.imgUrl} alt={img.imgName} />
                            <Link className={styles.save_icon} to={'/login'}>
                                <svg width="50" height="50" viewBox="0 0 69 69" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" className="bookmark-logo">
                                    <rect width="69" height="69" rx="10" fill="black" fillOpacity="0.5" />
                                    {/* <g clipPath="url(#clip0_710_2256)"> */}
                                    <path
                                        d="M43.125 19H25.875C24.2872 19 23 20.3012 23 21.9063V48.0564C23 49.552 24.6046 50.4832 25.8822 49.73L34.5 44.6477L43.119 49.7294C44.3948 50.4299 46 49.552 46 48.0564V21.9063C46 20.3012 44.7122 19 43.125 19ZM43.125 46.3672L34.5 41.2813L25.875 46.3672V22.2695C25.875 22.0655 26.0325 21.9063 26.1805 21.9063H42.7117C42.9693 21.9063 43.125 22.0655 43.125 22.2695V46.3672Z"
                                        fill="white" />
                                    {/* </g> */}
                                    <defs>
                                        <clipPath id="clip0_710_2256">
                                            <rect width="23" height="31" fill="white" transform="translate(23 19)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </Link>
                            <Link className={styles.download_icon} to='/login'>
                                <svg width="50" height="50" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg"
                                    className="download-logo">
                                    <rect width="69" height="69" rx="10" fill="black" fillOpacity="0.5" />
                                    {/* <g clipPath="url(#clip0_499_4591)"> */}
                                    <path
                                        d="M35.875 20.875C35.875 19.8379 35.0371 19 34 19C32.9629 19 32.125 19.8379 32.125 20.875V35.0957L27.8242 30.7949C27.0918 30.0625 25.9023 30.0625 25.1699 30.7949C24.4375 31.5273 24.4375 32.7168 25.1699 33.4492L32.6699 40.9492C33.4023 41.6816 34.5918 41.6816 35.3242 40.9492L42.8242 33.4492C43.5566 32.7168 43.5566 31.5273 42.8242 30.7949C42.0918 30.0625 40.9023 30.0625 40.1699 30.7949L35.875 35.0957V20.875ZM22.75 39.625C20.6816 39.625 19 41.3066 19 43.375V45.25C19 47.3184 20.6816 49 22.75 49H45.25C47.3184 49 49 47.3184 49 45.25V43.375C49 41.3066 47.3184 39.625 45.25 39.625H39.3027L36.6484 42.2793C35.1836 43.7441 32.8105 43.7441 31.3457 42.2793L28.6973 39.625H22.75ZM44.3125 45.7188C43.5332 45.7188 42.9062 45.0918 42.9062 44.3125C42.9062 43.5332 43.5332 42.9062 44.3125 42.9062C45.0918 42.9062 45.7188 43.5332 45.7188 44.3125C45.7188 45.0918 45.0918 45.7188 44.3125 45.7188Z"
                                        fill="white" />
                                    {/* </g> */}
                                    <defs>
                                        <clipPath id="clip0_499_4591">
                                            <rect width="30" height="30" fill="white" transform="translate(19 19)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </Link>
                        </div>
                    ))}

                </div>

                <div className={styles.col_img}>
                    {col2_images.map(img => (
                        <div key={img.imgName} className={styles.img}>
                            <img src={img.imgUrl} alt={img.imgName} />
                            <Link className={styles.save_icon} to={'/login'}>
                                <svg width="50" height="50" viewBox="0 0 69 69" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" className="bookmark-logo">
                                    <rect width="69" height="69" rx="10" fill="black" fillOpacity="0.5" />
                                    {/* <g clipPath="url(#clip0_710_2256)"> */}
                                    <path
                                        d="M43.125 19H25.875C24.2872 19 23 20.3012 23 21.9063V48.0564C23 49.552 24.6046 50.4832 25.8822 49.73L34.5 44.6477L43.119 49.7294C44.3948 50.4299 46 49.552 46 48.0564V21.9063C46 20.3012 44.7122 19 43.125 19ZM43.125 46.3672L34.5 41.2813L25.875 46.3672V22.2695C25.875 22.0655 26.0325 21.9063 26.1805 21.9063H42.7117C42.9693 21.9063 43.125 22.0655 43.125 22.2695V46.3672Z"
                                        fill="white" />
                                    {/* </g> */}
                                    <defs>
                                        <clipPath id="clip0_710_2256">
                                            <rect width="23" height="31" fill="white" transform="translate(23 19)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </Link>
                            <Link className={styles.download_icon} to='/login'>
                                <svg width="50" height="50" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg"
                                    className="download-logo">
                                    <rect width="69" height="69" rx="10" fill="black" fillOpacity="0.5" />
                                    {/* <g clipPath="url(#clip0_499_4591)"> */}
                                    <path
                                        d="M35.875 20.875C35.875 19.8379 35.0371 19 34 19C32.9629 19 32.125 19.8379 32.125 20.875V35.0957L27.8242 30.7949C27.0918 30.0625 25.9023 30.0625 25.1699 30.7949C24.4375 31.5273 24.4375 32.7168 25.1699 33.4492L32.6699 40.9492C33.4023 41.6816 34.5918 41.6816 35.3242 40.9492L42.8242 33.4492C43.5566 32.7168 43.5566 31.5273 42.8242 30.7949C42.0918 30.0625 40.9023 30.0625 40.1699 30.7949L35.875 35.0957V20.875ZM22.75 39.625C20.6816 39.625 19 41.3066 19 43.375V45.25C19 47.3184 20.6816 49 22.75 49H45.25C47.3184 49 49 47.3184 49 45.25V43.375C49 41.3066 47.3184 39.625 45.25 39.625H39.3027L36.6484 42.2793C35.1836 43.7441 32.8105 43.7441 31.3457 42.2793L28.6973 39.625H22.75ZM44.3125 45.7188C43.5332 45.7188 42.9062 45.0918 42.9062 44.3125C42.9062 43.5332 43.5332 42.9062 44.3125 42.9062C45.0918 42.9062 45.7188 43.5332 45.7188 44.3125C45.7188 45.0918 45.0918 45.7188 44.3125 45.7188Z"
                                        fill="white" />
                                    {/* </g> */}
                                    <defs>
                                        <clipPath id="clip0_499_4591">
                                            <rect width="30" height="30" fill="white" transform="translate(19 19)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className={styles.col_img}>
                    {col3_images.map(img => (
                        <div key={img.imgName} className={styles.img}>
                            <img src={img.imgUrl} alt={img.imgName} />
                            <Link className={styles.save_icon} to={'/login'}>
                                <svg width="50" height="50" viewBox="0 0 69 69" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" className="bookmark-logo">
                                    <rect width="69" height="69" rx="10" fill="black" fillOpacity="0.5" />
                                    {/* <g clipPath="url(#clip0_710_2256)"> */}
                                    <path
                                        d="M43.125 19H25.875C24.2872 19 23 20.3012 23 21.9063V48.0564C23 49.552 24.6046 50.4832 25.8822 49.73L34.5 44.6477L43.119 49.7294C44.3948 50.4299 46 49.552 46 48.0564V21.9063C46 20.3012 44.7122 19 43.125 19ZM43.125 46.3672L34.5 41.2813L25.875 46.3672V22.2695C25.875 22.0655 26.0325 21.9063 26.1805 21.9063H42.7117C42.9693 21.9063 43.125 22.0655 43.125 22.2695V46.3672Z"
                                        fill="white" />
                                    {/* </g> */}
                                    <defs>
                                        <clipPath id="clip0_710_2256">
                                            <rect width="23" height="31" fill="white" transform="translate(23 19)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </Link>
                            <Link className={styles.download_icon} to='/login'>
                                <svg width="50" height="50" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg"
                                    className="download-logo">
                                    <rect width="69" height="69" rx="10" fill="black" fillOpacity="0.5" />
                                    {/* <g clipPath="url(#clip0_499_4591)"> */}
                                    <path
                                        d="M35.875 20.875C35.875 19.8379 35.0371 19 34 19C32.9629 19 32.125 19.8379 32.125 20.875V35.0957L27.8242 30.7949C27.0918 30.0625 25.9023 30.0625 25.1699 30.7949C24.4375 31.5273 24.4375 32.7168 25.1699 33.4492L32.6699 40.9492C33.4023 41.6816 34.5918 41.6816 35.3242 40.9492L42.8242 33.4492C43.5566 32.7168 43.5566 31.5273 42.8242 30.7949C42.0918 30.0625 40.9023 30.0625 40.1699 30.7949L35.875 35.0957V20.875ZM22.75 39.625C20.6816 39.625 19 41.3066 19 43.375V45.25C19 47.3184 20.6816 49 22.75 49H45.25C47.3184 49 49 47.3184 49 45.25V43.375C49 41.3066 47.3184 39.625 45.25 39.625H39.3027L36.6484 42.2793C35.1836 43.7441 32.8105 43.7441 31.3457 42.2793L28.6973 39.625H22.75ZM44.3125 45.7188C43.5332 45.7188 42.9062 45.0918 42.9062 44.3125C42.9062 43.5332 43.5332 42.9062 44.3125 42.9062C45.0918 42.9062 45.7188 43.5332 45.7188 44.3125C45.7188 45.0918 45.0918 45.7188 44.3125 45.7188Z"
                                        fill="white" />
                                    {/* </g> */}
                                    <defs>
                                        <clipPath id="clip0_499_4591">
                                            <rect width="30" height="30" fill="white" transform="translate(19 19)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </Link>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Categories
