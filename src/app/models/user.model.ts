export class User {
    name: string;
    firstName: string;
    age: number;
    quote: string;
    photo: string;

    constructor(name: string, firstName: string, age: number, photo: string, quote: string) {
        this.name = name;
        this.firstName = firstName;
        this.age = age;
        this.quote = quote;
        this.photo = photo;
    }
}