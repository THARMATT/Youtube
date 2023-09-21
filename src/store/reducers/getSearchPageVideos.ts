import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "..";
import  axios  from "axios";
import { YOUTUBE_API_URL } from "../../utils/constants";
import { HomePageVideos } from "../../Types";
import { parseData } from "../../utils";
const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
export const getSearchPageVideos = createAsyncThunk(
  "youtube/searchPageVideos",
  async (isNext: boolean, { getState }) => {

    const {
        youtubeApp:{
            nextPageToken:nextPageTokenFromState,videos,searchTerm
        },
    }=getState() as RootState;
    try {
        const { data: { items, nextPageToken } } = await axios.get(`${YOUTUBE_API_URL}/search?q=${searchTerm}&key=${API_KEY}&part=snippet&type=video&${isNext?`pageToken=${nextPageTokenFromState}`:""}`);
        const parsedData: HomePageVideos[] = await parseData(items);
        return { parsedData: [...videos, ...parsedData], nextPageToken };
      } catch (error) {
        console.error("API request failed:", error);
      }
  }
);
