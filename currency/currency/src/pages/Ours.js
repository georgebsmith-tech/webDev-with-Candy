import React, { useEffect, useState } from "react";

const Photo = ({ photo }) => (
  <li>
    <img src={photo.url} style={{ width: 200 }} />
    <div>
      <div>{photo.id}</div>
    </div>
  </li>
);

export default function Ours() {
  console.log("rendered");
  const [count, setCount] = useState(0);
  const [another, setAnother] = useState(100);
  const [howMany, setHowMany] = useState(20);

  const [photos, setPhotos] = useState([]);
  console.log(photos);

  const inCreaseCount = () => {
    setCount(count + 1);
  };
  const handleAnother = () => {
    setAnother(another * 5);
  };

  //   useEffect(() => {
  //     console.log("inside");
  //   }, []);
  //   useEffect(() => {
  //     console.log("inside");
  //   }, [another]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => setPhotos(data.slice(0, howMany)));
  }, [howMany]);
  //   https://jsonplaceholder.typicode.com/photos
  return (
    <>
      <div onClick={inCreaseCount} style={{ backgroundColor: "red" }}>
        {count}
      </div>
      <div onClick={handleAnother} style={{ backgroundColor: "blue" }}>
        {another}
      </div>
      <div>
        <select value={howMany} onChange={(e) => setHowMany(e.target.value)}>
          {[
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20,
          ].map((n) => (
            <option value={n}>{n}</option>
          ))}
        </select>
      </div>
      <ul style={{ display: "flex", flexWrap: "wrap" }}>
        {photos.map((photo) => (
          <Photo photo={photo} />
        ))}
      </ul>
    </>
  );
}
