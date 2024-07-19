export default function NavBar() {
  return (
    <div>
      <div className="nav">
        <div>
          <a href="Home.html">
            <img
              src="https://www.shutterstock.com/image-vector/bob-letter-original-monogram-logo-600nw-1914288013.jpg"
              width={75}
              height={75}
              alt="Picture of the author"
            />
          </a>
        </div>
        <div>
          <ul className="nav-links">
            <li className="nav-item">
              <a href="/">Home</a>
            </li>
            <li className="nav-item">
              <a href="/about">About</a>
            </li>
            <li className="nav-item">Contact</li>
          </ul>
        </div>
      </div>
      <div className="nav"></div>
    </div>
  );
}
