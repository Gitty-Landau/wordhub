import { Route, Routes } from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "./features/Home";
import NotFound from "./components/NotFound";
import Dictionary from "./features/Dictionary";
import Thesaurus from "./features/Thesaurus";
import Enhance from "./features/Enhance";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/dictionary" element={<Dictionary />} />
        <Route path="/thesaurus" element={<Thesaurus />} />
        <Route path="/enhance" element={<Enhance />} />
        <Route path="/*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
