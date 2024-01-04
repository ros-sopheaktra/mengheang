import * as React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ImageSlider from '../components/SliderComponents/ImageSlider';
import "../css/home.css";
import data from "./HomePage/SliderData";
import brands from "./HomePage/BrandData";
import productNewArrivals from "./HomePage/NewArrival";
import bestSellingProducts from "./HomePage/BestSellingProduct";
import StarImage from "../images/icons/star.png";
import ImageFashion1 from "../images/products/fashion_main.jpg";
import ImageFashion2 from "../images/products/shose.webp";
import ImageFashion3 from "../images/products/spot.jpg";
import ProductCards from "../components/ProductCardComponents/ProductCard";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="home-page-content-wrapper">
          {/* slider blog */}
          <div className="slider-blog-wrapper">
            <ImageSlider images={data} slideInterval={3000} />
          </div>

          {/* fashion brand */}
          <div className="feature-brand-content-wrapper">
            {/* text */}
            <div className="text-brand-blog">
              Fashion Forward Style Eternal
            </div>

            {/* brand icon blog */}
            <div className="icons-brand-content-wrapper">
              {brands.map((brand) => {
                const { id, image, name } = brand;
                return (
                  <div>
                    <a href="" className="imag-icons-cart-wrapper">
                      <img src={image} alt={name} />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          {/* some fashion image */}
          <div className="fashion-image-blog-wrapper">
            <div className="row">
              <div className="col-sm-12 col-md-8">
                <div className="fashion-image">
                  <img src={ImageFashion1} alt="image" />
                </div>
              </div>

              <div className="col-sm-12 col-md-4">
                <div className="fashion-image">
                  <img src={ImageFashion2} alt="image" />
                </div>

                <div className="fashion-image mt-3" >
                  <img src={ImageFashion3} alt="image" />
                </div>
              </div>

            </div>
          </div>

          {/* new arrivals */}
          <div className="new-arrivals-product-content-wrapper">
            <div className="text-header-new-arrivals-product">
              <div className="new-arrival-text">New Arrivals
                <img src={StarImage} alt="star-icon" />
              </div>
              <div className="new-arrival-border"></div>
            </div>

            {/* product card image new arrival */}
            <ProductCards products={productNewArrivals} />
          </div>

          {/* best selling product */}
          <div className="best-selling-product-blog">
            <div className="text-header-new-arrivals-product">
              <div className="new-arrival-text">Best Selling Products
                <img src={StarImage} alt="star-icon" />
              </div>
              <div className="new-arrival-border"></div>
            </div>

            {/* product card image new arrival */}
            <ProductCards products={bestSellingProducts} />
          </div>

          {/* subscribe */}
          <div className="subscribe-blog-wrapper">
            {/* brand */}
            <div className="brand-show-wrapper">
              {brands.map((brand) => {
                const { id, image, name } = brand;
                return (
                  <div className="w-40">
                    <a href="" className="imag-brand-show">
                      <img src={image} alt={name} />
                    </a>
                  </div>
                );
              })}
            </div>

            {/* image-subscribe-blog */}
            <div className="subscribe-background-image">
              <div className="subscribe-blog-content-wrapper">
                <div className="text-subscribe">subscribe for exclusive fashion insights</div>
                <div class="subscribe-input-wrapper">
                  <input type="text" placeholder="YOUR EMAIL" name="subscribe" id="subscribe" />
                  <button id="subscribe-btn">subscribe now</button>
                </div>
              </div>
            </div>
          </div>

        </div>
        <Footer />
      </div>
    );
  }
}
export default Home;