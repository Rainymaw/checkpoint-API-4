import React from "react";

function Signin() {
  return (
    <form
      action="http://localhost:8000/api/users"
      method="post"
      encType="application/x-www-form-urlencoded"
      className="signin-form"
    >
      <label htmlFor="pseudo">Nickname</label>
      <input type="text" name="name" id="" />
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="" />
      <label htmlFor="password">password</label>
      <input type="password" name="password" id="" />
      <input type="submit" value="sign up" />
    </form>
  );
}

export default Signin;
