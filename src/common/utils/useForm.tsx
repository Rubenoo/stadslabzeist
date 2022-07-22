import { useState, useEffect } from "react";
import { notification } from "antd";
import emailjs from '@emailjs/browser';

export const useForm = (validate: any) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [shouldSubmit, setShouldSubmit] = useState(false);

  const openNotificationWithIcon = () => {
    notification["success"]({
      message: "Success",
      description: "Je bericht is verzonden!",
    });
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors(validate(values));
    if (Object.keys(values).length === 4 && Object.keys(errors).length === 0 ) {
        emailjs.sendForm('service_cpgl62m', 'template_fz5iyg4', event.target, 'qvzcPVOT10aFtud3C')
        .then((result) => {
            console.log(result.text);
            setShouldSubmit(true);
        }, (error) => {
            console.log(error.text);
        });
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && shouldSubmit) {
      setValues("");
      openNotificationWithIcon();
    }
  }, [errors, shouldSubmit]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
    setErrors((errors) => ({ ...errors, [event.target.name]: "" }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};
