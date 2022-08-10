import Banner from "components/Banner";
import Images from "constants/images";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Container } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import PhotoList from "features/Photo/components/PhotoList";
import { removePhoto } from "features/Photo/photoSlice";
import "./Main.css";

function MainPage() {
  const ditpatch = useDispatch();
  const photos = useSelector((state) => state.photos);
  const history = useHistory();

  const handlePhotoEditClick = (photo) => {
    console.log("Edit: ", photo);
    const editPhotoUrl = `/photos/${photo.id}`;
    history.push(editPhotoUrl);
  };

  const handlePhotoRemoveClick = (photo) => {
    console.log("Delete: ", photo);
    const removePhotoId = photo.id;
    const action = removePhoto(removePhotoId);
    ditpatch(action);
  };
  return (
    <div>
      <Banner title="Your awesome photos" backgroundUrl={Images.PINK_BG} />

      <Container className="text-center">
        <div className="py-5">
          <Button color="primary" outline>
            <Link to="/photos/add" className="button">
              Add new photo
            </Link>
          </Button>
          <Button color="primary" outline className="ml-2">
            <Link to="/photos/search" className="button">
              Search photo
            </Link>
          </Button>
        </div>
        <PhotoList
          photoList={photos}
          onPhotoEditClick={handlePhotoEditClick}
          onPhotoRemoveClick={handlePhotoRemoveClick}
        />
      </Container>
    </div>
  );
}

export default MainPage;
