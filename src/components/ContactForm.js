import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const [data, setData] = useState();
  const { register, errors, handleSubmit} = useForm({
    mode: "onBlur"
  });
  const onSubmit = data => {
      setData(data);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First Name*</label>
          <input
            data-testid="firstName input"
            name="firstName"
            placeholder="bill"
            ref={register({ required: true, minLength: 3 })}
          />
          {errors.firstName && (
            <p data-testid="firstName error">Looks like there was an error: {errors.firstName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName">Last Name*</label>
          <input
            data-testid="lastName input"
            name="lastName"
            placeholder="luo"
            ref={register({ required: true })}
          />
          {errors.lastName && (
            <p data-testid="lastName error">Looks like there was an error: {errors.lastName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" placeholder="bluebill1049@hotmail.com">
            Email*
          </label>
          <input data-testid="email input" name="email" ref={register({ required: true })} />
          {errors.email && (
            <p data-testid="email error">Looks like there was an error: {errors.email.type}</p>
          )}
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea data-testid="message input" name="message" ref={register({ required: false })} />
        </div>

        <div>
          <label htmlFor="favorite color">Favorite Color</label>
          <select
            data-testid="favorite color input"
            name="favorite color"
            ref={register({ required: false })}
          >
            <option value="blue">blue</option>
            <option value="red">red</option>
            <option value="pink">pink</option>
            <option value="green">green</option>
            <option value="noneOfTheAbove">none of the above</option>
          </select>
        </div>

        <div>
          <label htmlFor="terms">Agree to Terms and Conditions</label>
          <input
            data-testid="terms input"
            name="terms"
            ref={register({ required: true })}
            type="checkbox"
          />
          {errors.terms && (
            <p data-testid="terms error">Looks like there was an error: {errors.terms.type}</p>
          )}
        </div>

        {data && (
          <pre data-testid="return" style={{ textAlign: "left", color: "white" }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
        <input data-testid="submit input"type="submit" />
      </form>
    </div>
  );
};

export default ContactForm;
