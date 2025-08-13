import axios from "axios";


export const fetchImages = async (input,page) => {
    const response = await axios.get(`https://api.unsplash.com/search/photos?client_id=b3dyK8oEPLaXmH-SSkMonWQgg8fnbfqw24L6S7rc_JE&query=${input}&per_page=12&page=${page}`)

    return response.data.results;
}
