// 초기값 
const initialState = {
    memolist : [
        {
            name: "홍길동",
            text : " 방명록을 작성하였습니다"
        }
    ],
}


// 액션타입을 함수로 만들어줌 
export const addmemo=(memo) =>({type:"addMemo",payload:memo})



// 리듀서값 

function memo(state=initialState ,action){
    switch(action.type){
        case "addMemo":
        // 새로운 메모생성
        console.log(action.payload)
        const newMemo = {
            id:state.id , 
            name: action.payload.name,
            text : action.payload.text
        }
        // newMemo를 가지는 리스트 
        const newMemolist = state.memolist.concat(newMemo)
        return{
            ...state, memolist:newMemolist ,id:state.id+1
        }

        default : 
         return state
    }
}

export default memo;