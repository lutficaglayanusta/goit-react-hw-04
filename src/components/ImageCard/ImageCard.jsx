const ImageCard = ({image,alt,onModal,regular}) => {
  return (
    <div>
      
        <img onClick={()=>onModal(regular)} src={image} width={600} height={350} alt={alt} />
      
    </div>
  );
};

export default ImageCard;
