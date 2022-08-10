import React from "react";
import PropTypes from "prop-types";
import { Button, FormGroup, Spinner } from "reactstrap";
import "./style.scss";
import { PHOTO_CATEGORY_OPTIONS } from "constants/global";
import { Formik, Form, FastField } from "formik";
import InputField from "custom-fields/InputField";
import SelectField from "custom-fields/SelectField";
import RandomPhotoField from "custom-fields/RandomPhotoField";
import * as Yup from "yup";

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
  onSubmit: null,
};

function PhotoForm(props) {
  const {initialValues, isAddMode} = props

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("This fiel is requied"),
    categoryId: Yup.number().required("This fiel is requied").nullable(),
    photo: Yup.string().required("This fiel is requied"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={props.onSubmit}
      validationSchema={validationSchema}
    >
      {(formikProps) => {
        const { values, errors, touched, isSubmitting } = formikProps;
        console.log({ values, errors, touched });
        return (
          <Form>
            <FastField
              name="title"
              component={InputField}
              label="Title"
              placeholder="Eg: wow nature"
            />
            <FastField
              name="categoryId"
              component={SelectField}
              label="Category"
              placeholder="What's your photo category"
              options={PHOTO_CATEGORY_OPTIONS}
            />
            <FastField
              name="photo"
              component={RandomPhotoField}
              label="Photo"
            />

            <FormGroup>
              <Button type="submit" color={isAddMode ? 'success' : 'primary'}>
                {isSubmitting && <Spinner size="sm" />}
                {isAddMode ? 'Add to album' : 'Update to Album'}
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;