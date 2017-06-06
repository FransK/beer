export class Reviewer {
    constructor (
        public reviewerid:string,
        public name:string,
        public email:string,
        public password:string,
        public confirmPassword:string,
    ) {}    
}
