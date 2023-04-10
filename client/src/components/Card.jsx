import React from "react";
import { downloadImage } from "../utils";
import { download } from "../assets";
const Card = ({ _id, name, prompt, photo }) => {
  /*   useEffect(() => {
    downloadImage(_id, photo);
  }, []); */
  return (
    <div className="rounded-xl group relative shadow-card hover:shadow-card-hover card">
      <img
        className="w-full h-auto object-cover rounded-xl"
        src={photo}
        alt={prompt}
      />
      <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md">
        <p className="text-white text-md overflow-y-auto">{prompt}</p>
        <div className="mt-5 flex justify-between items-center gap-2 ">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-green-700 rounded-full object-cover flex justify-center items-center text-white text-xs font-bold">
              {name[0]}
            </div>
            <p className="text-white text-sm">{name}</p>
          </div>
          <button
            type="button"
            onClick={() => downloadImage(_id, photo)}
            className="outline-none border-none bg-transparent"
          >
            <img
              src={download}
              alt="download"
              className="w-6 h-6 invert object-contain"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
