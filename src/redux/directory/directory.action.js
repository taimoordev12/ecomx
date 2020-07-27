import axios from 'axios';
import  {directoryTypes} from '../directory/directory.type';

export const getDirectories=()=>{
    return (dispatch) => {
 
        axios
        .get('/api/catagories')
        .then(
            res=>dispatch({
               type:directoryTypes.GET_DIRECTORIES,
               payload:res.data
            }     )
        );
    }


   
}