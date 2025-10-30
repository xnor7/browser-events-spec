import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import ThemeToggle from "./components/theme/Theme";
import UserInterectionEvents from "./components/Events/UserInterectionEvents/UserInterectionEvents";
import GithubIcon from "./components/Github/Github";

function MainContent({ state, styles }) {

  return (
    <main id="main" style={{ ...styles }}>
      <Header state={state} />
      {/* <ThemeToggle /> */}
      <GithubIcon />
      <UserInterectionEvents />
    </main>
  )
}


export default function App() {
  const [showSidebar, setShowSidebar] = useState(() => {
    return parseInt(localStorage.getItem('showSidebar'))
  });
  useEffect(() => {
    localStorage.setItem('showSidebar', Number(showSidebar | 0) || 0);
  }, [showSidebar])
  return (
    <div id='app-wrapper'>
      <Sidebar state={{ set: setShowSidebar, get: showSidebar }} />
      <MainContent state={{ set: setShowSidebar, get: showSidebar }} styles={{ ...(!showSidebar ? { marginLeft: 0 } : {}) }} />
    </div>
  )
}