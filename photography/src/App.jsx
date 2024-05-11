import logo from "./logo.svg";
import "./App.css";
import MyanmarImg from "./assets/pano1.jpg";

const reactDescriptions = ["Travel", "Landscape", "Sports"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function PortfolioSelect() {
  return (
    <li>
      <img src=".." alt=".." />
      <h3>Title</h3>
      <p>Description</p>
    </li>
  );
}

function Header() {
  const description = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <h1>Jordan Urbany Photography</h1>
      <p>{description} Photography </p>
      <img src={MyanmarImg} alt="pano1" className="fullWidthImage" />
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="PortfolioSelect">
          <h2>Portfolios</h2>
          <ul>
            <PortfolioSelect title="New Zealand" description="hyperlink" />
            <PortfolioSelect title="Thailand" description="hyperlink" />
            <PortfolioSelect title="Laos" description="hyperlink" />
            <PortfolioSelect title="Vietnam" description="hyperlink" />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
