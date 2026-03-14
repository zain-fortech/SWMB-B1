import React from "react";
import Input from "./Input";

function Form() {
  return (
    <form class="inputs-wrapper">
      <Input id="title" type="text" placeholder="Title" />
      <Input id="detail" type="text" placeholder="Detail" />

      <button id="add-note">Add Note</button>
    </form>
  );
}

export default Form;
