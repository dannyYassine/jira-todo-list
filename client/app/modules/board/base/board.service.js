
BoardService.$inject = ['dataHub', 'todoService'];
export default function BoardService(dataHub, todoService) {

    return {
        addTodo: addTodo,
        getTodos: getTodos
    };

    function addTodo() {

    }
    
    function getTodos() {
        todoService.get((todos) => {
            console.log(todos);
        })
    }
}