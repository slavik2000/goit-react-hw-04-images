
import React, { useState, useEffect } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Button } from '../Button/Button';
import { Loader } from '../Loader/Loader';
import css from './ImageGallery.module.css';

export const ImageGallery = ({
  images,
  isLoading,
  totalImages,
  query,
  onLoadMore,
}) => {
  const handleLoadMore = () => {
    onLoadMore();
  };

  return (
    <div>
      {images.length > 0 && (
        <ul className={css.ImageGallery}>
          {images.map(image => (
            <ImageGalleryItem key={image.id} imageUrl={image.webformatURL} />
          ))}
        </ul>
      )}

      {isLoading && <Loader />}

      {images.length > 0 && !isLoading && totalImages > images.length && (
        <Button onClick={handleLoadMore}>Load more</Button>
      )}

      {query && images.length === 0 && !isLoading && (
        <p className={css.Message}>
          Sorry! No images were found. Try another keyword for what you are
          seeking! <br />
          😊
        </p>
      )}
    </div>
  );
};


// import React from 'react';
// import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
// import { Button } from '../Button/Button';
// import { Loader } from '../Loader/Loader';
// import css from './ImageGallery.module.css';

// export const ImageGallery = ({
//   images,
//   isLoading,
//   totalImages,
//   query,
//   onLoadMore,
// }) => {
//   const handleLoadMore = () => {
//     onLoadMore();
//   };

//   return (
//     <div>
//       {images.length > 0 && (
//         <ul className={css.ImageGallery}>
//           {images.map(image => (
//             <ImageGalleryItem key={image.id} imageUrl={image.webformatURL} />
//           ))}
//         </ul>
//       )}

//       {isLoading && <Loader />}

//       {images.length > 0 && !isLoading && totalImages > images.length && (
//         <Button onClick={handleLoadMore}>Load more</Button>
//       )}

//       {query && images.length === 0 && !isLoading && (
//         <p className={css.Message}>
//           Sorry! No images were found. Try another keyword for what you are
//           seeking! <br />
//           😊
//         </p>
//       )}
//     </div>
//   );
// };

// ImageGallery.defaultProps = {
//   perPage: 12,
// };
