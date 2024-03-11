import "../css/login.css";
import useForm from "../hooks/useForm";

function Login() {
  const { error, setPass, setUser, submitForm } = useForm();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const fields = Object.fromEntries(new window.FormData(event.currentTarget));

    setPass(fields.pass.toString());
    setUser(fields.user.toString());
    submitForm();
  }

  return (
    <section className="login">
      <article className="login__container">
        <form
          onSubmit={handleSubmit}
          actilogin__container--form-erroron=""
          className="login__container--form"
        >
          <h1>Login</h1>
          <div className="login__container--form-item">
            <label htmlFor="user">Usuario</label>
            <input type="text" name="user" id="user" autoComplete="off" />
          </div>
          <div className="login__container--form-item">
            <label htmlFor="pass">Contraseña</label>
            <input type="password" name="pass" id="pass" autoComplete="off" />
          </div>
          <div className="login__container--form-error">
            {error ? error : ""}
          </div>
          <button>Login</button>
        </form>
      </article>
    </section>
  );
}

export default Login;
