import classes from "./Form.module.css";

const Form = () => {
  return (
    <div className={classes.formSection}>
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">Your email</label>
          <input type="email" id="email" />
        </div>
        <div className={classes.check}>
          <input type="checkbox" id="checkbox" />
          <label htmlFor="email">
            By subscribing to the list, you have a chance to meet a very cool
            Sheep. But if you are a girl, then don't count on too much cause
            Sheep already has super cool Sheep-girl - sorry!
          </label>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
