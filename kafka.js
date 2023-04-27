import { Kafka } from 'kafkajs'

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['127.0.0.1:9092']
})


export async function sendMessage(message) {
    console.log('message',message)
    const producer = kafka.producer()
    await producer.connect()
    await producer.send({
        topic: 'test',
        messages: prepareTopicMessage(message),
    })
    await producer.disconnect()
};

export function prepareTopicMessage(message) {
    console.log('Preparing Message')
    return [{
        value: JSON.stringify(message)
    }]
}