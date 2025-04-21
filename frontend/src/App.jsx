import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateBooks from "./pages/CreateBooks";
import ShowBook from "./pages/ShowBook";
import EditBooks from "./pages/EditBooks";
import DeleteBooks from "./pages/DeleteBooks";
import Navbar from "./components/Navbar";

export default function App() {
  
  return (
    <div className=" dark:bg-slate-900 h-screen dark:text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/create" element={<CreateBooks />} />
        <Route path="/books/details/:id" element={<ShowBook />} />
        <Route path="/books/edit/:id" element={<EditBooks />} />
        <Route path="/books/delete/:id" element={<DeleteBooks />} />
      </Routes>
    </div>
  );
}
