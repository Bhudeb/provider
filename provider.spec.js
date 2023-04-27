import { Verifier } from '@pact-foundation/pact';

describe('Pact Verification', () => {
  it('validates the expectations of Consumer A Service', () => {
    

    return new Verifier({
      provider: 'provider A',
      providerBaseUrl: 'http://localhost:8000', // <- location of your running provider
      pactBrokerUrl: 'http://localhost:9292',
      publishVerificationResult: true,
      providerVersion: "1.0.0", //recommended to be the git sha eg. process.env.MY_CI_COMMIT
      providerVersionBranch: "master", //recommended to be the git branch eg. process.env.MY_GIT_SHA
      consumerVersionSelectors: [{
        latest: true
      }],
      
    })
      .verifyProvider()
      .then(() => {
        console.log('Pact Verification Complete!');
      });
  });
});
