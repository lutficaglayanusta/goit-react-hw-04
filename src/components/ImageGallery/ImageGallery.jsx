import css from "./ImageGallery.module.css"
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images }) => {
  return (
    <>
      <ul className={css.list}>
        {/* Resimli liste öğeleri kümesi */}
        {
          images.map(image => (
            <li key={image.id}>
              <ImageCard image={image.urls.small} alt={image.alt_description} />
              
            </li>
          ))
        }
      </ul>
    </>
  );
};

export default ImageGallery;
