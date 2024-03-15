import styles from "../css/form.module.css";
import Button from "./Button";
import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

    const handleSubmit = (event)=>{
        event.preventDefault();
        setName(event.target[0].value)
        setEmail(event.target[1].value)
        setText(event.target[2].value)
        window.alert(`Name:  ${name}   Email:  ${email}   Text:  ${text}`)
    }
    console.log(name,email,text);

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formControll}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name"/>
        </div>
        <div className={styles.formControll}>
          <label htmlFor="email">Email</label>
          <input type="email"  name="email"/>
        </div>
        <div className={styles.formControll}>
          <label htmlFor="text">Text</label>
          <textarea name="text"/>
        </div>
        <div className={styles.submit}>
          <Button type="submit" text="Submit"/>
          </div>
      </form>
    </div>
  );
}

export default Form;
