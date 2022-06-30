/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from "react";

import axios from "axios";
import data from "../public/data/data";

export default function SearchBar() {
  const [videoTitles, setVideoTitles] = useState(data);
  const [suggestedId, setSuggestedId] = useState([null]);
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  // const value = useContext(videoIdContext);

  // const currentTitles = [];

  // useEffect(() => {
  //   const loadData = async (token) => {
  //     const response = await axios.get(
  //       "https://www.googleapis.com/youtube/v3/search",
  //       {
  //         params: {
  //           part: "snippet",
  //           channelId: "UCYi9TC1HC_U2kaRAK6I4FSQ",
  //           maxResults: 10000,
  //           order: "viewCount",
  //           type: "video",
  //           key: "AIzaSyAZC_LPCG9xAtRzJgiKvleelYKIoIQrDls",
  //           nextPageToken: token,
  //         },
  //       }
  //     );
  //     try {
  //       console.log(response.data);
  //       // eslint-disable-next-line no-plusplus
  //       for (let i = 0; i < response.data.items.length; i++) {
  //         currentTitles.push({
  //           title: response.data.items[i].snippet.title,
  //           id: response.data.items[i].id.videoId,
  //         });
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }

  //     console.log("current Pull Titles", currentTitles);
  //     setVideoTitles(currentTitles);
  //     if (response.data.nextPageToken) {
  //       loadData(response.data.nextPageToken);
  //     }
  //   };

  //   loadData();
  // }, []);

  // if the response object has a nextPage key,
  // call again

  const onChangeHandler = (words) => {
    let matches = [];
    if (words.length > 0) {
      matches = videoTitles.filter((title) => {
        const regex = new RegExp(`${words}`, "gi");
        return title.title.match(regex);
      });
    }
    console.log("matches", matches);
    setSuggestions(matches);
    setText(words);
  };
  const onSuggestHandler = (suggestion) => {
    setText(suggestion.title);
    setSuggestedId(suggestion.id);
    setSuggestions([]);
  };
  // const { changeVideoId } = value.changeVideoId;
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(suggestedId);
    // changeVideoId(suggestedId);
  };
  return (
    <div className="flex w-full h-full m-10" id="SearchBarWrapper">
      <form className="flex" onSubmit={(e) => onSubmitHandler(e)}>
        <input
          className="flex self-center justify-self-center"
          type="text"
          onChange={(e) => onChangeHandler(e.target.value)}
          value={text}
        />
      </form>
      {suggestions &&
        suggestions.map((suggestion, i) => (
          <div key={i} onClick={() => onSuggestHandler(suggestion)}>
            {" "}
            {suggestion.title}{" "}
          </div>
        ))}
    </div>
  );
}
