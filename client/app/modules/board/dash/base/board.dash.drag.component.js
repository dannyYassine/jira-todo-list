import interact from "interactjs";

const BoardDashDragComponent = {
    bindings: {
        dragStart: '&',
        dragEnd: '&'
    },
    transclude: true,
    template: require('./drag.template.html'),
    controller: BoardDashDragController,
    controllerAs: 'vm'
};
export default BoardDashDragComponent;

BoardDashDragController.$inject = ['$scope'];
function BoardDashDragController($scope) {
    let vm = this;
    vm.dropTarget = null;

    interact('.dropzone').dropzone({
        // only accept elements matching this CSS selector
        accept: '.draggable',
        // Require a 75% element overlap for a drop to be possible
        overlap: 0.75,

        // listen for drop related events:
        ondropactivate: function (event) {
            // add active dropzone feedback
            event.target.classList.add('drop-active');
            event.relatedTarget.style.transform = 'translate(0, 0)';
            event.relatedTarget.classList.add('dragging');

        },
        ondragenter: function (event) {
            var draggableElement = event.relatedTarget,
                dropzoneElement = event.target;
            vm.dropTarget = dropzoneElement;
            // feedback the possibility of a drop
            dropzoneElement.classList.add('drop-target');


        },
        ondragleave: function (event) {
            // remove the drop feedback style
            event.target.classList.remove('drop-target');
            // event.relatedTarget.classList.remove('can-drop');
            // event.relatedTarget.textContent = 'Dragged out';
        },
        ondrop: function (event) {
            // event.relatedTarget.textContent = 'Dropped';
            event.relatedTarget.style.transform = 'translate(0, 0)';
            event.relatedTarget.removeAttribute('data-x');
            event.relatedTarget.removeAttribute('data-y');

        },
        ondropdeactivate: function (event) {
            // remove active dropzone feedback
            event.target.classList.remove('drop-active');
            event.relatedTarget.classList.remove('dragging');
            event.target.classList.remove('drop-target');

        }
    });

    interact('.draggable')
        .draggable({
            // keep the element within the area of it's parent
            restrict: {
                elementRect: { top: 0, left: 0, bottom: 0, right: 0 }
            },
            // enable autoScroll
            autoScroll: true,

            // call this function on every dragmove event
            onmove: dragMoveListener,
            // call this function on every dragend event
            onend: function (event) {

            }
        })
        .on('down', function (event) {
            event.currentTarget.parentElement.parentElement.parentElement.classList.add('initial-dropzone');
            vm.dragStart({})
        })
        .on('up', function (event) {
            event.currentTarget.parentElement.parentElement.parentElement.classList.remove('initial-dropzone');

            var draggableElement = event.currentTarget,
                dropzoneElement = vm.dropTarget;

            let todoId = draggableElement.getAttribute('id').replace('todo-item-', '');
            let sectionId = dropzoneElement.getAttribute('id').replace('todo-section-', '');

            $scope.$apply(() => {
                vm.dragEnd({todoId, sectionId});
            });
        });

    function dragMoveListener (event) {
        var target = event.target,
            // keep the dragged position in the data-x/data-y attributes
            x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
            y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

        // translate the element
        target.style.webkitTransform =
            target.style.transform =
                'translate(' + x + 'px, ' + y + 'px)';

        // update the posiion attributes
        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);
    }
}