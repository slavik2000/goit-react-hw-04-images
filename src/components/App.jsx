
import React, { useState, useEffect } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage] = useState(12);
  const [isLoading, setIsLoading] = useState(false);
  const [totalImages, setTotalImages] = useState(0);

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      const apiKey = '42192566-3aa66b6addb563a411dc58658';
      const apiUrl = `https://pixabay.com/api/?q=${query}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${perPage}`;

      setIsLoading(true);

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setImages(prevImages => [...prevImages, ...data.hits]);
        setTotalImages(data.total);
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [query, page, perPage]);

  const handleSearch = newQuery => {
    if (newQuery === query) return; // Избегаем повторного запроса на тот же запрос
    setQuery(newQuery);
    setImages([]);
    setPage(1);
    setTotalImages(0);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div>
      <Searchbar onSubmit={handleSearch} />
      <ImageGallery
        query={query}
        page={page}
        perPage={perPage}
        images={images}
        isLoading={isLoading}
        totalImages={totalImages}
        onLoadMore={handleLoadMore}
      />
    </div>
  );
};


// import React, { Component } from 'react';
// import { Searchbar } from './Searchbar/Searchbar';
// import { ImageGallery } from './ImageGallery/ImageGallery';

// export class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       query: '',
//       images: [],
//       page: 1,
//       perPage: 12,
//       isLoading: false,
//       totalImages: 0,
//     };
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (
//       this.state.query !== prevState.query ||
//       this.state.page !== prevState.page
//     ) {
//       this.fetchImages();
//     }
//   }

//   handleSearch = query => {
//     this.setState({ query, images: [], page: 1, totalImages: 0 });
//   };

//   handleLoadMore = () => {
//     this.setState(prevState => ({
//       page: prevState.page + 1,
//     }));
//   };

//   fetchImages = () => {
//     const { query, page, perPage } = this.state;
//     const apiKey = '42192566-3aa66b6addb563a411dc58658';
//     const apiUrl = `https://pixabay.com/api/?q=${query}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${perPage}`;

//     this.setState({ isLoading: true });

//     fetch(apiUrl)
//       .then(response => response.json())
//       .then(data => {
//         this.setState(prevState => ({
//           images: [...prevState.images, ...data.hits],
//           totalImages: data.total,
//           isLoading: false,
//         }));
//       })
//       .catch(error => {
//         console.error('Error fetching images:', error);
//         this.setState({ isLoading: false });
//       });
//   };

//   render() {
//     const { perPage, query, images, isLoading, totalImages, page } = this.state;

//     return (
//       <div>
//         <Searchbar onSubmit={this.handleSearch} />
//         <ImageGallery
//           query={query}
//           page={page}
//           perPage={perPage}
//           images={images}
//           isLoading={isLoading}
//           totalImages={totalImages}
//           onLoadMore={this.handleLoadMore}
//         />
//       </div>
//     );
//   }
// }
