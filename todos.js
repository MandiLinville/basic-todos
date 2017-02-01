const vm = new Vue({
    el: '#root',
    data: {
        todos: [],
        todo: ''
        
    },
    methods: {
        submitTodo(todo) {
            this.todos.push({
                task: todo,
                completed: false
            })
            this.todo='' 
        },
        removeItem(todo){
        var i = this.todos.indexOf(todo)
            this.todos.splice(i,1)
        },
        completedTodo(todo){
            debugger 
            todo.completed=!todo.completed
        }
    }
})

