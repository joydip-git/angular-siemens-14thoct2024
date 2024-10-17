import { Injectable } from "@angular/core";
import { TitleService } from "./title.service";
import { ServiceContract } from "./servicecontract";

@Injectable()
export class AlternateDataService implements ServiceContract {
    constructor(private titleSvc: TitleService) {

    }
    getServiceData() {
        return this.titleSvc.getTitle()
    }
}