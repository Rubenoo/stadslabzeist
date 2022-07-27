import { useState, useEffect, useCallback, useMemo } from "react";
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

  const handleSubmit = useCallback((event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const currentErrors = validate(values);

    setErrors(currentErrors);

    if (Object.keys(values).length === 4 && Object.keys(currentErrors).length === 0 ) {
      console.log("hier hit")
      setShouldSubmit(true);
      emailjs.sendForm('service_cpgl62m', 'template_fz5iyg4', event.target, 'qvzcPVOT10aFtud3C')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }
  }, [values, validate]);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && shouldSubmit) {
      console.log("hitttie");
      setValues({});
      openNotificationWithIcon();
    }
  }, [errors, shouldSubmit]);


  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
    setErrors((errors) => ({ ...errors, [event.target.name]: "" }));
  }, []);

  const returnValues = useMemo(() => ({ handleChange, handleSubmit, values, errors }), [handleChange, handleSubmit, values, errors]);

  return returnValues;
};
