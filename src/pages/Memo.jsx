import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addmemo } from "../Modules/Memo";

const Memo = () => {
    const memolist = useSelector((state) => state.memo.memolist)
    const [name, setName] = useState("");
    const [text, setText] = useState("");

    const dispatch = useDispatch();

    const addMemo = useCallback(() => {
        dispatch(addmemo({ name: name, text: text }))
    }, [dispatch, name, text])


    let Day = new Date();
    let Today = Day.toLocaleDateString()

    return (
        <div >
            <h1>방명록을 작성해주세요 </h1>
            <hr />
            이름  <input type="text" style={{width:'50px'}} onChange={(e)=>{setName(e.target.value)}} />
            <input type="text" onChange={(e)=>{setText(e.target.value)}} />
            <button onClick={addMemo}> 작성</button>
            <hr />
            {
                memolist.map((memo)=>                
                <ul className="Memo">
                    <li>{memo.name} : {memo.text} {Today} </li>
                </ul>
                )
            }
        </div>
    );
}

export default Memo;