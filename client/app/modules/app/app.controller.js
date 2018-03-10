
export default function AppController() {
    let vm = this;
    vm.contentLoaded = false;

    vm.toggleMobileHeader = toggleMobileHeader;
    vm.onMobileBackgroundClick = onMobileBackgroundClick;
    vm.onSideBatItemClicked = onSideBatItemClicked;

    function toggleMobileHeader () {
        let leftFrame = document.getElementById('app-shell');
        if (leftFrame.classList.contains('left-trame-transition-right')) {
            leftFrame.classList.remove('left-trame-transition-right');
        } else {
            leftFrame.classList.add('left-trame-transition-right');
        }
    }
    
    function onMobileBackgroundClick() {
        toggleMobileHeader();
    }

    function onSideBatItemClicked() {
        toggleMobileHeader();
    }

};
