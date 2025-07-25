import { useState, createContext, useEffect } from "react";
import axios from "axios";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const url = "http://localhost:3000/posts";

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const handleSetFeedbackEdit = (item) => {
    setFeedbackEdit({ item, edit: true });
  };

  const handleAddText = async (text) => {
    setLoading(true);
    const newFeedback = { text: text.text };

    try {
      // Axios version
      const response = await axios.post(url, newFeedback);
      fetchFeedbackFromJSON();
      console.log(response);

      // Fetch version:
      // const response = await fetch(url, {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(newFeedback),
      // });
      // if (!response.ok) throw new Error("Failed to add feedback");
      // fetchFeedbackFromJSON();
    } catch (error) {
      console.error("Add Error:", error);
      alert("Something went wrong while adding feedback.");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteClick = () => {
    setShow(true);
  };

  const handleDelete = async (id) => {
    setLoading(true);
    try {
      // Axios version
      const response = await axios.delete(`${url}/${id}`);
      fetchFeedbackFromJSON();

      // Fetch version:
      // const response = await fetch(`${url}/${id}`, { method: "DELETE" });
      // if (!response.ok) throw new Error("Failed to delete");
      // fetchFeedbackFromJSON();
    } catch (error) {
      console.error("Delete Error:", error);
      alert("Something went wrong while deleting feedback.");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateText = async (id, newText) => {
    const updatedFeedback = { text: newText.text };
    setLoading(true);

    try {
      // Axios version
      const response = await axios.put(`${url}/${id}`, updatedFeedback);
      setFeedbackEdit({ item: {}, edit: false });
      fetchFeedbackFromJSON();

      // Fetch version:
      // const response = await fetch(`${url}/${id}`, {
      //   method: "PUT",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(updatedFeedback),
      // });
      // if (!response.ok) throw new Error("Failed to update");
      // setFeedbackEdit({ item: {}, edit: false });
      // fetchFeedbackFromJSON();
    } catch (error) {
      console.error("Update Error:", error);
      alert("Something went wrong while updating feedback.");
    } finally {
      setLoading(false);
    }
  };

  const fetchFeedbackFromJSON = async () => {
    setLoading(true);
    try {
      // Axios version
      const response = await axios.get(url);
      setFeedback(response.data);

      // Fetch version:
      // const response = await fetch(url);
      // const data = await response.json();
      // setFeedback(data);
    } catch (error) {
      console.error("Fetch Error:", error);
      alert("Something went wrong while fetching data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeedbackFromJSON();
  }, []);

  const onClick = (id) => {
    setShow(false);
    handleDelete(id);
  };

  const onCancel = () => {
    setShow(false);
  };

  return (
    <FeedbackContext.Provider
      value={{
        loading,
        feedback,
        handleDelete,
        handleAddText,
        handleSetFeedbackEdit,
        handleUpdateText,
        feedbackEdit,
        setFeedbackEdit,
        handleDeleteClick,
        show,
        onCancel,
        onClick,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
