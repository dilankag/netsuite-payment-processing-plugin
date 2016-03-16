/*
 Purpose:
 The following unit-tests will test all setup and payment processing functions, including on-board functions.
 */

// ********************************************************************************************************************
// On-board Functions
// ********************************************************************************************************************
QUnit.test('getAuthClient() test', function(assert) {
    var authClient = getAuthClient('Netsuite', 'dilanka.roshan@paycorp.com.au');
    assert.ok(authClient != null, 'PASS - authClient : ' + JSON.stringify(authClient));
});

QUnit.test('getPpeClient() test', function(assert) {
    var ppeClient = getPpeClient(14000324, 'Netsuite Merchant On-boarding');
    assert.ok(ppeClient != null, 'PASS - ppeClient : ' + JSON.stringify(ppeClient));
});

QUnit.test('onboard() test', function(assert) {
    var credentials = onboard();
    assert.ok(credentials != null, 'PASS - authtoken : ' + credentials[0] + ', secret : ' + credentials[1] + ', client : ' + credentials[2], 'FAIL');
});

// ********************************************************************************************************************
// Setup Functions
// ********************************************************************************************************************
QUnit.test('getName() test', function(assert) {
    var name = getName(null, new singleStringOutput());
    assert.ok(name != null, 'PASS - string : ' + name.getString(), 'FAIL');
});

QUnit.test('getProperties() test', function(assert) {
    var _properties = getProperties(new properties());
    assert.ok(_properties != null, 'PASS - name : ' + _properties.getName() + ', processorType : ' + _properties.getProcessorType() + ', supportedOperations : ' + String(_properties.getSupportedOperations()), 'FAIL');
});

QUnit.test('displaySetup() test', function(assert) {
    var input = new displaySetupInput();
    var out = new displaySetupOutput();
    out = displaySetup(input, out);
    assert.ok(out != null , 'PASS');
});

// ********************************************************************************************************************
// Payment Processing Functions
// ********************************************************************************************************************
var originalTxnReference;

QUnit.test('authorization() test', function(assert) {
    var input = new operationInput();
    input.setPartnerUniqueIdentifier('3bfb61e2-b950-426f-881e-6879a165ee1a PM021RBjQ1GmeU2v 14000202');
    var output = new operationOutput();
    output.setResult(new result());
    var card = new creditCard();
    card.setCreditCardNumber('4564456445644564');
    card.setExpirationDate('06/2016');
    card.setNameOnCard('Scott Teagure');
    card.setSecurityCode('123');
    input.setCreditCard(card);
    var transaction = new transactionDetails();
    transaction.setMemo('Netsuite Authorization');
    transaction.setAmount(1);
    transaction.setCurrencyISO('AUD');
    input.setTransactionDetails(transaction);
    output = authorization(input, output);
    assert.ok(output != null , 'PASS - paymentStatus : ' + output.getResult().getPaymentStatus() + ', referenceCode : ' + output.getResult().getReferenceCode() + ', holdReason : ' + output.getResult().getHoldReason() + ', holdDetails : ' + output.getResult().getHoldDetails(), 'FAIL');
    originalTxnReference = output.getResult().getReferenceCode();
});

QUnit.test('capture() test', function(assert) {
    var input = new operationInput();
    input.setPartnerUniqueIdentifier('3bfb61e2-b950-426f-881e-6879a165ee1a PM021RBjQ1GmeU2v 14000202');
    var output = new operationOutput();
    output.setResult(new result());
    var card = new creditCard();
    card.setCreditCardNumber('4564456445644564');
    card.setExpirationDate('06/2016');
    card.setNameOnCard('Scott Teagure');
    card.setSecurityCode('123');
    input.setCreditCard(card);
    var transaction = new transactionDetails();
    transaction.setMemo('Netsuite Completion');
    transaction.setAmount(1);
    transaction.setCurrencyISO('AUD');
    transaction.setDelayCode(originalTxnReference);
    input.setTransactionDetails(transaction);
    output = capture(input, output);
    assert.ok(output != null , 'PASS - paymentStatus : ' + output.getResult().getPaymentStatus() + ', referenceCode : ' + output.getResult().getReferenceCode() + ', holdReason : ' + output.getResult().getHoldReason() + ', holdDetails : ' + output.getResult().getHoldDetails(), 'FAIL');
});

QUnit.test('sale() test', function(assert) {
    var input = new operationInput();
    input.setPartnerUniqueIdentifier('3bfb61e2-b950-426f-881e-6879a165ee1a PM021RBjQ1GmeU2v 14000202');
    var output = new operationOutput();
    output.setResult(new result());
    var card = new creditCard();
    card.setCreditCardNumber('4564456445644564');
    card.setExpirationDate('06/2016');
    card.setNameOnCard('Scott Teagure');
    card.setSecurityCode('123');
    input.setCreditCard(card);
    var transaction = new transactionDetails();
    transaction.setMemo('Netsuite Completion');
    transaction.setAmount(1);
    transaction.setCurrencyISO('AUD');
    transaction.setDelayCode(originalTxnReference);
    input.setTransactionDetails(transaction);
    output = sale(input, output);
    assert.ok(output != null , 'PASS - paymentStatus : ' + output.getResult().getPaymentStatus() + ', referenceCode : ' + output.getResult().getReferenceCode() + ', holdReason : ' + output.getResult().getHoldReason() + ', holdDetails : ' + output.getResult().getHoldDetails(), 'FAIL');
});

QUnit.test('refund() test', function(assert) {
    var input = new operationInput();
    input.setPartnerUniqueIdentifier('3bfb61e2-b950-426f-881e-6879a165ee1a PM021RBjQ1GmeU2v 14000202');
    var output = new operationOutput();
    output.setResult(new result());
    var card = new creditCard();
    card.setCreditCardNumber('4564456445644564');
    card.setExpirationDate('06/2016');
    card.setNameOnCard('Scott Teagure');
    card.setSecurityCode('123');
    input.setCreditCard(card);
    var transaction = new transactionDetails();
    transaction.setMemo('Netsuite Completion');
    transaction.setAmount(1);
    transaction.setCurrencyISO('AUD');
    transaction.setDelayCode(originalTxnReference);
    input.setTransactionDetails(transaction);
    output = refund(input, output);
    assert.ok(output != null , 'PASS - paymentStatus : ' + output.getResult().getPaymentStatus() + ', referenceCode : ' + output.getResult().getReferenceCode() + ', holdReason : ' + output.getResult().getHoldReason() + ', holdDetails : ' + output.getResult().getHoldDetails(), 'FAIL');
});

QUnit.test('refund() test', function(assert) {
    var input = new operationInput();
    input.setPartnerUniqueIdentifier('3bfb61e2-b950-426f-881e-6879a165ee1a PM021RBjQ1GmeU2v 14000202');
    var output = new operationOutput();
    output.setResult(new result());
    var card = new creditCard();
    card.setCreditCardNumber('4564456445644564');
    card.setExpirationDate('06/2016');
    card.setNameOnCard('Scott Teagure');
    card.setSecurityCode('123');
    input.setCreditCard(card);
    var transaction = new transactionDetails();
    transaction.setMemo('Netsuite Completion');
    transaction.setAmount(1);
    transaction.setCurrencyISO('AUD');
    transaction.setDelayCode(originalTxnReference);
    input.setTransactionDetails(transaction);
    output = refund(input, output);
    assert.ok(output != null , 'PASS - paymentStatus : ' + output.getResult().getPaymentStatus() + ', referenceCode : ' + output.getResult().getReferenceCode() + ', holdReason : ' + output.getResult().getHoldReason() + ', holdDetails : ' + output.getResult().getHoldDetails(), 'FAIL');
    originalTxnReference = output.getResult().getReferenceCode();
});