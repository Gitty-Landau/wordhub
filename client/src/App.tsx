import { Route, Routes } from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "./features/Home";
import ComingSoon from "./components/ComingSoon";
import NotFound from "./components/NotFound";
import Dictionary from "./features/Dictionary";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/dictionary" element={<Dictionary />} />
        <Route path="/thesaurus" element={<ComingSoon />} />
        <Route path="/enhance" element={<ComingSoon />} />
        <Route path="/*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
