import interact from "interactjs";

const BoardDashDragComponent = {
    bindings: {
        dragStart: '&',
        dragEnd: '&',
        dragChangeSection: '&'
    },
    transclude: true,
    template: `
        <div ng-transclude><div>
    `,
    controller: BoardDashDragController,
    controllerAs: 'vm'
};
export default BoardDashDragComponent;

function BoardDashDragController() {
    let vm = this;

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
            vm.dragStart({});
        },
        ondragenter: function (event) {
            var draggableElement = event.relatedTarget,
                dropzoneElement = event.target;

            // feedback the possibility of a drop
            dropzoneElement.classList.add('drop-target');
            draggableElement.classList.add('dragging');
            // draggableElement.classList.add('can-drop');
            // draggableElement.textContent = 'Dragged in';
            vm.dragChangeSection({});
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
            vm.dragEnd({});
        }
    });

    interact('.draggable')
        .draggable({
            // enable inertial throwing
            inertia: true,
            // keep the element within the area of it's parent
            restrict: {
                restriction: "parent",
                endOnly: true,
                elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
            },
            // enable autoScroll
            autoScroll: true,

            // call this function on every dragmove event
            onmove: dragMoveListener,
            // call this function on every dragend event
            onend: function (event) {

            }
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