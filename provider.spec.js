import { Verifier } from '@pact-foundation/pact';

describe('Pact Verification', () => {
  
  it('validates the expectations of Consumer A Service', function() {
    this.timeout(50000);
    return new Verifier({
      provider: 'provider B',
      providerBaseUrl: 'http://localhost:8000', // <- location of your running provider
      pactBrokerUrl: 'http://115.160.223.122:9292/',
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
