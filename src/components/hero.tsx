import Image from "next/image"
import "../style/hero.css"


function Hero(){
    return(
        <div className="header-container">
            <div className="header-boxes-container">
                {/*left*/}
                <div>
                <Image src={"/imagess/profile.jpg"} 
                width={330}
                height={330}

                alt ="profile"/>
                </div>
                {/*right*/}
                <div className="hero-right-div">
        <h2 className="title-hero">I'm Sheheryar Khan Front-end Developer</h2>
        <p className="desc-hero"> As a front-end developer, you specialize in creating engaging and responsive user interfaces using HTML, CSS, JavaScript, and modern frameworks. Let me know if you need any tips, tools, or resources related to front-end development!</p>
        <button className="hero-btn">HIRE ME</button>
                </div>
            </div>
         
        </div>
    )
}
export default Hero