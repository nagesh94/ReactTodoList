import { createSlice } from "@reduxjs/toolkit";

const taskSlice=createSlice({
    name:"tasks",
    initialState:{
        value:["nagesh"],
        index:""
        
    },
    reducers:{
        setTask:(state,action)=>{
            state.value=action.payload
            // console.log(state.value);
        },
        delTask:(state,{payload})=>
        {   
            
            state.value.splice(payload,1)
            state.index=payload
        }
    }
})


export const {setTask,delTask} =taskSlice.actions;
export default taskSlice.reducer;