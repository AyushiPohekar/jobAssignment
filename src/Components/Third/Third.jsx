import React, { useRef } from "react";
import "./Third.css";

const Third = () => {
    const scrollRef = useRef(null);

    const scrollLeft = () => {
      scrollRef.current.scrollBy({
        left: -100,
        behavior: 'smooth'
      });
    };
  
    const scrollRight = () => {
      scrollRef.current.scrollBy({
        left: 100,
        behavior: 'smooth'
      });
    };

 
  return (
    <>
    <div className="FourthMaindiv">
       <div className="scroll-container" ref={scrollRef}>
      <div className="scroll-content">
          <div className="imageDiv">
            <p className="firstp">Parsley Seed Skin Care</p>
            <h4>Fortification of the highest order</h4>
            <p className="secondp">
              Our Parsley Seed Skin Care range provides potent doses of
              .
            </p>
            <p>Explore the range</p>
          </div>
          <div className="imagesrollbardiv">
            <img src="https://www.aesop.com/u1nb1km7t5q7/4fclKcB1FNLpV5wHmZkAQ6/c6c62862184703d834efbc07077b86cb/Aesop_Skin_Parsley_Seed_Anti-Oxidant_Eye_Cream_10mL_Web_Large_901x478px.png"/>
          <p>text</p>
          
          </div>
          <div className="imagesrollbardiv">
            <img src="https://www.aesop.com/u1nb1km7t5q7/4fclKcB1FNLpV5wHmZkAQ6/c6c62862184703d834efbc07077b86cb/Aesop_Skin_Parsley_Seed_Anti-Oxidant_Eye_Cream_10mL_Web_Large_901x478px.png"/>
          <p>text</p>
          
          </div>
          <div className="imagesrollbardiv">
            <img src="https://www.aesop.com/u1nb1km7t5q7/4fclKcB1FNLpV5wHmZkAQ6/c6c62862184703d834efbc07077b86cb/Aesop_Skin_Parsley_Seed_Anti-Oxidant_Eye_Cream_10mL_Web_Large_901x478px.png"/>
          <p>text</p>
          
          </div>
          <div className="imagesrollbardiv">
            <img src="https://www.aesop.com/u1nb1km7t5q7/4fclKcB1FNLpV5wHmZkAQ6/c6c62862184703d834efbc07077b86cb/Aesop_Skin_Parsley_Seed_Anti-Oxidant_Eye_Cream_10mL_Web_Large_901x478px.png"/>
          <p>text</p>
          
          </div>
          <div className="imagesrollbardiv">
            <img src="https://www.aesop.com/u1nb1km7t5q7/4fclKcB1FNLpV5wHmZkAQ6/c6c62862184703d834efbc07077b86cb/Aesop_Skin_Parsley_Seed_Anti-Oxidant_Eye_Cream_10mL_Web_Large_901x478px.png"/>
          <p>text</p>
          
          </div>
          <div className="imagesrollbardiv">
            <img src="https://www.aesop.com/u1nb1km7t5q7/4fclKcB1FNLpV5wHmZkAQ6/c6c62862184703d834efbc07077b86cb/Aesop_Skin_Parsley_Seed_Anti-Oxidant_Eye_Cream_10mL_Web_Large_901x478px.png"/>
          <p>text</p>
          
          </div>
          <div className="imagesrollbardiv">
            <img src="https://www.aesop.com/u1nb1km7t5q7/4fclKcB1FNLpV5wHmZkAQ6/c6c62862184703d834efbc07077b86cb/Aesop_Skin_Parsley_Seed_Anti-Oxidant_Eye_Cream_10mL_Web_Large_901x478px.png"/>
          <p>text</p>
          
          </div>
          <div className="imagesrollbardiv">
            <img src="https://www.aesop.com/u1nb1km7t5q7/4fclKcB1FNLpV5wHmZkAQ6/c6c62862184703d834efbc07077b86cb/Aesop_Skin_Parsley_Seed_Anti-Oxidant_Eye_Cream_10mL_Web_Large_901x478px.png"/>
          <p>text</p>
          
          </div>
         
        </div>
      </div>

     
      </div>
    </>
  );
};

export default Third;
