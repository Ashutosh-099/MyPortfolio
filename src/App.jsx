import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import data from "./utils/data.json";

function App() {
  return (
    <div className="layout-container">
      <Header headerData={data["header"]} />
      <Body
        introductionText={data["introduction"]["text"]}
        skillsDesc={data["skills"]["description"]}
        skills={data["skills"]["skillList"]}
      />
      <Footer />
    </div>
  );
}

export default App;
