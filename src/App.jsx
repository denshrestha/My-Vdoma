import { Routes, Route, useLocation } from "react-router-dom";
import MainLayout from "./Layouts/main-layout";
import Home from "./pages/Home";
import Requisites from "./pages/Requisites";
import ThankYou from "./pages/ThankYou";
import { useEffect, useState } from "react";
import { useDebounce } from "./hooks/useDebounce";
import { useScrollTo } from "./hooks/useScrollTo";


function App() {
  const [clickable, setClickable] = useState();
    
  const location = useLocation()

  useEffect(() => {
      const allWithClass = Array.from(document.getElementsByClassName('is-clickable'));
      setClickable(allWithClass);
  }, []);

  useEffect(() => {
    if(location.hash) {
        const elementId = location.hash.slice(1)
        useScrollTo(elementId)
    }
  }, [location])


  const hide = useDebounce(() => {
      clickable.map(block => 
          block.className = block.className.replace(' active-clickable', '')
      );
  }, 1000);

  const isClickable = e => {
      const allWithClass = Array.from(document.getElementsByClassName('is-clickable'));
      setClickable(allWithClass);

      if (e.target.className.includes('is-clickable')) {
          return;
      } else {
          clickable.map(block => 
              !block.className.includes('active-clickable') ?
              (block.className += ' active-clickable')
                  : (block.className += '')
          );
      }
      hide();
  };
  return (
    <div className="App" onClick={e => isClickable(e)}>
       <Routes>
        <Route  path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="requisites" element={<Requisites />} />
            <Route path="thank-you" element={<ThankYou />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
