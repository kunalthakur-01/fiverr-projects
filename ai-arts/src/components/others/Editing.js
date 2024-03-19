import React from 'react';
import { Link } from 'react-router-dom';

import './Editing.css';

const Editing = () => {
    return (
        <div>
            <div className="create-container">
                <div className="create-create-landing">
                    <div className="create-advanced">
                        <div className="create-frame"></div>
                        <svg className='create-vector' width='10' height='9' viewBox='0 0 10 9' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M2.87337 8.77421C2.95432 8.85515 3.06414 8.90062 3.17861 8.90062C3.29312 8.90062 3.4029 8.85513 3.48382 8.77421L9.36863 2.8894C9.4496 2.80845 9.49507 2.69867 9.49507 2.58419C9.49507 2.46969 9.4496 2.3599 9.36863 2.27895L8.14771 1.05806C7.97916 0.889515 7.70583 0.889486 7.53726 1.05806L3.17873 5.41665L1.95778 4.1957C1.87683 4.11475 1.76701 4.06926 1.65254 4.06926C1.53806 4.06926 1.42828 4.11475 1.34733 4.1957L0.12641 5.41662C-0.0421367 5.5852 -0.0421367 5.85849 0.12641 6.02707L2.87337 8.77421Z' fill='white' />
                        </svg>
                        <span className="create-text"><span>Advanced</span></span>
                    </div>

                    <div className="create-search-bar">
                        <svg className='create-vector1' width='30' height='31' viewBox='0 0 30 31' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M24.375 12.1875C24.375 14.877 23.502 17.3613 22.0312 19.377L29.4492 26.8008C30.1816 27.5332 30.1816 28.7227 29.4492 29.4551C28.7168 30.1875 27.5273 30.1875 26.7949 29.4551L19.377 22.0312C17.3613 23.5078 14.877 24.375 12.1875 24.375C5.45508 24.375 0 18.9199 0 12.1875C0 5.45508 5.45508 0 12.1875 0C18.9199 0 24.375 5.45508 24.375 12.1875ZM12.1875 20.625C16.8457 20.625 20.625 16.8457 20.625 12.1875C20.625 7.5293 16.8457 3.75 12.1875 3.75C7.5293 3.75 3.75 7.5293 3.75 12.1875C3.75 16.8457 7.5293 20.625 12.1875 20.625Z' fill='white' />
                        </svg>
                        <span className="create-text02">
                            <input className="create-searchbar" placeholder="A corgi wearing a top hat as an oil painting" />
                        </span>
                    </div>
                    <div className="create-left">
                        <svg className='create-line1' width='265' height='1' viewBox='0 0 265 1' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <line x1='-1' y1='0.5' x2='270' y2='0.5' stroke='#9A9A9A' />
                        </svg>
                        <svg className='create-line2' width='265' height='1' viewBox='0 0 265 1' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <line x1='-1' y1='0.5' x2='270' y2='0.5' stroke='#9A9A9A' />
                        </svg>

                        <svg className='create-line3' width='265' height='1' viewBox='0 0 265 1' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <line x1='-1' y1='0.5' x2='270' y2='0.5' stroke='#9A9A9A' />
                        </svg>
                        <svg className='create-line4' width='265' height='1' viewBox='0 0 265 1' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <line x1='-1' y1='0.5' x2='270' y2='0.5' stroke='#9A9A9A' />
                        </svg>

                        <svg className='create-line5' width='265' height='1' viewBox='0 0 265 1' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <line y1='0.5' x2='271' y2='0.5' stroke='#9A9A9A' />
                        </svg>


                        <div className="create-slider">
                            <span className="create-text04"><span>Width</span></span>
                            <div className="create-text06" id="SelectValue1">512</div>
                            <div className="slider1">
                                <input type="range" id="slider1" className="slider" />
                            </div>
                        </div>
                        <div className="create-bar1"></div>
                        <div className="create-slider1">
                            <span className="create-text08"><span>Height</span></span>
                            <div className="create-text06" id="SelectValue2">512</div>
                            <div className="slider2">
                                <input type="range" id="slider2" className="slider" />
                            </div>
                        </div>
                        <div className="create-bar2"></div>
                        <div className="create-slider2">
                            <span className="create-text12">
                                <span>Number of images to generate</span>
                            </span>
                            <span className="create-text14"></span>
                            <div className="create-text06" id="SelectValue3">1</div>
                            <div className="slider3">
                                <input type="range" id="slider3" className="slider" />
                            </div>
                        </div>
                        <div className="create-bar5"></div>
                        <div className="create-bar6"></div>
                        <div className="create-bar7"></div>
                        <div className="create-slider3">
                            <span className="create-text15" id="SelectValue4"><span>7.5</span></span>
                            <div className="create-text06"></div>
                            <div className="slider4">
                                <input type="range" id="slider4" className="slider" />
                            </div>
                        </div>
                        <div className="create-bar3"></div>
                        <span className="create-text17"><span>Temperature</span></span>
                        <span className="create-text19">
                            <span>Seed (leave blank to randomize)</span>
                        </span>
                        <div className="create-left-blank">
                            <input type="text" className="create-type-blank" />
                        </div>
                        <div className="create-bar4"></div>
                        <div></div>
                        <div>
                            <svg className='create-frame1' width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <g clipPath='url(#clip0_197_780)'>
                                    <path d='M4.5 2.25C4.5 1.00898 5.50898 0 6.75 0H12.375V4.5C12.375 5.12227 12.8777 5.625 13.5 5.625H18V15.75C18 16.991 16.991 18 15.75 18H6.75C5.50898 18 4.5 16.991 4.5 15.75V11.8125H10.6207L9.24961 13.1836C8.91914 13.5141 8.91914 14.0484 9.24961 14.3754C9.58008 14.7023 10.1145 14.7059 10.4414 14.3754L13.2539 11.5629C13.5844 11.2324 13.5844 10.698 13.2539 10.3711L10.4414 7.55859C10.1109 7.22813 9.57656 7.22813 9.24961 7.55859C8.92266 7.88906 8.91914 8.42344 9.24961 8.75039L10.6207 10.1215H4.5V2.25ZM4.5 10.125V11.8125H0.84375C0.376172 11.8125 0 11.4363 0 10.9688C0 10.5012 0.376172 10.125 0.84375 10.125H4.5ZM18 4.5H13.5V0L18 4.5Z' fill='white' />
                                </g>
                                <defs>
                                    <clipPath id='clip0_197_780'>
                                        <rect width='18' height='18' fill='white' />
                                    </clipPath>
                                </defs>
                            </svg>
                            <div className="file-uploader">
                                <input type="file" id="img_upload" name="img_upload" accept="image/png,image/jpeg" />
                            </div>
                        </div>
                        <div>
                            <span className="create-text23"><span className="text23-span">img2img</span></span>
                        </div>
                        <svg className='create-vector0' width='13' height='13' viewBox='0 0 13 13' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <g clipPath='url(#clip0_197_788)'>
                                <path d='M12.2993 7.475C12.3429 7.63755 12.3165 7.80228 12.2385 7.93736C12.1605 8.07244 12.031 8.17764 11.8686 8.22123L11.0698 8.43527L11.9066 8.91846C12.1977 9.08477 12.2993 9.45801 12.1317 9.75C11.9642 10.042 11.5889 10.1413 11.2974 9.97301L10.4605 9.48982L10.6746 10.2886C10.7617 10.6139 10.5689 10.9478 10.2437 11.0348C9.91848 11.1219 9.58454 10.9292 9.49745 10.604L8.96806 8.62806L7.10946 7.55625V9.7015L8.55597 11.148C8.794 11.386 8.794 11.7716 8.55597 12.0098C8.43739 12.1291 8.27997 12.1875 8.12509 12.1875C7.97021 12.1875 7.81329 12.128 7.69421 12.009L7.10946 11.4232V12.3906C7.10946 12.7271 6.83651 13 6.50009 13C6.16366 13 5.89071 12.7271 5.89071 12.3906V11.4243L5.30597 12.009C5.06793 12.247 4.68237 12.247 4.44421 12.009C4.20605 11.771 4.20617 11.3854 4.44421 11.1472L5.89071 9.70176V7.55625L4.03288 8.629L3.50349 10.6049C3.41635 10.9302 3.08251 11.1229 2.75726 11.0358C2.432 10.9487 2.23929 10.6148 2.32638 10.2896L2.54042 9.49076L1.70355 9.97395C1.41206 10.141 1.0373 10.042 0.868956 9.75C0.700616 9.45801 0.802559 9.08578 1.09389 8.91744L1.93077 8.43426L1.13198 8.22021C0.806723 8.13307 0.614008 7.79924 0.701098 7.47398C0.788188 7.14873 1.12207 6.95602 1.44733 7.04311L3.42323 7.5725L5.28134 6.47715L3.42274 5.42852L1.44761 5.95664C1.12235 6.04297 0.788467 5.85 0.701378 5.525C0.614288 5.2 0.807053 4.86586 1.13226 4.77877L1.93105 4.56468L1.09392 4.08281C0.802686 3.91523 0.70087 3.54199 0.868956 3.25C1.03704 2.95801 1.41181 2.85873 1.70329 3.02694L2.54017 3.51013L2.32638 2.71172C2.23903 2.38621 2.432 2.05232 2.75751 1.96498C3.08302 1.87764 3.41665 2.07066 3.50374 2.39586L4.03314 4.37176L5.89071 5.44375V3.29824L4.44345 1.85275C4.20541 1.61472 4.20541 1.22916 4.44345 0.990996C4.68149 0.752832 5.06704 0.752959 5.30521 0.990996L5.89071 1.57574V0.609375C5.89071 0.272949 6.16493 0 6.50009 0C6.83524 0 7.10946 0.272949 7.10946 0.609375V1.57574L7.69421 0.990996C7.93225 0.752959 8.3178 0.752959 8.55597 0.990996C8.79413 1.22903 8.794 1.61459 8.55597 1.85275L7.10946 3.29824V5.4435L8.9673 4.37074L9.49669 2.39484C9.58383 2.06959 9.91767 1.87687 10.2429 1.96396C10.4055 2.00751 10.5349 2.11278 10.6129 2.24783C10.6908 2.38288 10.7172 2.5477 10.6737 2.7102L10.4596 3.50898L11.2965 3.0258C11.5884 2.85898 11.9642 2.95801 12.1317 3.25C12.2993 3.54199 12.1981 3.91422 11.9068 4.0823L11.0699 4.56549L11.8687 4.77958C12.194 4.86672 12.3867 5.20056 12.2996 5.52581C12.2125 5.85107 11.8786 6.04378 11.5534 5.95669L9.57746 5.4273L7.71884 6.47715L9.57667 7.5499L11.5526 7.02051C11.8778 6.93418 12.1901 7.15 12.2993 7.475Z' fill='#001AFF' />
                            </g>
                            <defs>
                                <clipPath id='clip0_197_788'>
                                    <rect width='13' height='13' fill='white' />
                                </clipPath>
                            </defs>
                        </svg>
                        <svg className='create-vector2' width='10' height='12' viewBox='0 0 10 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M3.5558 0.127148C3.72991 -0.0439371 4 -0.0415935 4.17411 0.129492C4.79018 0.736493 5.3683 1.39037 5.90848 2.09814C6.15402 1.76066 6.43304 1.39271 6.73438 1.09273C6.91071 0.919297 7.18304 0.919297 7.35938 1.09507C8.1317 1.86847 8.78572 2.89029 9.24554 3.86056C9.69866 4.81676 10 5.79406 10 6.48308C10 9.47356 7.77232 12 5 12C2.19643 12 0 9.47122 0 6.48074C0 5.58079 0.397321 4.48162 1.01339 3.39417C1.63616 2.29032 2.51563 1.1396 3.5558 0.127148ZM5.03795 9.75011C5.60268 9.75011 6.10268 9.58606 6.57366 9.25795C7.51339 8.56892 7.76563 7.19086 7.20089 6.1081C7.13839 5.97686 7.07589 5.84562 6.98214 5.71437L5.85268 7.09243C5.85268 7.09243 4.03571 4.66442 3.90848 4.50037C2.97098 5.71437 2.5 6.4034 2.5 7.19086C2.5 8.7986 3.62946 9.75011 5.03795 9.75011Z' fill='#FF0000' />
                        </svg>

                    </div>
                    <img
                        alt="ezgif1ddf2dee27511978"
                        src={require("../../assets/playgrounds/image.gif")}
                        className="create-ezgif1ddf2dee2751"
                    />
                    <svg className='create-vector3' width='29' height='29' viewBox='0 0 29 29' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M14.5 29C22.509 29 29 22.509 29 14.5C29 6.49102 22.509 0 14.5 0C6.49102 0 0 6.49102 0 14.5C0 22.509 6.49102 29 14.5 29ZM9.91211 9.91211C10.4445 9.37969 11.3055 9.37969 11.8322 9.91211L14.4943 12.5742L17.1564 9.91211C17.6889 9.37969 18.5498 9.37969 19.0766 9.91211C19.6033 10.4445 19.609 11.3055 19.0766 11.8322L16.4145 14.4943L19.0766 17.1564C19.609 17.6889 19.609 18.5498 19.0766 19.0766C18.5441 19.6033 17.6832 19.609 17.1564 19.0766L14.4943 16.4145L11.8322 19.0766C11.2998 19.609 10.4389 19.609 9.91211 19.0766C9.38535 18.5441 9.37969 17.6832 9.91211 17.1564L12.5742 14.4943L9.91211 11.8322C9.37969 11.2998 9.37969 10.4389 9.91211 9.91211Z' fill='white' />
                    </svg>




                    <div className="create-frame2">

                        <span className="create-text43"><span>1.0</span></span>
                    </div>
                    <span className="create-text45"><span>credits / image</span></span>
                    <svg className='create-select' width='14' height='20' viewBox='0 0 14 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M0 1.37188V17.3047C0 17.8289 0.433125 18.25 0.9625 18.25C1.23812 18.25 1.505 18.134 1.68875 17.9277L5.3025 13.8672L7.84438 18.8645C8.19 19.5434 9.03 19.8184 9.72125 19.4789C10.4125 19.1395 10.6925 18.3145 10.3469 17.6355L7.86625 12.75H13.0331C13.5669 12.75 14 12.3246 14 11.8004C14 11.5297 13.8819 11.2719 13.6763 11.0914L1.68875 0.628516C1.50062 0.465234 1.26437 0.375 1.015 0.375C0.455 0.375 0 0.821875 0 1.37188Z' fill='white' />
                    </svg>

                    <div className="create-center">
                        <div className="create-image-logo">
                            <img alt="Frame1978" src={require('../../assets/playgrounds/animation.gif')}
                                className="create-image-logo" id="robot" />
                        </div>
                        <div className="main-dotted-line"></div>
                        <div className="create-text06" id="SelectValue4"></div>
                        <div className="slider5">
                            <input type="range" id="slider-main" />
                        </div>
                        <svg className='create-line51' width='837' height='1' viewBox='0 0 837 1' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <line y1='0.5' x2='838' y2='0.5' stroke='#545454' />
                        </svg>

                        <div className="create-frame71">
                            <span className="create-text33"><span>Images</span></span>
                            <svg className='create-frame4' width='20' height='16' viewBox='0 0 20 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <g clipPath='url(#clip0_197_821)'>
                                    <path d='M8 0H18C19.1031 0 20 0.896875 20 2V9C20 10.1031 19.1031 11 18 11H8C6.89687 11 6 10.1031 6 9V2C6 0.896875 6.89687 0 8 0ZM14.875 3.33437C14.7344 3.125 14.5 3 14.25 3C14 3 13.7656 3.125 13.625 3.33437L11.875 5.95937L11.3344 5.28125C11.1906 5.10313 10.975 5 10.75 5C10.525 5 10.3062 5.10313 10.1656 5.28125L8.16562 7.78125C7.98437 8.00625 7.95 8.31563 8.075 8.575C8.2 8.83437 8.4625 9 8.75 9H11.25H12.75H17.25C17.5281 9 17.7812 8.84687 17.9125 8.60312C18.0438 8.35938 18.0281 8.0625 17.875 7.83437L14.875 3.33437ZM10.5 3C10.5 2.44688 10.0531 2 9.5 2C8.94687 2 8.5 2.44688 8.5 3C8.5 3.55312 8.94687 4 9.5 4C10.0531 4 10.5 3.55312 10.5 3ZM2 4H5V12V13C5 13.5531 5.44688 14 6 14H10C10.5531 14 11 13.5531 11 13V12H16V14C16 15.1031 15.1031 16 14 16H2C0.896875 16 0 15.1031 0 14V6C0 4.89687 0.896875 4 2 4ZM2.25 6C1.975 6 1.75 6.225 1.75 6.5V7C1.75 7.275 1.975 7.5 2.25 7.5H2.75C3.025 7.5 3.25 7.275 3.25 7V6.5C3.25 6.225 3.025 6 2.75 6H2.25ZM2.25 9.25C1.975 9.25 1.75 9.475 1.75 9.75V10.25C1.75 10.525 1.975 10.75 2.25 10.75H2.75C3.025 10.75 3.25 10.525 3.25 10.25V9.75C3.25 9.475 3.025 9.25 2.75 9.25H2.25ZM2.25 12.5C1.975 12.5 1.75 12.725 1.75 13V13.5C1.75 13.775 1.975 14 2.25 14H2.75C3.025 14 3.25 13.775 3.25 13.5V13C3.25 12.725 3.025 12.5 2.75 12.5H2.25ZM12.75 13V13.5C12.75 13.775 12.975 14 13.25 14H13.75C14.025 14 14.25 13.775 14.25 13.5V13C14.25 12.725 14.025 12.5 13.75 12.5H13.25C12.975 12.5 12.75 12.725 12.75 13Z' fill='white' />
                                </g>
                                <defs>
                                    <clipPath id='clip0_197_821'>
                                        <rect width='20' height='16' fill='white' />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <svg className='create-icaspectratio48px1' width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M21.8182 12H19.7273V15H16.5909V17H21.8182V12ZM9.27273 9H12.4091V7H7.18182V12H9.27273V9ZM23.9091 3H5.09091C3.93568 3 3 3.895 3 5V19C3 20.105 3.93568 21 5.09091 21H23.9091C25.0643 21 26 20.105 26 19V5C26 3.895 25.0643 3 23.9091 3ZM23.9091 19.015H5.09091V4.985H23.9091V19.015Z' fill='white' />
                        </svg>

                        <div className="create-frame9">
                            <Link to=""><span className="create-text37"><span>Push to img2img</span></span></Link>
                            <svg className='create-frame5' width='20' height='16' viewBox='0 0 20 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <g clipPath='url(#clip0_197_821)'>
                                    <path d='M8 0H18C19.1031 0 20 0.896875 20 2V9C20 10.1031 19.1031 11 18 11H8C6.89687 11 6 10.1031 6 9V2C6 0.896875 6.89687 0 8 0ZM14.875 3.33437C14.7344 3.125 14.5 3 14.25 3C14 3 13.7656 3.125 13.625 3.33437L11.875 5.95937L11.3344 5.28125C11.1906 5.10313 10.975 5 10.75 5C10.525 5 10.3062 5.10313 10.1656 5.28125L8.16562 7.78125C7.98437 8.00625 7.95 8.31563 8.075 8.575C8.2 8.83437 8.4625 9 8.75 9H11.25H12.75H17.25C17.5281 9 17.7812 8.84687 17.9125 8.60312C18.0438 8.35938 18.0281 8.0625 17.875 7.83437L14.875 3.33437ZM10.5 3C10.5 2.44688 10.0531 2 9.5 2C8.94687 2 8.5 2.44688 8.5 3C8.5 3.55312 8.94687 4 9.5 4C10.0531 4 10.5 3.55312 10.5 3ZM2 4H5V12V13C5 13.5531 5.44688 14 6 14H10C10.5531 14 11 13.5531 11 13V12H16V14C16 15.1031 15.1031 16 14 16H2C0.896875 16 0 15.1031 0 14V6C0 4.89687 0.896875 4 2 4ZM2.25 6C1.975 6 1.75 6.225 1.75 6.5V7C1.75 7.275 1.975 7.5 2.25 7.5H2.75C3.025 7.5 3.25 7.275 3.25 7V6.5C3.25 6.225 3.025 6 2.75 6H2.25ZM2.25 9.25C1.975 9.25 1.75 9.475 1.75 9.75V10.25C1.75 10.525 1.975 10.75 2.25 10.75H2.75C3.025 10.75 3.25 10.525 3.25 10.25V9.75C3.25 9.475 3.025 9.25 2.75 9.25H2.25ZM2.25 12.5C1.975 12.5 1.75 12.725 1.75 13V13.5C1.75 13.775 1.975 14 2.25 14H2.75C3.025 14 3.25 13.775 3.25 13.5V13C3.25 12.725 3.025 12.5 2.75 12.5H2.25ZM12.75 13V13.5C12.75 13.775 12.975 14 13.25 14H13.75C14.025 14 14.25 13.775 14.25 13.5V13C14.25 12.725 14.025 12.5 13.75 12.5H13.25C12.975 12.5 12.75 12.725 12.75 13Z' fill='white' />
                                </g>
                                <defs>
                                    <clipPath id='clip0_197_821'>
                                        <rect width='20' height='16' fill='white' />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className="create-frame10">
                            <Link to="/artlab" className="create-text39">
                                <span>Send to artlab</span>
                            </Link>
                            <svg className='create-frame6' width='17' height='20' viewBox='0 0 17 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <g clipPath='url(#clip0_197_825)'>
                                    <path d='M10.9286 0H6.07143H4.85714C4.18549 0 3.64286 0.558594 3.64286 1.25C3.64286 1.94141 4.18549 2.5 4.85714 2.5V7.6875C4.85714 8.14844 4.73192 8.60547 4.49665 8.99609L0.390848 15.8672C0.136607 16.2969 0 16.7852 0 17.2891C0 18.7852 1.18013 20 2.63348 20H14.3665C15.8199 20 17 18.7852 17 17.2891C17 16.7891 16.8634 16.2969 16.6092 15.8672L12.5033 9C12.2681 8.60547 12.1429 8.15234 12.1429 7.69141V2.5C12.8145 2.5 13.3571 1.94141 13.3571 1.25C13.3571 0.558594 12.8145 0 12.1429 0H10.9286ZM7.28571 7.6875V2.5H9.71429V7.6875C9.71429 8.61328 9.96473 9.51953 10.4353 10.3086L11.7444 12.5H5.25558L6.56473 10.3086C7.03527 9.51953 7.28571 8.61328 7.28571 7.6875Z' fill='white' />
                                </g>
                                <defs>
                                    <clipPath id='clip0_197_825'>
                                        <rect width='17' height='20' fill='white' />
                                    </clipPath>
                                </defs>
                            </svg>

                            <svg className='create-vector4' width='29' height='26' viewBox='0 0 29 26' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <g filter='url(#filter0_d_197_827)'>
                                    <path d='M15.2656 2.97321C15.6812 2.69196 15.9583 2.1817 15.9583 1.60714C15.9583 0.719196 15.3057 0 14.5 0C13.6943 0 13.0417 0.719196 13.0417 1.60714C13.0417 2.18571 13.3187 2.69196 13.7344 2.97321L11.6453 7.57768C11.3135 8.30893 10.4531 8.51786 9.87344 8.00759L6.625 5.14286C6.80729 4.87366 6.91667 4.54018 6.91667 4.17857C6.91667 3.29062 6.26406 2.57143 5.45833 2.57143C4.6526 2.57143 4 3.29062 4 4.17857C4 5.06652 4.6526 5.78571 5.45833 5.78571C5.46562 5.78571 5.47656 5.78571 5.48385 5.78571L7.15 15.8866C7.35052 17.108 8.31667 18 9.44687 18H19.5531C20.6797 18 21.6458 17.1121 21.85 15.8866L23.5161 5.78571C23.5234 5.78571 23.5344 5.78571 23.5417 5.78571C24.3474 5.78571 25 5.06652 25 4.17857C25 3.29062 24.3474 2.57143 23.5417 2.57143C22.7359 2.57143 22.0833 3.29062 22.0833 4.17857C22.0833 4.54018 22.1927 4.87366 22.375 5.14286L19.1266 8.00759C18.5469 8.51786 17.6865 8.30893 17.3547 7.57768L15.2656 2.97321Z' fill='#FFF500' />
                                </g>
                                <defs>
                                    <filter id='filter0_d_197_827' x='0' y='0' width='29' height='26' filterUnits='userSpaceOnUse' colorInterpolationFilters='sRGB'>
                                        <feFlood floodOpacity='0' result='BackgroundImageFix' />
                                        <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
                                        <feOffset dy='4' />
                                        <feGaussianBlur stdDeviation='2' />
                                        <feComposite in2='hardAlpha' operator='out' />
                                        <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
                                        <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_197_827' />
                                        <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_197_827' result='shape' />
                                    </filter>
                                </defs>
                            </svg>

                        </div>
                        <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-vector">
                            <path d="M0 1.37188V17.3047C0 17.8289 0.433125 18.25 0.9625 18.25C1.23812 18.25 1.505 18.134 1.68875 17.9277L5.3025 13.8672L7.84438 18.8645C8.19 19.5434 9.03 19.8184 9.72125 19.4789C10.4125 19.1395 10.6925 18.3145 10.3469 17.6355L7.86625 12.75H13.0331C13.5669 12.75 14 12.3246 14 11.8004C14 11.5297 13.8819 11.2719 13.6763 11.0914L1.68875 0.628516C1.50062 0.465234 1.26437 0.375 1.015 0.375C0.455 0.375 0 0.821875 0 1.37188Z" fill="white" />
                        </svg>
                        <span className="create-text41">
                            <span>
                                Select an image from the gallery, then click one of the buttons
                                below to perform an action.
                            </span>
                        </span>
                        <div className="create-frame8">
                            <Link to=""><span className="create-text35"><span>Copy to clipboard</span></span></Link>
                            <svg className='create-frame7' width='16' height='21' viewBox='0 0 16 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <g clipPath='url(#clip0_197_832)'>
                                    <path d='M8 0C6.25833 0 4.775 1.09512 4.22917 2.625H2.66667C1.19583 2.625 0 3.80215 0 5.25V18.375C0 19.8229 1.19583 21 2.66667 21H13.3333C14.8042 21 16 19.8229 16 18.375V5.25C16 3.80215 14.8042 2.625 13.3333 2.625H11.7708C11.225 1.09512 9.74167 0 8 0ZM8 5.25C7.2625 5.25 6.66667 4.66348 6.66667 3.9375C6.66667 3.21152 7.2625 2.625 8 2.625C8.7375 2.625 9.33333 3.21152 9.33333 3.9375C9.33333 4.66348 8.7375 5.25 8 5.25ZM12.825 11.3121L7.49167 16.5621C7.0375 17.0092 6.29583 17.0092 5.84167 16.5621L3.175 13.9371C2.72083 13.49 2.72083 12.76 3.175 12.3129C3.62917 11.8658 4.37083 11.8658 4.825 12.3129L6.66667 14.1258L11.175 9.68789C11.6292 9.24082 12.3708 9.24082 12.825 9.68789C13.2792 10.135 13.2792 10.865 12.825 11.3121Z' fill='white' />
                                </g>
                                <defs>
                                    <clipPath id='clip0_197_832'>
                                        <rect width='16' height='21' fill='white' />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className="create-download"></div>
                    </div>
                    <div className="create-right">
                        <svg className='create-line11' width='270' height='1' viewBox='0 0 270 1' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <line x1='-1' y1='0.5' x2='270' y2='0.5' stroke='#9A9A9A' />
                        </svg>

                        <div className="create-slider4">
                            <span className="create-text25"><span>Sampling Steps</span></span>
                            <span className="create-text27">
                                <span>
                                    Sampling method (k-lms is default k-diffusion sampler)
                                </span>
                            </span>
                            <select name="sampling" id="samplingMethod" className="dropdown">
                                <option value="k_dpm_2_ancestra">k_dpm_2_ancestral</option>
                                <option value="ddim">ddim</option>
                                <option value="plms">plms</option>
                                <option value="k_euler">k_euler</option>
                                <option value="k_euler_ancestral">k_euler_ancestral</option>
                                <option value="k_heun">k_heun</option>
                                <option value="k_dpm_2">k_dpm_2</option>
                                <option value="k_dpm_2_ancestral">k_dpm_2_ancestral</option>
                                <option value="k_lms">k_lms</option>
                            </select>
                            <span className="create-text29"><span></span></span>
                            <div className="create-text06" id="SelectValue6">50</div>
                            <div className="slider3">
                                <input type="range" id="slider6" className="slider" />
                            </div>
                        </div>
                    </div>
                    <div className="hamburger-menu-container">
                        <div className="hamburger-menu-hamburger-menu" id="subMenu">
                            <svg className='' width='15' height='8' viewBox='0 0 15 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <path d='M8.55945 0.390472C7.97376 -0.130158 7.02259 -0.130158 6.4369 0.390472L0.4394 5.72172C0.00833018 6.10491 -0.118179 6.67552 0.116098 7.17532C0.350375 7.67513 0.893899 8 1.50302 8L13.498 7.99583C14.1025 7.99583 14.6507 7.67096 14.8849 7.17116C15.1192 6.67135 14.988 6.10074 14.5616 5.71756L8.56414 0.386307L8.55945 0.390472Z' fill='white' />
                            </svg>

                            <svg className='' width='776' height='1' viewBox='0 0 776 1' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <line y1='0.5' x2='776' y2='0.5' stroke='#545454' />
                            </svg>

                            <div className="hamburger-menu-terms-conditions">
                                <div className="hamburger-menu-frame118">
                                    <span className="hamburger-menu-text69">
                                        <span><Link to="terms-agreement.html">Terms &amp; Conditions</Link></span>
                                    </span>
                                    <svg className='' width='130' height='1' viewBox='0 0 130 1' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                        <line y1='0.5' x2='130' y2='0.5' stroke='#545454' />
                                    </svg>

                                </div>
                            </div>
                            <div className="hamburger-menu-privacy-policy">
                                <div className="hamburger-menu-frame117">
                                    <span className="hamburger-menu-text71">
                                        <span><Link to="privacy-policy.html">Privacy Policy</Link></span>
                                    </span>
                                    <svg className='' width='94' height='1' viewBox='0 0 94 1' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                        <line y1='0.5' x2='94' y2='0.5' stroke='#545454' />
                                    </svg>

                                </div>
                            </div>
                            <div className="hamburger-menu-licensingagreement">
                                <div className="hamburger-menu-frame116">
                                    <span className="hamburger-menu-text73">
                                        <span><Link to="license.html">Licensing agreement</Link></span>
                                    </span>
                                    <svg className='' width='148' height='1' viewBox='0 0 148 1' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                        <line y1='0.5' x2='148' y2='0.5' stroke='#545454' />
                                    </svg>

                                </div>
                            </div>
                            <div className="hamburger-menu-subprocessors">
                                <div className="hamburger-menu-frame115">
                                    <span className="hamburger-menu-text75">
                                        <span><Link to="sub-processors.html">Sub-processors</Link></span>
                                    </span>
                                    <svg className='' width='110' height='1' viewBox='0 0 110 1' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                        <line y1='0.5' x2='110' y2='0.5' stroke='#545454' />
                                    </svg>
                                </div>
                            </div>
                            <div className="hamburger-menu-subprocessors1">
                                <div className="hamburger-menu-frame1151">
                                    <span className="hamburger-menu-text77"><span><Link to="#">English</Link></span></span>
                                </div>
                                <svg className='' width='19' height='10' viewBox='0 0 19 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                    <path d='M0 1.66667C0 0.747396 0.834683 0 1.86131 0H7.44526H8.84124H9.30657H16.7518C17.7785 0 18.6131 0.747396 18.6131 1.66667V8.33333C18.6131 9.2526 17.7785 10 16.7518 10H9.30657H8.84124H7.44526H1.86131C0.834683 10 0 9.2526 0 8.33333V1.66667ZM9.30657 1.66667V8.33333H16.7518V1.66667H9.30657ZM5.1855 2.91406C5.09244 2.72656 4.88304 2.60417 4.65328 2.60417C4.42353 2.60417 4.21413 2.72656 4.12107 2.91406L2.25975 6.66406C2.12888 6.92708 2.26266 7.23437 2.5564 7.35156C2.85014 7.46875 3.19332 7.34896 3.32419 7.08594L3.58303 6.5625H5.72354L5.98238 7.08594C6.11325 7.34896 6.45643 7.46615 6.75017 7.35156C7.04391 7.23698 7.17478 6.92708 7.04682 6.66406L5.1855 2.91406ZM4.65328 4.40625L5.20586 5.52083H4.10071L4.65328 4.40625ZM13.0292 2.60417C13.3491 2.60417 13.6109 2.83854 13.6109 3.125V3.22917H14.8905H15.3558C15.6758 3.22917 15.9375 3.46354 15.9375 3.75C15.9375 4.03646 15.6758 4.27083 15.3558 4.27083H15.2977L15.2511 4.38802C14.9923 5.02344 14.5997 5.60156 14.0995 6.09115C14.1256 6.10677 14.1518 6.11979 14.178 6.13281L14.7276 6.42708C15.0039 6.57552 15.0912 6.89583 14.9283 7.14062C14.7655 7.38542 14.4048 7.46615 14.1314 7.32031L13.5818 7.02604C13.4509 6.95573 13.3258 6.88281 13.2008 6.80469C12.8925 7 12.5639 7.16927 12.212 7.3099L12.1073 7.35156C11.8135 7.46875 11.4703 7.34896 11.3395 7.08594C11.2086 6.82292 11.3424 6.51562 11.6361 6.39844L11.7408 6.35677C11.927 6.28125 12.1073 6.19792 12.2789 6.10156L11.924 5.78385C11.6972 5.58073 11.6972 5.25 11.924 5.04687C12.1509 4.84375 12.5202 4.84375 12.7471 5.04687L13.1717 5.42708L13.1862 5.4401C13.5469 5.09896 13.8406 4.70312 14.0529 4.26823H13.0292H10.9352C10.6153 4.26823 10.3536 4.03385 10.3536 3.7474C10.3536 3.46094 10.6153 3.22656 10.9352 3.22656H12.4475V3.1224C12.4475 2.83594 12.7093 2.60156 13.0292 2.60156V2.60417Z' fill='white' />
                                </svg>

                                <svg className='' width='5' height='8' viewBox='0 0 5 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                    <g clipPath='url(#clip0_499_6433)'>
                                        <path d='M2.14677 5.85322C2.34208 6.04854 2.65927 6.04854 2.85458 5.85322L4.85458 3.85322C4.99833 3.70947 5.04052 3.49541 4.96239 3.30791C4.88427 3.12041 4.70302 2.99854 4.49989 2.99854L0.499893 3.0001C0.298331 3.0001 0.115518 3.12197 0.0373933 3.30947C-0.0407317 3.49697 0.00301827 3.71104 0.145206 3.85479L2.14521 5.85479L2.14677 5.85322Z' fill='white' />
                                    </g>
                                    <defs>
                                        <clipPath id='clip0_499_6433'>
                                            <rect width='5' height='8' fill='white' />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </div>
                            <svg className='item-vector2' width='21' height='18' viewBox='0 0 21 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <path d='M18.8414 4.48592C18.8548 4.68279 18.8548 4.87969 18.8548 5.07656C18.8548 11.0812 14.5242 18 6.60916 18C4.17069 18 1.90547 17.2547 0 15.961C0.34646 16.0031 0.67955 16.0172 1.03934 16.0172C3.05137 16.0172 4.90356 15.3 6.38263 14.0766C4.49049 14.0344 2.90482 12.7266 2.35849 10.9266C2.62501 10.9687 2.89149 10.9969 3.17134 10.9969C3.55775 10.9969 3.9442 10.9406 4.30395 10.8422C2.33187 10.4203 0.852759 8.59218 0.852759 6.38437V6.32814C1.42571 6.66564 2.09201 6.87657 2.79818 6.90467C1.63891 6.08902 0.879419 4.69685 0.879419 3.12184C0.879419 2.27811 1.09258 1.50467 1.4657 0.829666C3.58437 3.58591 6.76904 5.38588 10.3401 5.58279C10.2735 5.24529 10.2335 4.89376 10.2335 4.54219C10.2335 2.03904 12.1523 0 14.5374 0C15.7766 0 16.8959 0.548436 17.6821 1.43437C18.6548 1.23751 19.5875 0.857802 20.4137 0.337502C20.0939 1.39221 19.4143 2.27815 18.5216 2.84061C19.3877 2.74222 20.2272 2.48904 21 2.13752C20.4138 3.03748 19.6809 3.83901 18.8414 4.48592Z' fill='white' />
                            </svg>
                            <svg className='item-vector3' width='20' height='15' viewBox='0 0 20 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <path d='M1.875 0C0.839844 0 0 0.839844 0 1.875C0 2.46484 0.277344 3.01953 0.75 3.375L9.25 9.75C9.69531 10.082 10.3047 10.082 10.75 9.75L19.25 3.375C19.7227 3.01953 20 2.46484 20 1.875C20 0.839844 19.1602 0 18.125 0H1.875ZM0 4.375V12.5C0 13.8789 1.12109 15 2.5 15H17.5C18.8789 15 20 13.8789 20 12.5V4.375L11.5 10.75C10.6094 11.418 9.39062 11.418 8.5 10.75L0 4.375Z' fill='white' />
                            </svg>

                            <svg className='item-vector4' width='17' height='17' viewBox='0 0 17 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <path d='M8.5019 4.14141C6.08985 4.14141 4.14428 6.08742 4.14428 8.5C4.14428 10.9126 6.08985 12.8586 8.5019 12.8586C10.9139 12.8586 12.8595 10.9126 12.8595 8.5C12.8595 6.08742 10.9139 4.14141 8.5019 4.14141ZM8.5019 11.3336C6.94317 11.3336 5.66888 10.0629 5.66888 8.5C5.66888 6.93713 6.93938 5.66635 8.5019 5.66635C10.0644 5.66635 11.3349 6.93713 11.3349 8.5C11.3349 10.0629 10.0606 11.3336 8.5019 11.3336ZM14.0542 3.96313C14.0542 4.52834 13.5991 4.97975 13.0378 4.97975C12.4727 4.97975 12.0214 4.52455 12.0214 3.96313C12.0214 3.40171 12.4765 2.9465 13.0378 2.9465C13.5991 2.9465 14.0542 3.40171 14.0542 3.96313ZM16.9403 4.99492C16.8758 3.6331 16.5648 2.42681 15.5674 1.43295C14.5737 0.439083 13.3677 0.128026 12.0062 0.0597456C10.603 -0.0199152 6.39704 -0.0199152 4.99381 0.0597456C3.63609 0.124233 2.43006 0.43529 1.43263 1.42915C0.435193 2.42302 0.127998 3.62931 0.0597323 4.99113C-0.0199108 6.39468 -0.0199108 10.6015 0.0597323 12.0051C0.124205 13.3669 0.435193 14.5732 1.43263 15.5671C2.43006 16.5609 3.63229 16.872 4.99381 16.9403C6.39704 17.0199 10.603 17.0199 12.0062 16.9403C13.3677 16.8758 14.5737 16.5647 15.5674 15.5671C16.561 14.5732 16.872 13.3669 16.9403 12.0051C17.0199 10.6015 17.0199 6.39847 16.9403 4.99492ZM15.1274 13.511C14.8316 14.2545 14.259 14.8273 13.5118 15.127C12.393 15.5708 9.73826 15.4684 8.5019 15.4684C7.26553 15.4684 4.60697 15.5671 3.49197 15.127C2.74863 14.8311 2.17596 14.2583 1.87635 13.511C1.43263 12.392 1.53503 9.73664 1.53503 8.5C1.53503 7.26336 1.43642 4.60421 1.87635 3.48895C2.17217 2.74545 2.74484 2.17265 3.49197 1.87298C4.61076 1.42915 7.26553 1.53157 8.5019 1.53157C9.73826 1.53157 12.3968 1.43295 13.5118 1.87298C14.2552 2.16886 14.8278 2.74166 15.1274 3.48895C15.5712 4.608 15.4688 7.26336 15.4688 8.5C15.4688 9.73664 15.5712 12.3958 15.1274 13.511Z' fill='white' />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Editing;
