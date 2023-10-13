interface PopupProps {
    username: string;
    star: number;
    content: string;
    onClose: () => void;
}


const generateStars = (star: number) => {
    const stars = Array.from({ length: star }, (_, index) => <span key={index}>{starSVG}</span>);
    return stars;
  };
  
  const starSVG = (
    <svg
      className="w-8 h-8 text-yellow-300 mr-1"
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 22 20"
    >
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
  );
  
  
export const Popup: React.FC<PopupProps> = ({ username, star, content,onClose }) => {
    return(
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="flex flex-col w-[600px] h-[400px] border-2 bg-white bg-opacity-100 rounded-lg shadow-md ">
                <div className="flex flex-row pt-3 pl-5 text-3xl font-bold">
                    {username}
                </div>
                <div className="flex flex-row pl-[19px] pt-[5px] font-bold mt-2">
                    {generateStars(star)}
                </div>
                <div className="flex flex-row pl-5 pt-[5px] pr-5 mt-2 w-full h-[250px]">
                    {content}
                </div>
                <button className="font-bold text-2xl" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
}
export default Popup;


// import React from 'react';

// interface PopupProps {
//   username: string;
//   star: number;
//   content: string;
//   onClose: () => void;
// }

// const Popup: React.FC<PopupProps> = ({ username, star, content, onClose }) => {
//   const generateStars = (star: number) => {
//     const stars = Array.from({ length: star }, (_, index) => <span key={index}>{starSVG}</span>);
//     return stars;
//   };

//   return (
//     <div className="popup">
//       <div className="popup-content">
//         <div className="popup-header">
//           <span className="close" onClick={onClose}>
//             &times;
//           </span>
//           <h2>Popup Content</h2>
//         </div>
//         <div className="popup-body">
//           <div>
//             <strong>Username:</strong> {username}
//           </div>
//           <div>
//             <strong>Rating:</strong> {generateStars(star)}
//           </div>
//           <div>
//             <strong>Content:</strong> {content}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Popup;