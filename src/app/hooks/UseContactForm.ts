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
      phone:"",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      nom: Yup.string().required("Champ requis"),
      prenom: Yup.string().required("Champ requis"),
      phone: Yup.string().required("Champ requis"),
      email: Yup.string().email("Email invalide").required("Champ requis"),
      message: Yup.string().required("Champ requis"),
    }),
    onSubmit: async (values) => {
      setSubmitAttempted(true);
      if (!formik.isValid) return;

      console.log("Envoi du formulaire :", values);
      
      // Appel de l'API ou fonction nodemailer
      try{
        const response = await fetch(`/api/mail/contact`,{
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values)
        })
        const result = await response.json()

        if(response.ok){
          console.log('success', result)
          formik.resetForm()
        }else{
          throw new Error(result.error || "Erreur inconnue")
        }
        
      }catch(err){
        console.error('Erreur lors de l’envoi du formulaire:', err);
    }
      
    },
  });

  return { formik, submitAttempted, setSubmitAttempted };
};
