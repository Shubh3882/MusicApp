
import {Search} from '../components/Search.jsx';
import { Songs } from '../components/Songs.jsx';
import { getSongs } from '../services/api-client.js';
export const SearchPage=()=>{
    
     const getArtistName = async (artistName) =>{
          console.log('Rec Artist Name',artistName);
           getSongs(artistName);
     }
     return(
     <div className="container">
          <h1 className = "alert alert-info "> Music Store</h1>
          <Search fn={getArtistName}/>
          <Songs/>
      </div>);
}