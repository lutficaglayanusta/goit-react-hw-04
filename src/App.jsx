import toast ,{ Toaster } from 'react-hot-toast';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from "./components/ImageGallery/ImageGallery"
import ErrorMessage from "./components/ErrorMessage/ErrorMessage"
import Loader from "./components/Loader/Loader"
import { useState } from 'react';
import { fetchImages } from './images-api';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';


function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1)
  const [hasMore,setHasMore] = useState(true)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchInput, setSearchInput] = useState("")
  
  const handleSearch = async (input) => {
    try {
      setImages([])
      setError(false)
      setLoading(true)
      setSearchInput(input)
      setPage(1)

      const images = await fetchImages(input,page)
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

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {images.length > 0 && <ImageGallery images={images} />}
      {
        images.length > 0 && <LoadMoreBtn  loading={loading} error={error} loadMore={loadMore} />
      }
      {
        !hasMore && toast.error("No more images",{duration:1000})
      }
      <Toaster />
    </>
  )
}

export default App
