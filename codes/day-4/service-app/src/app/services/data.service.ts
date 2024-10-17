export class DataService {
    constructor() {
        console.log('service created');
    }
    getTitle(): string {
        return 'Welcome to Service in Angular'
    }
}