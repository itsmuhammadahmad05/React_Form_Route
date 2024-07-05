import { Products } from "./pages/products.jsx";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/homePage.jsx";
import { SignUpComponent } from "./pages/signUp.jsx";
import { SignInComponent } from "./pages/signIn.jsx";
import NavBar from "./components/NavBar.jsx";
import Categories from "./pages/categories.jsx";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="products" element={<Products />} />
        <Route path="signup" element={<SignUpComponent />} />
        <Route path="signin" element={<SignInComponent />} />

        <Route path="categories" element={<Categories />} />
        <Route path="products/:categoryName" element={<Products />} />
      </Routes>
    </>
  );
};
export default App;
