import { NgModule } from "@angular/core";
import { RootComponent } from "./root.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    //register components, directives, pipes
    declarations: [RootComponent],
    //register services
    providers: [],
    //regsiter modules (built-in and custom feature modules of the application)
    imports: [BrowserModule],
    //register the name of the component(s) which should be bootstrapped
    bootstrap: [RootComponent]
})
export class RootModule {
    constructor() {
        console.log('Root Module created...');
    }
}