import React from 'react';
import { Link ,useParams,useNavigate } from 'react-router-dom';

const DeleteContact  = (props) => {
    let param = useParams();
    const id = param.id;
    let navigate  = useNavigate();

    const  clickHandler = (e) =>{
            e.preventDefault();
            console.log(id);
            props.deleteContactHandler(id);
            navigate(`/`);
    };

    return (
        <div className="ui grid centered">
            <div className="item ten wide column">  
                <div className="header"> 
                     <h2> Are you sure ?</h2>
                </div>
                
                <div className="description">
                    <button className="ui button red left floated"  onClick= {clickHandler} > confirm</button>
                    <Link to= "/">
                        <button className="ui button blue right floated">cancel</button>
                    </Link>
                 </div>
            </div>
        </div>
    );

};
export default DeleteContact;

