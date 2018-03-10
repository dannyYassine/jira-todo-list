import interact from "interactjs";

const BoardDashComponent = {
    bindings: {
        todos: '<'
    },
    template: require('./dash.template.html'),
    controller: BoardDash,
    controllerAs: 'vm'
};

BoardDash.$inject = [];
function BoardDash() {
    let vm = this;



}
export default BoardDashComponent;