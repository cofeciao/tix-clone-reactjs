import '../App.css';
import NavBarHeader from "./navBarHeader";
import BannerHeader from "./bannerHeader";
import HomeTools from "./homeTools";
import FilmBlock from "./filmBlock";
function App() {
  return (
    <div className="App">
        <NavBarHeader/>
        <BannerHeader/>
        <HomeTools/>
        <FilmBlock/>
    </div>
  );
}

export default App;
