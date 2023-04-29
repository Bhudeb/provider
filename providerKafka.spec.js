import { resolve as _resolve } from "path"
import { MessageProviderPact} from "@pact-foundation/pact"
import {prepareTopicMessage} from "./kafka.js"


// 1 Messaging integration client
const itemsApiClient = {
  createMessage: (message) => {
    return new Promise((resolve, reject) => {
        const createdMessage = prepareTopicMessage(message)
        resolve(createdMessage)
    })
  },
}

describe("Message provider tests", () => {
  // 2 Pact setup
  let message = {"id":1,"title":"Create a project","order":1,"completed":true}
  
  const p = new MessageProviderPact({
    // logLevel: 'debug',
    messageProviders: {
      'a request for an item': () => itemsApiClient.createMessage(message),
    },
    provider: "provider",
    providerVersion: "1.0.0",
    // pactUrls: [
    //   _resolve(
    //     process.cwd(),
    //     "consumerKafka-provider.json"
    //   ),
    // ],
    pactBrokerUrl: 'http://localhost:9292',
    publishVerificationResult: true,
    consumerVersionSelectors: [{
        latest: true
      }],
  })

  // 3 Verify the interactions
  describe("Verify message client", () => {
    it("sends an item", () => {
      return p.verify()
    })
  })
})