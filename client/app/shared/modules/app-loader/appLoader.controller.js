
export default function AppLoaderController(AppLoaderService) {

    this.$onInit = $onInit;
    this.$postLink = $postLink;

    function $onInit() {
        AppLoaderService.launch();
    }

    function $postLink() {
    }
}