const SectionComponent = ({ backgroundImage, title, name }) => {
    return (
        <section className="hero-wrap hero-wrap-2 js-fullheight" style={{ backgroundImage: `url(${backgroundImage})` }} data-stellar-background-ratio="0.5">
            <div className="overlay"></div>
            <div className="container">
                <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-start">
                    <div className="col-md-9  pb-5">
                        <p className="breadcrumbs"><span className="mr-2"><a href="/">Inicio <i className="ion-ios-arrow-forward"></i></a></span> <span>{name} <i className="ion-ios-arrow-forward"></i></span></p>
                        <h1 className="mb-3 bread">{title}</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionComponent;