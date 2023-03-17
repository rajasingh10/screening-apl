import React, { useEffect, useState } from 'react';
import db from "./firebase";
import { collection, doc, getDoc, getDocs, onSnapshot, query } from "firebase/firestore";
import probableList from './completeprobablelist';




const Screen = () => {
    const docRef = doc(db, "aplid", "K5wDp1T7ij61KNoW6xqz");

    const [data, setData] = useState([]);
    const [playerId, setPlayerId] = useState("");

    useEffect(() => {
        const q = query(docRef);
        const unsub = onSnapshot(q, (data) => {
            console.log(data.data().aplid);
            setData(probableList[data.data().aplid]);
            setPlayerId(data.data().aplid);
        })
        return () => {
            unsub();
        }
    }, [])






    return (
        <div className="screen">

            <div class="card_wrapper">
                <div class="left">
                    <h3>{data?.category}</h3>
                    <img src={data?.["photo url"]} class="img" alt="photographer" />
                </div>
                <div class="right">
                    <h2>{data?.Name}</h2>
                    <h3>{data?.type}</h3>
                    <h1>APL_{playerId}</h1>
                    <h4>College: {data?.College}</h4>
                </div>
            </div>
        </div>
    )
}

export default Screen;