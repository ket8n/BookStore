import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useSnackbar } from "notistack";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Deleted Successfully.", { variant: "success" });
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        // alert("An error happened. Check Console.");
        enqueueSnackbar("Error", { variant: "error" });
        console.log(err);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4 text-center">Delete Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl ">
          Are You Sure You Want To Delete This Book?
        </h3>
        <button
          className="bg-red-600 rounded-xl p-4 text-white m-8 w-full"
          onClick={handleDeleteBook}
        >
          Yes, Delete It
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;
