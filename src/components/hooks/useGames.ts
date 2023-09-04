import { useEffect, useState } from "react";
import apiClient from "../../services/api-Client";
import { CanceledError } from "axios";
import useData from "./useData";
export interface Platform{
    id : number;
    name : string ;
    slug :string ;
}

export interface Game {
    id: number;
    name: string;
    background_image:string
    parent_platforms : {platform : Platform}[]
    metacritic : number
  }

  
  const useGames = () => {
     return useData<Game>("/games")  }
  export default useGames;