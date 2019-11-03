import { MessageService } from "./message.service"

describe('Message Service', () => {
    let service: MessageService;

    beforeEach(() => {

    })

    it('should have no message to start', () => {
        service = new MessageService();
        expect(service.messages.length).toBe(0);
    })
    it('should add a message when add is called', () => {
        service = new MessageService();
        service.add('message1');

        expect(service.messages.length).toBe(1);
    })
    it('should have 0 message when clear is called', () => {
        service = new MessageService();
        service.add('message1');

        service.clear();

        expect(service.messages.length).toBe(0);
    })
})