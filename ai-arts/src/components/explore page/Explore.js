import React from 'react';

import styles from './Explore.module.css';

import { GoSettings } from 'react-icons/go';

const Explore = () => {

    return (
        <section className={styles.explore_page}>
            <form action="/">
                <button className={styles.filter_btn} type='button'><GoSettings className={styles.filter_icon} /> Refine search</button>
                <input type="text" placeholder='search' />
                <button className={styles.search_btn} type='submit'>Search</button>
            </form>

            <div className={styles.explore_imgs}>
                <div className={styles.img_section}>
                    <img src={require("../../assets/4a6f32ea-f204-45c8-9351-2406eba21237.jpg")} alt='img' />
                    <div className={styles.text_on_img}>
                        <h2>Landscape</h2>
                        <p>Sky |Lake |Sunset</p>
                    </div>
                </div>
                <div className={styles.img_section}>
                    <img src={require("../../assets/dc6f293a-9e50-41ca-83ee-6c80e3e343ba.png")} alt='img' />
                    <div className={styles.text_on_img}>
                        <h2>Landscape</h2>
                        <p>Sky |Lake |Sunset</p>
                    </div>
                </div>
                <div className={styles.img_section}>
                    <img src={require("../../assets/d10653a0-28d3-4a9b-8053-a74d1d1cfe49.png")} alt='img' />
                    <div className={styles.text_on_img}>
                        <h2>Landscape</h2>
                        <p>Sky |Lake |Sunset</p>
                    </div>
                </div>
                <div className={styles.img_section}>
                    <img src={require("../../assets/2aa23512-e277-45ca-8a53-e5fe920e1137.png")} alt='img' />
                    <div className={styles.text_on_img}>
                        <h2>Landscape</h2>
                        <p>Sky |Lake |Sunset</p>
                    </div>
                </div>
                <div className={styles.img_section}>
                    <img src={require("../../assets/4a6f32ea-f204-45c8-9351-2406eba21237.jpg")} alt='img' />
                    <div className={styles.text_on_img}>
                        <h2>Landscape</h2>
                        <p>Sky |Lake |Sunset</p>
                    </div>
                </div>
                <div className={styles.img_section}>
                    <img src={require("../../assets/dc6f293a-9e50-41ca-83ee-6c80e3e343ba.png")} alt='img' />
                    <div className={styles.text_on_img}>
                        <h2>Landscape</h2>
                        <p>Sky |Lake |Sunset</p>
                    </div>
                </div>
                <div className={styles.img_section}>
                    <img src={require("../../assets/d10653a0-28d3-4a9b-8053-a74d1d1cfe49.png")} alt='img' />
                    <div className={styles.text_on_img}>
                        <h2>Landscape</h2>
                        <p>Sky |Lake |Sunset</p>
                    </div>
                </div>
                <div className={styles.img_section}>
                    <img src={require("../../assets/2aa23512-e277-45ca-8a53-e5fe920e1137.png")} alt='img' />
                    <div className={styles.text_on_img}>
                        <h2>Landscape</h2>
                        <p>Sky |Lake |Sunset</p>
                    </div>
                </div>
                <div className={styles.img_section}>
                    <img src={require("../../assets/4a6f32ea-f204-45c8-9351-2406eba21237.jpg")} alt='img' />
                    <div className={styles.text_on_img}>
                        <h2>Landscape</h2>
                        <p>Sky |Lake |Sunset</p>
                    </div>
                </div>
                <div className={styles.img_section}>
                    <img src={require("../../assets/dc6f293a-9e50-41ca-83ee-6c80e3e343ba.png")} alt='img' />
                    <div className={styles.text_on_img}>
                        <h2>Landscape</h2>
                        <p>Sky |Lake |Sunset</p>
                    </div>
                </div>
                <div className={styles.img_section}>
                    <img src={require("../../assets/d10653a0-28d3-4a9b-8053-a74d1d1cfe49.png")} alt='img' />
                    <div className={styles.text_on_img}>
                        <h2>Landscape</h2>
                        <p>Sky |Lake |Sunset</p>
                    </div>
                </div>
                <div className={styles.img_section}>
                    <img src={require("../../assets/2aa23512-e277-45ca-8a53-e5fe920e1137.png")} alt='img' />
                    <div className={styles.text_on_img}>
                        <h2>Landscape</h2>
                        <p>Sky |Lake |Sunset</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Explore
