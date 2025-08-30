import React from "react";

interface CardModalProps {
  name: string;
  mentions: string;
  review: string;
  imgPath: string;
}

const CardModal: React.FC<CardModalProps> = ({
  name,
  mentions,
  review,
  imgPath,
}) => {
  return (
    <div className="flex  items-center   text-center space-x-6 space-y-6">
      <div
        className="bg-black rounded-xl   text-white w-200 h-full p-6 border relative
                        border-gray-800
                        shadow-[0_0_20px_rgba(0,255,0,0.5)]"
      >
        {/* Avatar + Info */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-600 shadow-md">
            <img
              src={imgPath}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-lg font-bold">{name}</h2>
            <p className="text-sm text-gray-400">{mentions}</p>
          </div>
        </div>
        {/* Review */}
        <p className="text-gray-300 mt-6 font-bold italic leading-relaxed">
          {review}
        </p>
      </div>
    </div>
  );
};

export default CardModal;
