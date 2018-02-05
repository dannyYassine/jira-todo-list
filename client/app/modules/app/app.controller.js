
let AppController = function () {
    let vm = this;
    vm.contentLoaded = true;

    vm.toggleMobileHeader = toggleMobileHeader;
    
    function toggleMobileHeader () {
        let leftFrame = document.getElementById('app-shell');
        if (leftFrame.classList.contains('left-trame-transition-right')) {
            leftFrame.classList.remove('left-trame-transition-right');
        } else {
            leftFrame.classList.add('left-trame-transition-right');
        }
    }

};
module.exports = AppController;