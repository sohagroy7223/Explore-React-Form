const SimpleInput = () => {
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
  };

  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input type="text" name="name" placeholder="enter your name" />
        <br />
        <input type="email" name="email" placeholder="enter your name" />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default SimpleInput;
