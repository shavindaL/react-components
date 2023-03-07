import { useState } from "react";
import StarRating from "./starRating";

export default function ProductOverview() {
  const imgLinks = [
    "https://picsum.photos/id/13/300",
    "https://picsum.photos/id/17/300",
    "https://picsum.photos/id/10/300",
    "https://picsum.photos/id/237/300",
  ];
  const productName = "Dhammika Syrup";
  const reviewCount = 69;
  const productSpecification = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices.",
  ];

  const [mainImg, setMainImg] = useState(imgLinks[0]);
  const [count, setCount] = useState(0);
  return (
    <div className="bg-white p-16 grid grid-cols-3 gap-4">
      <div className="">
        <div className="w-96 h-96 border-green-9 border-solid border-2 bg-green-5 rounded-lg relative mx-auto">
          <img
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            src={mainImg}
          />
        </div>
        <div className="py-2 mt-4 mx-4 border-green-9 border-solid border-2 bg-green-5 rounded-lg">
          <div className="grid grid-cols-4">
            {imgLinks.map((link, idx) => (
              <div
                key={idx}
                className="px-2 w-28 opacity-50 hover:cursor-pointer hover:scale-150 hover:opacity-100 hover:transform transition ease-in-out"
              >
                <img
                  src={link}
                  className="w-44 px-1"
                  onClick={() => setMainImg(imgLinks[idx])}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="w-210 h-auto border-green-9 border-solid border-2 rounded-lg relative p-8">
          <h1 className="text-4xl font-700">{productName}</h1>
          <StarRating />
          {`${reviewCount} reviews`}
          <ul className="px-12">
            {productSpecification.map((specificattion, idx) => (
              <li className="list-disc" key={idx}>
                {specificattion}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-210 h-auto border-green-9 border-solid border-2 rounded-lg my-8">
          <div className="border-solid rounded-full border-green-9 border-2 inline-block p-1 m-2" onClick={()=>setCount(count+1)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width={20}
            >
              {/*Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.*/}
              <path d="M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z" />
            </svg>
          </div>
          <div className="inline-block text-4xl">{count}</div>
          <div className="border-solid rounded-full border-green-9 border-2 inline-block p-1  m-2" onClick={()=>count>0?setCount(count-1):setCount(0)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width={20}
            >
              <path d="M416 256c0 17.7-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
