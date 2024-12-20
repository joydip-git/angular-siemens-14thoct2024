import { Injectable } from "@angular/core";

import { TitleService } from "./title.service";
import { ServiceContract } from "./servicecontract";

// @Injectable({
//     providedIn: 'root'
// })
@Injectable()
export class DataService implements ServiceContract {
    constructor(private titleSvc: TitleService) {
        console.log('service created');
    }
    getServiceData(): string {
        // return 'Welcome to Service in Angular'
        return this.titleSvc.getTitle()
    }
}