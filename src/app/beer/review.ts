export class Review {
    constructor (
        public beer:string,
        public beerid:string,
        public reviewer:string,
        public reviewerid:string,
        public rating:number,
        public review:string,
        public tagline:string,
        public timestamp:number
    ) {}
}