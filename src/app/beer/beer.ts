export class Beer {
    constructor (
        public beerid:string,
        public breweryid:string,
        public characteristics:{},
        public name:string,
        public type:string,
        public pricing:string,
    ) {}
}
