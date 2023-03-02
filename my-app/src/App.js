import css from "./App.module.css";
// import NavBarSimple from "./components/NavBarSimple";
import Sidebar from "./components/Sidebar";
import NavBarForm from "./components/NavBarForm";
import Content from "./components/Content";
import ContentHooks from "./components/ContentHooks";
import { SearchBar } from "./components/SearchBar";

function App() {
  return (
    <div className={css.App}>
      <NavBarForm />
      <SearchBar />
      <Sidebar />
      <ContentHooks />
    </div>
  );
}

export default App;