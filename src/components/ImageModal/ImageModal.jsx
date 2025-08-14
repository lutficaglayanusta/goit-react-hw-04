import Modal from "react-modal";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor:"black"
  },
};

const ImageModal = ({ isOpen, onAfterOpen, onRequestClose,imageUrl }) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onAfterOpen={onAfterOpen}
        onRequestClose={onRequestClose}
        style={customStyles}
      >
        <img src={imageUrl} width={1200} height={600} alt="" />
      </Modal>
    </>
  );
};

export default ImageModal;
