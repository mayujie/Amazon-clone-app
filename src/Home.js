import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="The lean startup"
            price={29.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          />
          <Product
            id="B08B8VDK37"
            title="Stand Mixer Smoothie Maker"
            price={31}
            rating={4}
            image="https://m.media-amazon.com/images/I/7118DhChyEL._AC_UL320_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="B07YJW81TR"
            title="Amazfit GTS Smartwatch"
            price={129.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61V3O8CvXcL._AC_UL320_.jpg"
          />
          <Product
            id="B00I3LUWQA"
            title="Sony MDR-ZX310B Lifestyle Headphones Without Microphone"
            price={18}
            rating={4}
            image="https://m.media-amazon.com/images/I/51hJN2pp02L._AC_UY218_.jpg"
          />
          <Product
            id="B07VQPM3QW"
            title="Samsung Galaxy Watch Active2, Bluetooth, 44 mm, Silver"
            price={199}
            rating={4}
            image="https://m.media-amazon.com/images/I/716KKssFT6L._AC_UY218_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="B083WYD99J"
            title="Honor MagicWatch 42 mm Black"
            price={134}
            rating={5}
            image="https://m.media-amazon.com/images/I/51vQMxhVMzL._AC_UY218_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
