import { useState } from "react";

import ArrowRight from "~/common/icons/arrow-right";
import Flame from "~/common/icons/flame";

import style from "./styles/light.module.scss";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (key: string, value: string) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.name && form.email) {
      console.log(form);
      setForm({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <form
      id="Оставить заявку"
      onSubmit={handleSubmit}
      className={style.contactFormWrapper}
    >
      <input
        value={form.name}
        onChange={(e) => handleChange("name", e.target.value)}
        placeholder="Имя *"
        className={style.inputForm}
      />
      <input
        value={form.email}
        placeholder="Email *"
        onChange={(e) => handleChange("email", e.target.value)}
        className={style.inputForm}
      />
      <textarea
        value={form.message}
        onChange={(e) => handleChange("message", e.target.value)}
        placeholder="Ваше сообщение"
        className={style.textareaForm}
      />
      <button type="submit" className={style.buttonForm}>
        <span>Оставить заявку</span>
        <ArrowRight />
        <div className={style.flame1}>
          <Flame width={15} opacity={0.8} />
        </div>
        <div className={style.flame2}>
          <Flame width={15} opacity={0.8} />
        </div>
        <div className={style.flame3}>
          <Flame width={15} opacity={0.8} />
        </div>
      </button>
    </form>
  );
};

export default ContactForm;
