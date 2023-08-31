import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const InputSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(25, 'Too Long!')
    .matches(
      "^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$",
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('Required'),
  number: Yup.string()
    .min(9, '9 digits required!')
    .max(13, 'Less than 13 symbols!')
    .matches(
      /\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Required'),
});

export const Phonebook = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={InputSchema}
      onSubmit={(values, actions) => {
        onAdd(values);
        actions.resetForm();
      }}
    >
      <Form>
        <label>
          Name
          <Field name="name" type="text" placeholder="name" />
          <ErrorMessage component="div" name="name" />
        </label>
        <label>
          Name
          <Field name="number" type="tel" placeholder="number" />
          <ErrorMessage component="div" name="number" />
        </label>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
