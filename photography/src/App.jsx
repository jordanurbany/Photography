import "./components/header/Header.css";
import Header from "./components/header/Header.jsx";

function PortfolioSelect() {
  return (
    <li>
      <img src=".." alt=".." class="" />
      <h3>Title</h3>
      <p>Description</p>
    </li>
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
