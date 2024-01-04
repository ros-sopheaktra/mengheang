import './Style.css';

const ProductCards = ({ products }) => {
    return (
        <section className="products-card-wrapper">
            <div className="row">
                {products.map((productArrival) => {
                    const { id, image, name, type, price, description } = productArrival;
                    return (
                        <div className="col-sm-6 col-md-3 mt-4">
                            {/* image */}
                            <div className="product-image-content-wrapper">
                                <img src={image} alt="image" className="product-image" />
                                <div className="overlay">
                                    <p className="text">BUY NOW</p>
                                </div>
                            </div>

                            {/* product type */}
                            <div className="product-type">{type}</div>
                            {/* product name */}
                            <div className="product-name">{name}</div>
                            {/* description */}
                            <div className="product-description">{description}</div>
                            {/* price */}
                            <div className="product-price">${price}</div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default ProductCards;