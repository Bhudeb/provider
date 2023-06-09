import pact from '@pact-foundation/pact-node';

var opts = {
	pacticipants: [{name:'consumer A',version:'1.0.1'}],
  pactBroker: 'http://localhost:9292',
    
};

pact.canDeploy(opts)
	.then(function (result) {

		// You can deploy this
    // If output is not specified or is json, result describes the result of the check.
    // If outout is 'table', it is the human readable string returned by the check
	})
	.catch(function(error) {
		// You can't deploy this
    // if output is not specified, or is json, error will be an object describing
    // the result of the check (if the check failed),
    // if output is 'table', then the error will be a string describing the output from the binary,

    // In both cases, `error` will be an Error object if something went wrong during the check.
	});