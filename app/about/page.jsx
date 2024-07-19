import Card from "../components/Card";

const data = {
  Rader1: [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdjIWYAbvfnUjUpRFO53I9ToVYGpeWlUVO6g&s",
      title: "Kamen Rader",
      text: "He is a very good boy",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdjIWYAbvfnUjUpRFO53I9ToVYGpeWlUVO6g&s",
      title: "Kamen Rader",
      text: "He is a very good boy",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdjIWYAbvfnUjUpRFO53I9ToVYGpeWlUVO6g&s",
      title: "Kamen Rader",
      text: "He is a very good boy",
    },
  ],
};

export default function About() {
  const cardData = data.Rader1;

  return (
    <div>
      <h1>About</h1>
      <div className="container">
        <div className="hero">
          <div className="tittle">
            <h1>Bob World</h1>
          </div>
        </div>
      </div>
      <div className="content">
        <h2>Cards</h2>
        <div className="cards">
          {cardData.map((card, cardIdx) => (
            <Card
              key={cardIdx}
              image={card.image}
              title={card.title}
              text={card.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
