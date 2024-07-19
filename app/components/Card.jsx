import Image from "next/image";
export default function Card({ image, title, text }) {
  console.log(image, title, text);
  return (
    <div className="card">
      <div>
        <img className="card-img" src={image} alt="image" />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
