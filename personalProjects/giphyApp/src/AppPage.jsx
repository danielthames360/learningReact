import React from "react";
import { useGifGenerator } from "./hooks/useGifGenerator";

export const AppPage = () => {
  const { gifUrl, fact, setNewGifRequest, newGifRequest } = useGifGenerator();

  return (
    <>
      <div className="container">
        <div className="text-center d-flex justify-content-center flex-column vh-100">
          <h2 className="block">Giphy Test project</h2>
          <h2 className="block">{newGifRequest}</h2>

          <div className="row mt-5 d-flex align-items-center gap-5">
            <div className="col-6">
              <img src={gifUrl} alt="Giphy loading..." />
            </div>
            <div className="col-5">
              <h6>{fact}</h6>
            </div>
          </div>

          <div className="mt-5">
            <button
              className="btn btn-dark btn-lg"
              onClick={() => {
                setNewGifRequest((prev) => prev + 1);
              }}
            >
              Refresh text
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
