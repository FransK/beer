export class Review {
    constructor (
        public beerid:string,
        public reviewerid:string,
        public rating:number,
        public review:string,
        public tagline:string,
        public timestamp:number
    ) {}
}