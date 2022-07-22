import { validateProps } from "../../common/types";

export default function validate(values: validateProps) {
  let errors = {} as validateProps;

  if (!values.naam) {
    errors.naam = "Naam is vereist";
  }
  if (!values.email) {
    errors.email = "Email adres is vereist";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email adres is niet geldig";
  }
  if (!values.bericht) {
    errors.bericht = "Bericht is vereist";
  }
  if (!values.onderwerp) {
    errors.onderwerp = "Onderwerp is vereist";
  }
  return errors;
}
