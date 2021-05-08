const ADD_TASK = 'ADD_TASK';

const initialState = {
    tasks: [
         {id: 0, title: 'Leer'},
         {id: 1, title: 'Dibujar'},
         {id: 2, title: 'Programar'},
         {id: 3, title: 'Comer'},
         {id: 4, title: 'Caminar'},
         {id: 5, title: 'Dormir'},
    ]
}

const taskReducer = (state = initialState,{type,payload}) => {
    switch(type) {
        case ADD_TASK: {
            return {
                ...state,
                tasks: [...state.tasks, {id: 6, title: payload.task}]
            }
        }
        default: {
            return state;
        }
    }
}

export const addTaskAction = (payload) => ({type: ADD_TASK, payload})

export default taskReducer;