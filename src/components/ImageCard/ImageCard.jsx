const ImageCard = ({image,alt}) => {
  return (
    <div>
      
        <img src={image} width={600} height={350} alt={alt} />
      
    </div>
  );
};

export default ImageCard;
