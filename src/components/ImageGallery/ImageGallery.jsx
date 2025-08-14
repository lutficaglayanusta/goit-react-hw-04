import css from "./ImageGallery.module.css"
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images,onModal }) => {
  return (
    <>
      <ul className={css.list}>
        {/* Resimli liste öğeleri kümesi */}
        {
          images.map(image => (
            <li key={image.id}>
              <ImageCard onModal={onModal} regular={image.urls.regular} image={image.urls.small} alt={image.alt_description} />
              
            </li>
          ))
        }
      </ul>
    </>
  );
};

export default ImageGallery;
