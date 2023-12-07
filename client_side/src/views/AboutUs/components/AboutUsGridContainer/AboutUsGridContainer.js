import './AboutUsGridContainer.css'

const AboutUsGridContainer = () => {
    
    return ( 
        <div className="hero-container">

            <div className="image-boxes">

                <div className="box-1"></div>
                <div className="box-2"></div>
                <div className="box-3"></div>
                <div className="box-4"></div>

            </div>

            <div className="text">
                <p className="title-text">
                We are Pioneers in <span>Computer Science and Engineering</span>, Empowering Technological Advancements
                </p>
        
                <p className="content-text">
                The IEEE Computer Society is the premier source for information, inspiration, and collaboration in computer science and engineering.Connecting members worldwide, the Computer Society empowers the people who advance technology by delivering tools for individuals at all stages of their professional careers. Our trusted resources include international conferences, peer-reviewed publications, a robust digital library, globally recognized standards, and continuous learning opportunities.
                </p>
            </div>

        </div>
     );
}
 
export default AboutUsGridContainer;