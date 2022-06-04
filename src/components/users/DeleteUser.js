import React, {useState, useEffect} from "react";
import axios from "axios";
import './Modal.css';


function DeleteUser( props ) {
    // const  id  = props.id;
    // console.log(props);
    const [user, setUser] = useState([]);
    
    const { firstname, lastname} = user;
      
    useEffect(() => {
        loadUser();
    }, []);

    

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3003/users/${props.id}`);
        setUser(result.data);
    };

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3003/users/${props.id}`);
        window.location.reload();
      };
      

  return (
      <>
        
      <div className="modalContainer center">
        <div className="title">
          {<h3 className="text-primary">Are You Sure You Want to Delete {firstname} {lastname} ?</h3>}
        </div>
        <div className="footer">
            <button className="btn btn-danger" onClick= {deleteUser}>
              Delete
            </button>
            <button className="btn btn-danger" onClick={() => { props.setOpenModal(false); }}  id="cancelBtn">
                Cancel
            </button>
        </div>
      </div>
     
     </>
   
  );
}

export default DeleteUser;