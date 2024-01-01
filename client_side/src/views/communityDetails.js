import React from "react";
import "./../styles/communityDetails.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Footer from "./Footer/Footer";

export default function CommunityDetails() {

  const productData1 = [
    {
      id: 1,
      imageurl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",
      name: "Adithya",
      description: "CHAIRPERSON",
    },
    {
      id: 2,
      imageurl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",
      name: "Adithya",
      description: "CHAIRPERSON",
    },
    {
      id: 3,
      imageurl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",
      name: "Indudini",
      description: "CHAIRPERSON",
    },
    {
      id: 4,
      imageurl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",
      name: "Adithya",
      description: "CHAIRPERSON",
    },
    {
      id: 5,
      imageurl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",
      name: "Adithya",
      description: "CHAIRPERSON",
    },
    {
      id: 6,
      imageurl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",
      name: "Adithya",
      description: "CHAIRPERSON",
    }
    
  ];


  const productData2 = [
    {
      id: 7,
      imageurl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",
      name: "Adithya",
      description: "CHAIRPERSON",
    },
    {
      id: 8,
      imageurl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",
      name: "Indudini",
      description: "CHAIRPERSON",
    },
    {
      id: 9,
      imageurl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",
      name: "Adithya",
      description: "CHAIRPERSON",
    },
    {
      id: 10,
      imageurl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",
      name: "Adithya",
      description: "CHAIRPERSON",
    },
    {
      id: 11,
      imageurl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",
      name: "Adithya",
      description: "CHAIRPERSON",
    }
    
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  

  return (
    <div>
      <div class="community-section">
        <div class="community-introduction">
          <h1 className="our-community">Our <span>Community</span></h1><br></br>
          {/* <h4 className="best-community">We are the best community..</h4> */}
          
          <p className="paraa">
          IEEE is the world’s largest professional association 
          advancing innovation and technological excellence for the 
          benefit of humanity. IEEE and its members inspire a global 
          community to innovate for a better tomorrow through its highly 
          cited publications, conferences, technology standards, and 
          professional and educational activities. IEEE is the trusted
          “voice” for engineering, computing and technology information
          around the globe..
          </p>
          
        </div>
        {/* <div class="community-image">
          <img src="https://images.inc.com/uploaded_files/image/1920x1080/getty_485914101_122742.jpg" />
        </div> */}
      </div>


      {/* Current board Carousel starts here */}
      <section className="community-details">
        <div className="carousel-container blue-background">
          <h1 className="best-community">Current Executive Board</h1>
          <h3 className="our-community">(2023 - 2024)</h3>
          <Carousel showDots={false} responsive={responsive}>
            {productData1.map((item) => (
              <Product
                key={item.id}
                name={item.name}
                url={item.imageurl}
                description={item.description}
              />
            ))}
          </Carousel>
        </div>

        <br></br>
        <br></br>

        {/* Past board Carousel starts here */}
        <div className="carousel-container blue-background">
          <h1 className="best-community">Past Executive Board</h1>
          <h3 className="our-community">(2022 - 2023)</h3>
          <Carousel showDots={false} responsive={responsive}>
            {productData2.map((item) => (
              <Product
                key={item.id}
                name={item.name}
                url={item.imageurl}
                description={item.description}
              />
            ))}
          </Carousel>
        </div>
      </section>
      <Footer />
    </div>
  );
}

function Product(props) {
  const styles = {
    name: {
      color: '#00629b',
      fontSize: '32px',
      fontFamily: 'Times New Roman, serif',
      fontWeight: 'bold',
    },
    
    description: {
      color: '#E87722',
      fontSize: '24px',
      fontFamily: 'Times New Roman, serif',
      fontWeight: 'bold',
    },
    line: {
      border: '1px solid #00629b', // Set the border style to solid and the color to #00629b
    },
  };

  // You can adjust the line hardness dynamically by passing a `lineHardness` prop
  // if (props.lineHardness) {
  //   styles.line.border = `${props.lineHardness}px solid blue`;
  // }

  return (
    <div className="card">
      <img className="product-image" src={props.url} alt="product" />
      <h2 style={styles.name}>{props.name}</h2>
      <hr style={styles.line} />
      <p style={styles.description}>{props.description}</p>
    </div>
  );
}

