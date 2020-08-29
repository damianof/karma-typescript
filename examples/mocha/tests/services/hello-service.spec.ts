import { IHelloService } from "@/services/hello-service.interface";
import { HelloService } from "@/services/hello-service";
import { expect } from 'chai';

class MockHelloService implements IHelloService {

    public sayHello(): string {
        return "Hello world!";
    }
}

describe("HelloService", () => {

    it("should say 'Hello world!'", () => {

        let mockHelloService = new MockHelloService();
        let helloService = new HelloService(mockHelloService);

        expect(helloService.sayHello()).to.equal("Hello world!");
    });
});
