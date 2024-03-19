import React from 'react';

import styles from './HomePage.module.css';

import { FiSearch } from 'react-icons/fi';
import { BiQrScan } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import useFetchImg from '../../hooks/fetchImg';
import { useEffect } from 'react';

const HomePage = () => {

    const [allImg, getALLImg, isLoading] = useFetchImg();
    // console.log(allImg);

    useEffect(() => {
        getALLImg('random-images');
        getALLImg();
        getALLImg('Abstract');
    }, [getALLImg]);

    const col1_images = [];
    const col2_images = [];
    const col3_images = [];

    allImg.forEach((img, i) => {
        const length = allImg.length;
        const colWiseLength = Math.floor((length / 3));
        if (i <= colWiseLength && !img.imgName.includes('_bg')) {
            col1_images.push(img);
        }

        else if (i > colWiseLength && i <= colWiseLength * 2 && !img.imgName.includes('_bg')) {
            col2_images.push(img);
        }

        else if (i > colWiseLength * 2 && i <= colWiseLength * 3 && !img.imgName.includes('_bg')) {
            col3_images.push(img);
        }
    })
    return (
        <>
            <section className={styles.main_section}>
                <div className={styles.cover_img}>
                    <div className={styles.text_onImg}>
                        <div className={styles.hero_title}>
                            <span>AI</span>
                            <div className={styles.boxes}>
                                <div className={styles.box}></div>
                                <div className={styles.box}></div>
                                <div className={styles.box}></div>
                                <div className={styles.box}></div>
                                <div className={styles.box}></div>
                            </div>
                            <span>ARTS</span>
                        </div>
                        <h2>The future of Stock Photography. <br /> For every freelancer, creative and individual.</h2>
                        <form action="/">
                            <div className={styles.search_btn}>
                                <FiSearch />
                            </div>
                            <input type="text" name="" id="" placeholder='Search free high-resolution photos' />
                            <div className={styles.scanner}>
                                <BiQrScan />
                            </div>
                        </form>
                        <p>Trending:&nbsp; <Link to={'/category/Abstract'}>Abstract</Link>, &nbsp; <Link to={'/category/Sports'}> Sports </Link>,&nbsp;<Link to={'/category/Space'}> Space </Link>,&nbsp;<Link to={'/category/Holidays'}> Holidays </Link>, <Link to={'/category/Animals&Wildlife'}>Animals & Wildlife</Link></p>
                        <p className={styles.read_more}>Read more about the <Link to={'./license'}>Ai-Arts License</Link></p>
                    </div>
                </div>

                <div className={styles.discription}>
                    <div className={styles.col}>
                        <h4>With over a thousand high-quality stock photos</h4>
                        <p>You're sure to find the perfect image for your next project.</p>
                    </div>
                    <div className={styles.col}>
                        <h4>You can create any picture you want</h4>
                        <p>You don't have to search anymore. Our AI can create any photo you want.</p>
                    </div>
                    <div className={styles.col}>
                        <h4>Original images, every time.</h4>
                        <p>Our AI only creates original images, never any duplicates.</p>
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
                {isLoading && <div className={styles.loading_state}>
                    <h1>LOADING...</h1>
                </div>}
            </section>
        </>
    )
}

export default HomePage
