import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Pricing.module.css';
import tickImg from '../../assets/playgrounds/vector5322-iw.svg';

import { AiFillStar } from 'react-icons/ai';

const Pricing = () => {
    return (
        <section className={styles.pricing_section}>
            <h1>Discover the ideal picture, Everything</h1>
            <p>Get premium images for your website, blog, and other uses.<br />
                There are no contracts, hidden costs, or commitments.
            </p>

            <div className={styles.subscription_plans}>
                <div className={styles.plan}>
                    <img src='https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/e3ba62aa-42c0-4bec-9859-a1fa7f4ff6ae/10ee99fc-c5cb-4b5d-8be5-7d4a01b8084d?org_if_sml=117902' alt="pic" />
                    <div>
                        <h2>Lite</h2>
                        <p>Best Choice for Individuals</p>
                    </div>
                    <h3>$<sub>9</sub> </h3>

                    <ul>
                        <li>20.000+ premium, royalty free stock photos</li>
                        <li>Download large resolution photos</li>
                    </ul>

                    <Link to={'/credit-checkout/9'} className={styles.getPlan_btn}>Get unlimited access</Link>
                </div>
                <div className={styles.plan}>
                    <img src='https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/e3ba62aa-42c0-4bec-9859-a1fa7f4ff6ae/09883d9c-9409-4444-bddd-c8c29f939b06?org_if_sml=120521' alt="pic" />
                    <div>
                        <h2>Business</h2>
                        <p>Small Businesses</p>
                    </div>
                    <h3>$<sub>29</sub> </h3>

                    <ul>
                        <li>20.000+ premium, royalty free stock photos</li>
                        <li>Download large resolution photos</li>
                        <li>Access to all tools and features.</li>
                        <li>Unlimited photo and visualgenerations</li>
                        <li>Remove watermarks, unlimted stroage, and more.</li>
                    </ul>

                    <Link to={'/credit-checkout/29'} className={styles.getPlan_btn}>Get unlimited access</Link>

                    <div className={styles.most_popular}>
                        <span><AiFillStar className={styles.star_icon} /> Most Popular</span>
                    </div>
                </div>
                <div className={styles.plan}>
                    <img src='https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/e3ba62aa-42c0-4bec-9859-a1fa7f4ff6ae/30912f72-0c30-468e-a506-6b5f0f28e3ff?org_if_sml=128462' alt="pic" />
                    <h2>One-time payment</h2>
                    <p>Agencies and Developers</p>

                    <div className={styles.credits_price}>
                        <h3>$<sub>10</sub> </h3>
                        <span className={styles.credits}>
                            <img src={tickImg} alt="" />
                            <p>5 credits</p>
                        </span>
                    </div>


                    <div className={styles.credit_link}>
                        <Link to={'/credit-checkout/10'}>Purchase 5 credits for $10</Link>
                    </div>

                    <div className={styles.credits_price}>
                        <h3>$<sub>50</sub> </h3>
                        <span className={styles.credits}>
                            <img src={tickImg} alt="" />
                            <p>25 credits</p>
                        </span>
                    </div>

                    <div className={styles.credit_link}>
                        <Link to={'/credit-checkout/50'}>Purchase 25 credits for $50</Link>
                    </div>

                    <ul>
                        <li>One credit is one download. Credits never expire.</li>
                    </ul>
                </div>
                <div className={styles.plan}>
                    <img src='https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/e3ba62aa-42c0-4bec-9859-a1fa7f4ff6ae/b6a9a8b8-b6cb-46bc-adcb-b1667dffa53f?org_if_sml=121239' alt="pic" />
                    <div>
                        <h2>Agency</h2>
                        <p>Design a custom package</p>
                    </div>
                    <h3>$<sub>599</sub> </h3>

                    <ul>
                        <li>Complete ownership of
                            produced images</li>
                        <li>Private by default image
                            generation</li>
                        <li>Single-user unlimited plan for
                            any size</li>
                        <li>Generate as much as
                            you like (fair usage)</li>
                        <li>Access to Artlab for banner
                            creation</li>
                    </ul>

                    <Link to={'/credit-checkout/599'} className={styles.getPlan_btn}>Own your visuals</Link>
                </div>
            </div>

            <div className={styles.footer}>
                <p>Got a question? Chat with us and we’ll help you out!</p>
                <button>Open livechat</button>
            </div>

            <h4>Frequently Asked Questions</h4>
            <h5>Make sure to read these questions and answers before you make your purchase.</h5>

            <div className={styles.ques_ans_section}>
                <div className={styles.column}>
                    <div>
                        <h2>Can i cancel my plan if I don’t need it anymore?</h2>
                        <p>Yes, you can cancel your plan at any time. Your subscription will end at the end of your billing month.</p>
                    </div>
                    <div>
                        <h2>After my subscription ends, can I still use the photos?</h2>
                        <p>Yes, when you purchase or download an image you are granted a license to use it
                            for as long as you need.</p>
                    </div>
                    <div>
                        <h2>Can I get invoice?</h2>
                        <p>To get an invoice for your purchase, head to the invoice page after purchase, add
                            your details and save to PDF.</p>
                    </div>
                    <div>
                        <h2>What does fair usage mean?</h2>
                        <p>You can generate as many images as you want, but if you go overboard we may
                            need to tell you to slow down.</p>
                    </div>
                    <div>
                        <h2>What does private mode mean?</h2>
                        <p>Private mode on this website means that only you can see the photos that you
                            generate.</p>
                    </div>
                </div>
                <div className={styles.column}>
                    <div>
                        <h2>Can i refund after I cancel my plan?</h2>
                        <p>We are happy to refund your purchase if it is made within the first 14 days and you
                            have not used any downloads or credits. After 14 days or once a plan is used, we
                            are unable to process a refund. Please refer to our Terms of Service for more
                            information.</p>
                    </div>
                    <div>
                        <h2>Is payment secure?</h2>
                        <p>YWe use Stripe for payment and do not store any of your credit card information.</p>
                    </div>
                    <div>
                        <h2>Can I use photos for commercial projects?</h2>
                        <p>YYes, you can use the content for commercial projects. We do not charge any fees for
                            commercial use. Please read our licensing agreement for more information on what is
                            allowed and what is not.</p>
                    </div>
                    <div>
                        <h2>What does full ownership mean?</h2>
                        <p>You own the photos you generate. You can use them for commercial or personal
                            projects, modify them, sell them on other websites, etc. There are no restrictions
                            on what you can do with your photos.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing
