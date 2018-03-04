
import BoardController from './board.controller';

BoardController.$inject = ['dataHub'];
const BoardComponent = {
    template: require('./board.template.html'),
    controller: BoardController,
    controllerAs: 'vm'
};
export default BoardComponent;