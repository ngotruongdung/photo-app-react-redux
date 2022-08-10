import Banner from "components/Banner";
import PhotoForm from "features/Photo/components/PhotoForm";
import { addPhoto, updatePhoto } from "features/Photo/photoSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

function AddEditPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { photoId } = useParams();

  const editedPhoto = useSelector((state) =>
    state.photos.find((x) => x.id === +photoId)
  );

  const isAddMode = !photoId;

  const initialValues = isAddMode
    ? {
        title: "",
        categoryId: null,
        photo: "",
      }
    : editedPhoto;

  const handleSubmit = (values) => {
    return new Promise((resolve) => {
      console.log(values);
      setTimeout(() => {
        if (isAddMode) {
          const min = 10000;
          const max = 99999;
          const randomNumber = min + Math.random() * (max - min);
          const newPhoto = {
            ...values,
            id: randomNumber,
          };
          const action = addPhoto(newPhoto);
          console.log({ action });
          dispatch(action);
        } else {
          const action = updatePhoto(values);
          dispatch(action);
        }
        history.push("/photos");
        resolve(true);
      }, 2000);
    });
  };
  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo" />

      <div className="photo-edit__form">
        <PhotoForm 
        isAddMode={isAddMode}
        initialValues={initialValues} onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default AddEditPage;
