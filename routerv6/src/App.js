//npm i react-router-dom
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home"
import About from "./components/About"
import Nav from "./components/Nav"
import BooksList from "./components/BooksList";
import Book from "./components/Book";
import NotFound from "./components/NotFound"

function App() {
  return (
      <div className="App">
        <h1>Hello this is my tutorial to React Router V6</h1>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          
          {/* <Route path="/books" element={<BooksList/>}></Route>
          <Route path="/books/:id" element={<Book/>}></Route> */}

          {/* Nested Routes */}

          <Route path="/books">
            <Route index element={<BooksList />}></Route>
            <Route path=":id" element={<Book />}></Route>
          </Route>

          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
  );
}

export default App;