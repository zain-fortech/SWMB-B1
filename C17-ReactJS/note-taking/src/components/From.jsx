import React, { useState } from "react";
import Input from "./Input";

function Form({ onSubmit }) {
  const [formData, setFormData] = useState({
    title: "",
    detail: "",
  });

  const onChange = (key, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: value,
    }));
  };

  return (
    <form class="inputs-wrapper">
      <Input
        id="title"
        type="text"
        placeholder="Title"
        onChange={(value) => onChange("title", value)}
        value={formData.title}
      />
      <Input
        id="detail"
        type="text"
        placeholder="Detail"
        onChange={(value) => onChange("detail", value)}
        value={formData.detail}
      />

      <button
        id="add-note"
        onClick={(e) => {
          e.preventDefault();

          onSubmit(formData.title, formData.detail);
        }}
      >
        Add Note
      </button>
    </form>
  );
}

export default Form;
