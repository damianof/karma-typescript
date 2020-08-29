import { IHelloService } from "@/services/hello-service.interface";

export class HelloService {

    constructor(private service: IHelloService) {}

    public sayHello(): string {

        return this.service.sayHello();
    }
}
