
export default function AppLoaderController(AppService) {
    let vm = this;

    vm.$onInit = $onInit;
    
    function $onInit() {
        AppService.launch();    
    }
}