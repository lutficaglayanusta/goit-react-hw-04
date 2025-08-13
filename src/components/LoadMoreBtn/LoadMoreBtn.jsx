import Loader from "../Loader/Loader"
import ErrorMessage from "../ErrorMessage/ErrorMessage"
import css from "./LoadMoreBtn.module.css"

const LoadMoreBtn = ({loading,error,loadMore}) => {
  
  return (
    <div>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <button className={css.button} onClick={loadMore} disabled={loading} >Load More</button>
    </div>
  )
}

export default LoadMoreBtn
