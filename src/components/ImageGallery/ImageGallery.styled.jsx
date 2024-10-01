import styled from '@emotion/styled'

export const GalleryList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  `

// .ImageGallery {
//     display: grid;
//     max-width: calc(100vw - 48px);
//     grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
//     grid-gap: 16px;
//     margin-top: 20px;
//     margin-bottom: 0;
//     padding: 0;
//     padding-bottom: 20px;
//     list-style: none;
//     margin-left: auto;
//     margin-right: auto;
// }

// .Message {
//     font-size: 24px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     text-align: center;
//     max-width: 500px;
//     margin: auto;
//     margin-top: 180px;
// }

// import styled from '@emotion/styled';

// export const GalleryList = styled.ul`
//   display: grid;
//   max-width: calc(100vw - 48px);
//   grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
//   grid-gap: 16px;
//   margin-top: 0;
//   margin-bottom: 0;
//   padding: 0;
//   list-style: none;
//   margin-left: auto;
//   margin-right: auto;
// `;