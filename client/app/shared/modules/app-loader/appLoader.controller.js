
export default function AppLoaderController(AppLoaderService) {
    let vm = this;

    vm.$onInit = $onInit;
    
    function $onInit() {
        AppLoaderService.launch();
    }
}