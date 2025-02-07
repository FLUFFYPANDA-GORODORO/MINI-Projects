import React from "react";

function Images() {
  return (
    <div className="w-full h-[70vh] sm:h-[100vh] bg-white flex justify-center items-center overflow-hidden">
      <div className="w-[40%] sm:w-[20%] sm:h-[70%] relative">
        <div className="absolute w-28 h-28  sm:w-40 h-[15rem] -right-1/3 top-6 ">
          <img
            className="w-full object-full object-cover"
            src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/1200x1703/filters:quality(90)"
            alt=""
          />
        </div>
        <div className="absolute w-[9rem] aspect-video -left-1/3 sm:w-[90%] -left-2/3  top-1/3  ">
          <video
            className="w-full object-full object-cover"
            autoPlay muted loop src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"
          ></video>
        </div>
        <div className="absolute w-[10rem] sm:w-[80%] aspect-video -left-[65%] -bottom-8  ">
          <img
            className="w-full object-full object-cover"
            src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/1200x804/filters:quality(90)"
            alt=""
          />
        </div>
        <div className="absolute w-[10rem] sm:w-[80%] aspect-[1.5/1] -right-[60%] -bottom-16   ">
          <video
            className="w-full object-full object-cover"
            autoPlay muted loop src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4"
          ></video>
        </div>
        <img
          className="w-full h-full object-cover"
          src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/1200x2050/filters:quality(90)"
          alt=""
        />
      </div>
    </div>
  );
}

export default Images;
