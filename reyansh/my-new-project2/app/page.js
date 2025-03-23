"use client";
import React, { useState } from "react";
import axios from "axios";

const Page = () => {
  const [Images, setImages] = useState([]);

  const getImages = async () => {
    try {
      const response = await axios.get("https://picsum.photos/v2/list");
      const data = response.data;
      setImages(data);
      console.log(Images);
    } catch (error) {
      console.log("Link not found", error);
    }
  };

  return (
    <div>
      <button
        onClick={getImages}
        className="px-5 py-3 bg-green-800 text-white font-bold"
      >
        Get
      </button>
      <div className="p-10">
        {Images.map((elem, i) => (
          <img
            key={i}
            src={elem.download_url} // Corrected: download_url instead of download-url
            width={300}
            height={300}
            className="m-10 rounded inline-block"
            alt={`Image ${i}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
