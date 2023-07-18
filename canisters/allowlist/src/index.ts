import { $query, $update } from 'azle';

let message: string = '';

$query;
export function getMessage(): string {
    return message;
}

$update;
export function setMessage(newMessage: string): void {
    message = newMessage;
}