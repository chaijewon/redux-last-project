import {useDispatch, useSelector} from 'react-redux'
import {useParams} from "react-router-dom";
import {useState, useEffect, Fragment} from "react";

function InfoList(){
    const {cno}=useParams()
    return (
        <Fragment>
            <div>
                <h1 className={"text-center"}>
                    {
                        cno==='1' && "명소"
                    }
                    {
                        cno==='2' && "쇼핑"
                    }
                    {
                        cno==='3' && "음식"
                    }
                </h1>
            </div>
        </Fragment>
    )
}

export default InfoList;