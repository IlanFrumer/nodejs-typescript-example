import { setTimeout } from 'node:timers/promises';


async function runSomething(message: string) {
    console.log(message);
}

await setTimeout(1000);
await runSomething('Hello, world!');

