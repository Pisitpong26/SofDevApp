import React from 'react';

interface ReviewCard {

    username:string;
    star:number;
    content:string;
}

export const ReviewCard: React.FC<ReviewCard> = ({ username,star,content}) => {
  return (
    <div className="flex flex-col w-[370px] h-[170px] border-2 bg-white bg-opacity-90 rounded-lg">
                    <div className="flex flex-row pt-3 pl-5 font-bold">
                        {username}
                    </div>
                    <div className="flex flex-row pl-[19px] pt-[5px] font-bold">
                    {star}⭐
                    </div>
                    <div className="flex flex-row pl-5 pt-[5px] pr-5 break-all text-clip " id="comment">
                        {/* content55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555 */}
                        {content}
                    </div>
    </div>
  );
};

export default ReviewCard;
