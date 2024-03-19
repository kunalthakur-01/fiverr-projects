import React from 'react';

import styles from './License.module.css';

const License = () => {
    return (
        <section className={styles.license_section}>
            <h1>License</h1>
            <hr className={styles.line} />
            <p>Images from AiArts are designed to be utilized quickly. Our license reflects that.</p>
            <div className={styles.conditions}>
                <div>
                    <h2>What is acceptable ✅ </h2>
                    <ul>
                        <li>Large photographs can only be downloaded with a paid membership</li>
                        <li>Small photos can be downloaded and used without charge.</li>
                        <li>both for-profit and nonprofit endeavors.</li>
                        <li>Free of any royalties.</li>
                        <li>There is no requirement for permission (but attribution is appreciated!).</li>
                    </ul>
                </div>
                <div>
                    <h2>What is not allowed ❌</h2>
                    <ul>
                        <li>Photos cannot be sold without major alterations.</li>
                        <li>Don't resell the images or animations, videos as-is on other stock photos or sites.</li>
                        <li>Assembling images from AiArts to imitate a comparable or rival service.</li>
                    </ul>
                </div>
                <div>
                    <h2>Longform </h2>
                    <p>
                        You have permission to download, copy, change, distribute, perform, and use AiArts images for free, including for commercial endeavors, without seeking the photographer's consent or giving credit to AiArts or photographer. This permission is irrevocable. This license does not permit you to create a collection of images from AiArts to run an identical or rival service.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default License;
