import heroImg from './assets/hero 1.svg'

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-center">
                <div className="hero-title">
                    <h1>Contentful CMS</h1>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde facilis totam suscipit obcaecati nesciunt molestiae quo autem iure, vero quam eum quae laboriosam. Rem quod architecto sapiente distinctio, ipsam dolore!
                    </p>
                </div>
                <div className="img-container">
                    <img src={heroImg} alt="women and the browser" className="img" />
                </div>
            </div>
        </section>
    )
}

export default Hero