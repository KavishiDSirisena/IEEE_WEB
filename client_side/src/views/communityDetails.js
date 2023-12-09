import React from "react";
import "./../styles/communityDetails.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
      name: "Indudini",
      description: "CHAIRPERSON",
    },
    {
      id: 3,
      imageurl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",
      name: "Adithya",
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
    },
    
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
    },
    {
      id: 12,
      imageurl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",
      name: "Adithya",
      description: "CHAIRPERSON",
    },
    
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
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
    <div className="community-details">
      <h1>Current Executive Board</h1>
      <h3>(2023 - 2024)</h3>
      <Carousel showDots={true} responsive={responsive}>
        {productData1.map((item) => (
          <Product
            key={item.id}
            name={item.name}
            url={item.imageurl}
            description={item.description}
          />
        ))}
        </Carousel>

        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <h1>Past Executive Board</h1>
      <h3>(2022 - 2023)</h3>
<Carousel showDots={true} responsive={responsive}>
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
  );
}

function Product(props) {
  return (
    <div className="card">
      <img className="product-image" src={props.url} alt="product" />
      <h2>{props.name}</h2>
      <p>{props.description}</p>
    </div>
  );
}
