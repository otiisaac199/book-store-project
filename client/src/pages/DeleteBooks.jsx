import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const DeleteBooks = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const deleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate("/ ");
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        alert("An error occurred while deleting");
      });
  };

  return (
    <div className="p-4 ">
      <BackButton />
      <h1 className="text-3xl my-4">Delete Book </h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-3xl">Are You Sure You want to delete this Book?</h3>
        <button
          className="p-4 bg-red-600 text-white m-8 w-full"
          onClick={deleteBook}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  );
};

export default DeleteBooks;
