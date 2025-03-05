import {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { Link } from "react-router-dom";
import InputMask from "@mona-health/react-input-mask";

import Cross from "~/common/icons/cross";
import File from "~/common/icons/file";
import Trash from "~/common/icons/trash";
import Pdf from "~/common/icons/pdf";

import FormImage from "~/common/assets/form-image.webp";
import SendImage from "~/common/assets/send-image.webp";
import style from "./styles/light.module.scss";
interface IContactForm {
  setContactForm: Dispatch<SetStateAction<boolean>>;
}

interface IForm {
  name: string;
  email: string;
  phone: string;
  model: string;
  file: null | File;
}

const ContactForm: FC<IContactForm> = ({ setContactForm }) => {
  const inputPreviewRef = useRef<HTMLInputElement | null>(null);
  const [form, setForm] = useState<IForm>({
    name: "",
    email: "",
    phone: "",
    model: "",
    file: null,
  });
  const [error, setError] = useState({
    name: true,
    email: true,
    phone: true,
  });
  const [previewError, setPreviewError] = useState(false);
  const [isSend, setIsSend] = useState(false);

  useEffect(() => {
    if (previewError && !Object.values(error).includes(true)) {
      setPreviewError(false);
    }
  }, [previewError, error]);

  function fileNameLimit(fileName: string) {
    return fileName.length > 10
      ? `... ${fileName.slice(fileName.length - 15, fileName.length)}`
      : fileName;
  }

  const handleChange = (
    key: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value, dataset } = e.target;
    const formattedValue = value.replace(/\s/g, "");

    const matchValue = dataset.pattern
      ? !new RegExp(dataset.pattern).test(formattedValue)
      : value.length == 0;

    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
    setError((prev) => ({
      ...prev,
      [key]: matchValue,
    }));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = (event.target as HTMLInputElement).files![0];
    if (!file) return;

    setForm((prev) => ({
      ...prev,
      file: file,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPreviewError(true);

    if (!Object.values(error).includes(true)) {
      console.log(form);

      setForm({
        name: "",
        email: "",
        phone: "",
        model: "",
        file: null,
      });
      setIsSend(true);
    }
  };

  return (
    <>
      {isSend ? (
        <div className={style.sendedFormWrapper}>
          <div
            className={style.formBackground}
            style={{ backgroundImage: `url(${SendImage})` }}
          ></div>
          <div className={style.titleWrapper}>
            <span>Ваша заявка отправлена!</span>
            <span>Наш менеджер свяжется с вами в ближайшее время.</span>
          </div>
          <div
            onClick={() => setContactForm((prev) => !prev)}
            className={style.cross}
          >
            <Cross width={16} height={16} color="#060606" />
          </div>
        </div>
      ) : (
        <div className={style.contactFormContainer}>
          <div
            className={style.formBackground}
            style={{ backgroundImage: `url(${FormImage})` }}
          ></div>
          <form
            id="Оставить заявку"
            onSubmit={handleSubmit}
            className={style.contactFormWrapper}
          >
            <div className={style.formWrapper}>
              <div className={style.formTitle}>Оставить заявку</div>
              <div className={style.formInputs}>
                <div className={style.inputContainer}>
                  <label
                    className={`${style.inputLabel} ${
                      previewError && error.name && style.labelError
                    }`}
                  >
                    Имя*
                  </label>
                  <input
                    value={form.name}
                    onChange={(e) => handleChange("name", e)}
                    className={`${style.inputForm} ${
                      previewError && error.name && style.inputError
                    }`}
                  />
                  {previewError && error.name && (
                    <span className={style.error}>Обязательное поле</span>
                  )}
                </div>
                <div className={style.inputContainer}>
                  <label
                    className={`${style.inputLabel} ${
                      previewError && error.email && style.labelError
                    }`}
                  >
                    E-mail*
                  </label>
                  <input
                    type="email"
                    inputMode="email"
                    data-pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                    // pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                    value={form.email}
                    onChange={(e) => handleChange("email", e)}
                    className={`${style.inputForm} ${
                      previewError && error.email && style.inputError
                    }`}
                  />
                  {previewError && error.email && (
                    <span className={style.error}>Обязательное поле</span>
                  )}
                </div>
                <div className={style.inputContainer}>
                  <label
                    className={`${style.inputLabel} ${
                      previewError && error.phone && style.labelError
                    }`}
                  >
                    Номер телефона*
                  </label>
                  <InputMask
                    mask={`${
                      form.phone?.slice(0, 2).includes("8")
                        ? "9 ( 999 ) 999 - 99 - 99"
                        : "+9 ( 999 ) 999 - 99 - 99"
                    }`}
                    inputMode="numeric"
                    data-pattern={
                      form.phone?.slice(0, 2).includes("8")
                        ? "\\d\\(\\d{3}\\)\\d{3}-\\d{2}-\\d{2}"
                        : "\\+\\d\\(\\d{3}\\)\\d{3}-\\d{2}-\\d{2}"
                    }
                    // pattern={
                    //   form.phone?.slice(0, 2).includes("8")
                    //     ? "\\d\\(\\d{3}\\)\\d{3}-\\d{2}-\\d{2}"
                    //     : "\\+\\d\\(\\d{3}\\)\\d{3}-\\d{2}-\\d{2}"
                    // }
                    value={form.phone}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleChange("phone", e)
                    }
                    className={`${style.inputForm} ${
                      previewError && error.phone && style.inputError
                    }`}
                  />
                  {previewError && error.phone && (
                    <span className={style.error}>Обязательное поле</span>
                  )}
                </div>
                <div className={style.inputContainer}>
                  <label className={style.inputLabel}>
                    Марка и модель автомобиля
                  </label>
                  <input
                    value={form.model}
                    onChange={(e) => handleChange("model", e)}
                    className={style.inputForm}
                  />
                </div>
                <div className={style.dividerWrapper}>
                  <div></div>
                  <span>или загрузите файл из конфигуратора</span>
                </div>
                <input
                  type="file"
                  accept="application/pdf,application/docx"
                  onChange={(e) => handleImageUpload(e)}
                  ref={inputPreviewRef}
                  style={{ display: "none" }}
                />
                <button
                  type="button"
                  onClick={() => inputPreviewRef.current?.click()}
                  className={style.selectFile}
                >
                  <span>Выберите файл</span>
                </button>
                {form.file && (
                  <div className={style.fileInfo}>
                    <div>
                      {form.file.type == "application/pdf" ? <Pdf /> : <File />}
                      <div className={style.fileName}>
                        {fileNameLimit(form.file.name)}
                      </div>
                    </div>
                    <div>
                      <div className={style.fileSize}>
                        {`${form.file.size}КБ`}
                      </div>
                      <div
                        className={style.trash}
                        onClick={() =>
                          setForm((prev) => ({
                            ...prev,
                            file: null,
                          }))
                        }
                      >
                        <Trash />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className={style.bottonFormWrapper}>
              <div>
                <span>Нажимая на кнопку, вы соглашаетесь с </span>
                <Link to="/policy">политикой конфиденциальности.</Link>
              </div>
              <button type="submit" className={style.buttonForm}>
                <span>Отправить заявку</span>
              </button>
            </div>
            <div
              onClick={() => setContactForm((prev) => !prev)}
              className={style.cross}
            >
              <Cross width={16} height={16} color="#060606" />
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ContactForm;
