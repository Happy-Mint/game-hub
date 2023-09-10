import platform from "../data/platform";
import useData from "./useData";
export interface Platform{
    id : number;
    name : string ;
    slug :string ;
}
const usePlatForms = ()=> ({data : platform, isLoading : false , error : null})
export default  usePlatForms ;