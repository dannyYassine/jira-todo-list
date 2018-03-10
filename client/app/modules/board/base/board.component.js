
import BoardController from './board.controller';

BoardController.$inject = ['dataHub', 'todoService'];
const BoardComponent = {
    template: require('./board.template.html'),
    controller: BoardController,
    controllerAs: 'vm'
};
export default BoardComponent;