import { useEffect, useState, useRef } from "react";
import ImageBox from "./imagebox";
import image1 from "../assests/1.jpg";
import image2 from "../assests/2.jpg";
import image3 from "../assests/3.jpg";
import image4 from "../assests/4.jpg";
import image5 from "../assests/1.jpg";
import image6 from "../assests/2.jpg";

function Homepage() {

  const learnMoreRef = useRef(null); 

  useEffect(() => {
    if (learnMoreRef.current) {
      learnMoreRef.current.focus(); 
    }
  }, []);

  const timerRef = useRef(null);

  const states = [
    { number: "1.3", label: "BILLION", description: "AUTHORIZED CAPITAL" },
    { number: "9", label: "MILLION", description: "LAND BANK" },
    { number: "500", label: "THOUSAND", description: "GLOBAL MARKET" },
    { number: "50", label: "MILLION", description: "TECH INDUSTRY" },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % states.length);
    }, 3000);

    return () => clearInterval(timerRef.current);
  }, []);

  


  const images = [
    { image: image1 },
    { image: image2 },
    { image: image3 },
    { image: image4 },
    { image: image5 },
    { image: image6 },
  ];

  const current = states[index];

  return (
    <>
      <section className="homepage "></section>

      <section className="multiple-images">
        <section className="py-5">
          <h1 className="text-white text-center">A PLACE TO CALL HOME</h1>
          <hr className="line " />
          <div className="image-containers mt-5">
            {images.slice(0, 3).map((data, index) => (
              <ImageBox key={index} image={data.image} />
            ))}
          </div>
          <div className="image-containers mt-2">
            {images.slice(3, 6).map((data, index) => (
              <ImageBox key={index} image={data.image} />
            ))}
          </div>
        </section>
      </section>

      <section className="allinform d-flex flex-row ">
        <div className="informations d-flex flex-column w-50 px-5 align-items-start col-12 col-md-6">
          <h3 className="">
            Since its inception in 2014, Tatweer Misr has been a vital catalyst
            for change, delivering incomparable value through exemplary projects
            that master all facets of development
          </h3>
          <hr className="line text-black mb-3" />
          <p className="mb-5">
            Boasting a wealth of industrial and technical expertise, Tatweer
            Misr has been offering an innovative outlook on integrated living to
            strongly emerge as a leading real-estate developer in Egypt,
            fulfilling the rising demand on mixed-use projects that enrich the
            life of its communities.
          </p>
          <button className="learn-btn py-2 w-50"
          ref={learnMoreRef}>
            LEARN MORE
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              className="bi bi-arrow-right mx-5"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 
              .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 
              8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>
          </button>
        </div>

        <div className="price text-center w-50 px-5 col-12 col-md-6">
          <h5 className="text-center mt-5">FACTS&FIGURE</h5>
          <div className="pay text-white text-center mb-5">
            <h1 className="mb-3 fw-bold">{current.number}</h1>
            <h2 className="mb-3 fw-bold">{current.label}</h2>
            <h4 className="authorized-capital">{current.description}</h4>
          </div>
          <button className="brochure py-2 fw-bold">DOWNLOAD BROCHURE</button>
        </div>
      </section>
    </>
  );
}

export default Homepage;
