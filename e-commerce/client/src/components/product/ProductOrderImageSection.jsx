import React, { useEffect, useState } from "react";

import "./ProductOrderImageSection.css";

const ProductOrderImageSection = (props) => {
  //   const images = [
  //     "https://m-cdn.phonearena.com/images/articles/376060-940/iPhone-13-Purple.jpg",
  //     "https://tse1.mm.bing.net/th?id=OIP.bsZBo9a8kY_JJuaJW52K3QHaE8&pid=Api&P=0",
  //     "https://tse4.mm.bing.net/th?id=OIP.LTjMQLq4b9szHp42cFn0VQHaHa&pid=Api&P=0",
  //     "https://static.techspot.com/images2/news/bigimage/2021/08/2021-08-10-image-5.jpg"
  //   ];

  const { images } = props;

  const [mainImg, setMainImg] = useState(images[0]);

  return (
    <div className="product-images">
      <div className="images-window">
        <div className="product-focusImage">
          <div className="product-imgContainer">
            {/* <img src={require('../../assests/iphone.jpg')} alt="" /> */}
            <img src={`http://localhost:3000/${mainImg}`} alt="product-img" />
          </div>
        </div>
        <div className="product-allImages-section">
          <div
            className="products-allImages"
            style={{ gridTemplateColumns: `repeat(${images.length}, 1fr)` }}
          >
            {images.map((img) => (
              <button key={img} onClick={(e) => setMainImg(img)}>
                <img src={`http://localhost:3000/${img}`} alt="product-img" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOrderImageSection;
