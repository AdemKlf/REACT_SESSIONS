import { useState } from "react";

const Form = () => {
  // const [username, setUsername] = useState("Mehmet");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); //! Submit in default davranışı olan refresh ve value silme işlemlerini durdurur. Bu işlmden sonra value silme işlemi ise setUsername("");setEmail("");setPassword(""); ile sıfırlanarak silinir.
    console.log(e.target);
    console.log("Submitted");
    alert(` 
    `);
    setUsername("");
    setEmail("");
    setPassword("");
  };

  const handleUsername = (e) => {
    console.log(e.target.value);
    setUsername(e.target.value);
  };
  //?Bootstrap den büyük kod aldıgimizda html to jsx compiler da dönüştürme yapilabilir.
  return (
    <form onSubmit={handleSubmit}>
      <h1 className="display-5 text-danger">FORMS</h1>

      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username: <span className="text-danger">{username}</span>
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          value={username}
          onChange={handleUsername} //!value kullanildiginde onChange kullandığımız değişkenin değerinin değişmesi için kullanilir.
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email: <span className="text-danger">{email}</span>
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
