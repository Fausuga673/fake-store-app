import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useForm() {
  const [error, setError] = useState<string | null>(null);
  const [pass, setPass] = useState<string>("");
  const [user, setUser] = useState<string>("");
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (formSubmitted) {
      if (pass === "" || user === "") {
        setError("Complete all fields.");
        return;
      }

      if (pass.length < 6 || pass.length > 12) {
        setError("The password must be between 6 and 12 characters");
        return;
      }

      if (user.length > 20) {
        setError("Username must be less than 20 characters.");
        return;
      }

      setError(null);

      // si no hay errores, entra a la página principal y guarda el usuario en el local storage.
      localStorage.setItem("user", user.toString())
      navigate('/') 
    }
  }, [user, pass, formSubmitted]);

  const submitForm = () => {
    setFormSubmitted(true);
  };

  return { error, setPass, setUser, submitForm };
}