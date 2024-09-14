import React, { Component } from 'react';
import { Modal } from '../Modal/Modal';
import css from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { imageUrl } = this.props;
    const { isModalOpen } = this.state;

    return (
      <li className={css.ImageGalleryItem} onClick={this.openModal}>
        <img className={css.ImageGalleryItemImage} src={imageUrl} alt="" />
        {isModalOpen && (
          <Modal
            imageUrl={imageUrl}
            altText="Large version"
            onClose={this.closeModal}
          />
        )}
      </li>
    );
  }
}

// import React, { useState } from 'react';
// import { Modal } from '../Modal/Modal';
// import css from './ImageGalleryItem.module.css';

// export const ImageGalleryItem = ({ imageUrl }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <li className={css.ImageGalleryItem} onClick={openModal}>
//       <img className={css.ImageGalleryItemImage} src={imageUrl} alt="" />
//       {isModalOpen && (
//         <Modal
//           imageUrl={imageUrl}
//           altText="Large version"
//           onClose={closeModal}
//         />
//       )}
//     </li>
//   );
// };
