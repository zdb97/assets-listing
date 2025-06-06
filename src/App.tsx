import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound";

// testing lazy load for 1 second delay
const Movies = React.lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return import("./pages/Movies");
});

const Series = React.lazy(() => import("./pages/Series"));

const Loading = () => (
  <div className="loading" data-testid="loading">
    ......loading......
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/movies"
          element={
            <Suspense fallback={Loading()}>
              <Movies />
            </Suspense>
          }
        />
        <Route
          path="/Series"
          element={
            <Suspense fallback={Loading()}>
              <Series />
            </Suspense>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
