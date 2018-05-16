let nextTodoId = 0


function addTodo(text){
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}


function setVisibilityFilter(filter){
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

function toggleTodo(id){
  return {
    type: 'TOGGLE_TODO',
    id
  }
}


function loginOrExit(login){
  if(login){
    return {
      type:'LOGIN',
      value:true
    }
  }else{
    return {
      type:'LOGIN',
      value:false
    }
  }

}



export  {addTodo,setVisibilityFilter,toggleTodo,loginOrExit}
