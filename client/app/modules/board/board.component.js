
import BoardController from './board.controller';

BoardController.$inject = [];
const BoardComponent = {
    template: require('./board.template.html'),
    controller: BoardController,
};
export default BoardComponent;