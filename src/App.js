import logo from "./logo.svg";
import "./App.css";
import ImageSlider from "./components/ImageSlider";

function App() {
  return (
    <div className="App">
      <ImageSlider url={"https://picsum.photos/v2/list"} limit={10} />
    </div>
  );
}

export default App;
