import css from "./App.module.css";
// import NavBarSimple from "./components/NavBarSimple";
import Sidebar from "./components/Sidebar";
import NavBarForm from "./components/NavBarForm";
//import Content from "./components/Content";
import ContentAPI from "./components/ContentAPI";
//import ContentHooks from "./components/ContentHooks";
import { SearchBar } from "./components/SearchBar";

function App() {
  return (
    <div className={css.App}>
      <NavBarForm />
      <SearchBar />
      <Sidebar />
     { /*<ContentHooks />*/}
     <ContentAPI />
    </div>
  );
}

export default App;