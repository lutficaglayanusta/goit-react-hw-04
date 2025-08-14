import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from "./components/ImageGallery/ImageGallery"
import ErrorMessage from "./components/ErrorMessage/ErrorMessage"
import Loader from "./components/Loader/Loader"
import ImageModal from "./components/ImageModal/ImageModal"
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import toast ,{ Toaster } from 'react-hot-toast';
import { useState } from 'react';
import Modal from 'react-modal';
import { fetchImages } from './images-api';

Modal.setAppElement("#root")

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1)
  const [hasMore,setHasMore] = useState(true)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchInput, setSearchInput] = useState("")
  const [modalIsOpen, setIsOpen] = useState(false)
  const [imageUrl,setImageUrl] = useState("")
   
  const handleSearch = async (input) => {
    try {
      setImages([])
      setError(false)
      setLoading(true)
      setSearchInput(input)
      setPage(1)

      const images = await fetchImages(input, page)
      
      if (images.length === 0) {
        toast.error("Please enter the valid in the field.",{duration: 1000})
        return
      }

      setImages(images)
      if (images.length < 12) {
        setHasMore(false)
      }
    } catch{
      setError(true)
    } finally {
      setLoading(false)
    }
  }
  const loadMore = async () => {  
  if (!hasMore) return;

  try {
    setLoading(true);
    setError(false);
    
    const nextPage = page + 1;
    const newImages = await fetchImages(searchInput, nextPage); 

    if (newImages.length < 12) {
      setHasMore(false);
    }

    setImages((prevItems) => {
      const uniqueNewImages = newImages.filter(
        (image) => !prevItems.some((prevItem) => prevItem.id === image.id)
      );
      return [...prevItems, ...uniqueNewImages];
    });

    setPage(nextPage); 
  } catch {
    setError(true);
  } finally {
    setLoading(false);
  }
  };
  const openModal = (regular) => {
    setImageUrl(regular)
    setIsOpen(true)
  }
  const afterOpenModal = () => {
    
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {images.length > 0 && <ImageGallery onModal={openModal} images={images} />}
      {
        images.length > 0 && hasMore && <LoadMoreBtn  loading={loading} error={error} loadMore={loadMore} />
      }
      {
        !hasMore && toast.error("No more images",{duration:1000})
      }
      <ImageModal imageUrl={imageUrl} isOpen={modalIsOpen} onAfterOpen={afterOpenModal} onRequestClose={closeModal}/>
      <Toaster />
    </>
  )
}

export default App
