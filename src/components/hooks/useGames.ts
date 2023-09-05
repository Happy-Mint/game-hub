import { Genre } from './useGenres';
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

  
  const useGames = (selectedGenre :Genre |null ) =>  useData<Game>("/games",{params:{genres:selectedGenre?.id}},[selectedGenre?.id])  
  export default useGames;