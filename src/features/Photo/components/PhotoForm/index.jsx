import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { PHOTO_CATEGORY_OPTIONS } from "../../../../constants/global";
import Images from "../../../../constants/images";
import "./style.scss";

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
  onSubmit: null,
};

function PhotoForm(props) {
  return (
    <div>
      <Form>
        <FormGroup>
          <Label for="titleId">Title</Label>
          <Input name="title" id="titleId" placeholder="Eg: wow nature" />
        </FormGroup>

        <FormGroup>
          <Label for="category">Category</Label>
          <Select
            id="categoryId"
            name="categoryId"
            placeholder="What's your photo category"
            options={PHOTO_CATEGORY_OPTIONS}
          />
        </FormGroup>

        <FormGroup>
          <Label for="categoryId">Photo</Label>
          <div>
            <Button type="button" outline color="primary">
              Random a photo
            </Button>
          </div>
          <div>
            <img
              width="200px"
              height="200px"
              src={Images.PINK_BG}
              alt="pic-random"
            />
          </div>
        </FormGroup>

        <FormGroup>
          <Button color="primary">Add to album</Button>
        </FormGroup>
      </Form>
    </div>
  );
}

export default PhotoForm;
