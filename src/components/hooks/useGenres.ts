import { useEffect, useState } from "react";
import apiClient from "../../services/api-Client";
import { CanceledError } from "axios";
import useData from "./useData";

interface Genre{
    id:number;
    name:string;
    image_background:string;
}

  const useGenres = () => {
    return useData<Genre>('/genres');
  }

  export default useGenres