import { createMachine} from 'xstate'




export const TodosMachine = createMachine({
    id:"todos_machine",
    initial:"editing",
    context:{
        todosList:[],
        filteredTodos:[],
        appliedFilter:[]
    },
    states:{
        editing:{
            id:"editing_machine",
            initial:"invalid",
            states:{
                valid:{
                    on:{
                        INVALID:"invalid",
                        ADD_TODO:"addTodo",
                        MARK_ALL_TODOS:"markAllTodos"
                    }
                },
                invalid:{
                    on:{
                        MARK_ALL_TODOS:"markAllTodos",
                        VALID:"valid"
                    }
                },
                addTodo:{},
                markAllTodos:{}
            }
        },
        all:{
            on:{
                ACTIVE:"active",
                CLEAR_COMPLETED:"clearCompleted",
                COMPLETED:"completed"
            }
        },
        active:{
            on:{
                ALL:"all",
                CLEAR_COMPLETED:"clearCompleted",
                COMPLETED:"completed"
            }
        },
        clearCompleted:{
            on:{
                ALL:"all",
                ACTIVE:"active",
                COMPLETED:"completed"
            }
        },
        completed:{
            on:{
                ALL:"all",
                ACTIVE:"active",
                CLEAR_COMPLETED:"clearCompleted",
            }
        }
    }
})