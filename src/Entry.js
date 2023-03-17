import React, { useState, useEffect } from 'react'

import { updateDoc, doc, getDoc } from "firebase/firestore";
import db from './firebase';
import { async } from '@firebase/util';
import probableList from './completeprobablelist';

const Entry = () => {
    const [value, setValue] = useState();
    const docRef = doc(db, "aplid", "K5wDp1T7ij61KNoW6xqz");

    const [data, setData] = useState(true);

    const onFormSubmit = e => {
        e.preventDefault();
        setData(true)
        const player = probableList[value] ? probableList[value] : null
        if (player !== null) {
            setData(true)
            updateData();
        }
        else {
            setData(false)
        }
    }






    const updateData = async () => {
        await updateDoc(docRef, {
            aplid: value
        });
    }



    return (
        <div className="entry">
            <div className="container">
                <h2>Enter APL ID</h2>
                <form onSubmit={onFormSubmit}>
                    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
                    <button type='submit' >Enter</button>
                </form>
                <h4>currently Showing: APL_{value}</h4>
                {!data && <h2>Invalid</h2>}
            </div>
        </div>
    )
}

export default Entry;