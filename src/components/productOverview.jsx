import StarRating from "./starRating";

export default function ProductOverview() {
  const imgLinks = ["https://via.placeholder.com/300x300", "https://via.placeholder.com/300x300", "https://via.placeholder.com/300x300", "https://via.placeholder.com/300x300"];
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
  return (
    <div className="bg-white p-16 grid grid-cols-3 gap-4">
      <div className="w-96 h-96 border-green-9 border-solid border-2 bg-green-5 rounded-lg relative">
        <img
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          src={imgLinks[0]}
        />
        <div className="flex">
          {imgLinks.map(link => <img src={link} className="w-44" />)}
        </div>
      </div>
      <div className="w-210 h-auto border-green-9 border-solid border-2 rounded-lg relative p-8">
        <h1 className="text-4xl font-700">{productName}</h1>
        <StarRating />
        {`${reviewCount} reviews`}
        <ul className="px-12">
          {productSpecification.map((specificattion, idx) =>
            <li className="list-disc" key={idx}>{specificattion}</li>
          )}
        </ul>

      </div>
    </div>
  );
}
