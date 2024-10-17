import { Injectable } from "@angular/core";

import { TitleService } from "./title.service";

@Injectable()
export class DataService {
    constructor(private titleSvc: TitleService) {
        console.log('service created');
    }
    getServiceData(): string {
        // return 'Welcome to Service in Angular'
        return this.titleSvc.getTitle()
    }
}