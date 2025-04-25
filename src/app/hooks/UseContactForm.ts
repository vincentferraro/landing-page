// hooks/useContactForm.ts
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

export const useContactForm = () => {
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const formik = useFormik({
    initialValues: {
      nom: "",
      prenom: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      nom: Yup.string().required("Champ requis"),
      prenom: Yup.string().required("Champ requis"),
      email: Yup.string().email("Email invalide").required("Champ requis"),
      message: Yup.string().required("Champ requis"),
    }),
    onSubmit: (values) => {
      setSubmitAttempted(true);
      if (!formik.isValid) return;

      console.log("Envoi du formulaire :", values);
      // Appel de l'API ou fonction nodemailer
    },
  });

  return { formik, submitAttempted, setSubmitAttempted };
};
