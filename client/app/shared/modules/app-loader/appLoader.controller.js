
export default function AppLoaderController(AppLoaderService) {

    this.$onInit = $onInit;
    
    function $onInit() {
        AppLoaderService.launch();
    }
}