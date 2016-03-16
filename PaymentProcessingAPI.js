/*
 Purpose:
 This script is used to import Netsuite's environment into IDE environment. You should not use this file while
 uploading any SuiteScript to your Netsuite account. This script is intended to be used only for testing purpose.
 */

displaySetupInput = function () {
    var partnerUniqueIdentifier;
    this.getPartnerUniqueIdentifier = function () {
        return this.partnerUniqueIdentifier;
    }
    this.setPartnerUniqueIdentifier = function (value) {
        this.partnerUniqueIdentifier = value;
    }
}

displaySetupOutput = function () {
    this.addCredentialField = function (name, label, domain, allowedUserScriptId, value) {
    }
    this.setProfileExtensionRecordType = function (type) {
    }
}

singleStringOutput = function () {
    var string;
    this.getString = function () {
        return this.string;
    }
    this.setString = function (value) {
        this.string = value;
    }
}

processSetupInput = function () {
    this.getCredentialFieldValue = function (name) {
    }
    this.getPartnerUniqueIdentifier = function () {
    }
}

processSetupOutput = function () {
    this.setPartnerUniqueIdentifier = function (id) {
    }
}

properties = function () {
    var name;
    var processorType;
    var supportedOperations;
    this.getName = function () {
        return this.name;
    }
    this.getProcessorType = function () {
        return this.processorType;
    }
    this.getSupportedOperations = function () {
        return this.supportedOperations;
    }
    this.setName = function (name) {
        this.name = name;
    }
    this.setProcessorType = function (type) {
        this.processorType = type;
    }
    this.setSupportedOperations = function (operations) {
        this.supportedOperations = operations;
    }
}

operationInput = function () {
    var partnerUniqueIdentifier;
    var creditCard;
    var transactionDetails;
    this.getPartnerUniqueIdentifier = function () {
        return this.partnerUniqueIdentifier;
    }
    this.getCreditCard = function () {
        return this.creditCard;
    }
    this.getTransactionDetails = function () {
        return this.transactionDetails;
    }
    this.setPartnerUniqueIdentifier = function (partnerUniqueIdentifier) {
        this.partnerUniqueIdentifier = partnerUniqueIdentifier;
    }
    this.setCreditCard = function (creditCard) {
        this.creditCard = creditCard;
    }
    this.setTransactionDetails = function (transactionDetails) {
        this.transactionDetails = transactionDetails;
    }
}
operationOutput = function () {
    var result;
    this.requestPaymentGateway = function (credentials, url, postData, headers, httpMethod) {
    }
    this.getResult = function () {
        return this.result;
    }
    this.setResult = function (result) {
        this.result = result;
    }
}
postBackPaymentRequest = function () {
    this.getAddress = function () {
    }
    this.getAllHeaders = function () {
    }
    this.getAllParameters = function () {
    }
    this.getBody = function () {
    }
}
postBackPaymentResult = function () {
    this.getResponse = function () {
    }
    this.setStatus = function (status) {
    }
    this.setUpdateData = function (data) {
    }
}
postBackPaymentResponse = function () {
    this.setErrorCode = function (errorCode) {
    }
    this.setHeader = function (name, value) {
    }
    this.write = function (data) {
    }
}
creditCard = function () {
    var creditCardNumber;
    var expirationDate;
    var nameOnCard;
    var securityCode;
    this.getCardStreet = function () {
    }
    this.getCardZip = function () {
    }
    this.getCreditCardNumber = function () {
        return this.creditCardNumber;
    }
    this.getExpirationDate = function () {
        return this.expirationDate;
    }
    this.getIssueNo = function () {
    }
    this.getNameOnCard = function () {
        return this.nameOnCard;
    }
    this.getSecurityCode = function () {
        return this.securityCode;
    }
    this.getValidFromDate = function () {
    }
    this.setCreditCardNumber = function (creditCardNumber) {
        this.creditCardNumber = creditCardNumber;
    }
    this.setExpirationDate = function (expirationDate) {
        this.expirationDate = expirationDate;
    }
    this.setNameOnCard = function (nameOnCard) {
        this.nameOnCard = nameOnCard;
    }
    this.setSecurityCode = function (securityCode) {
        this.securityCode = securityCode;
    }
}
transactionDetails = function () {
    var delayCode;
    var memo;
    var amount;
    var currencyISO;
    var paymentDeviceId;
    var redirectDetails;
    this.getRedirectDetails = function () {
        return this.redirectDetails;
    }
    this.getBillToPhone = function () {
    }
    this.getCity = function () {
    }
    this.getCountryISO = function () {
    }
    this.getCustomerName = function () {
    }
    this.getDelayCode = function () {
        return this.delayCode;
    }
    this.getEmail = function () {
    }
    this.getFreightAmount = function () {
    }
    this.getMemo = function () {
        return this.memo;
    }
    this.getPayerAuthenticationField = function (fieldn) {
    }
    this.getPaymentMethod = function () {
    }
    this.getPurchaseOrderNumber = function () {
    }
    this.getShipFromZip = function () {
    }
    this.getShipToAddressee = function () {
    }
    this.getShipToCity = function () {
    }
    this.getShipToCountry = function () {
    }
    this.getShipToState = function () {
    }
    this.getShipToStreet1 = function () {
    }
    this.getShipToStreet2 = function () {
    }
    this.getShipToZip = function () {
    }
    this.getShopperIpAddress = function () {
    }
    this.getState = function () {
    }
    this.getStreet = function () {
    }
    this.getTaxExempt = function () {
    }
    this.getTaxTotal = function () {
    }
    this.getTransactionId = function () {
    }
    this.getTranType = function () {
    }
    this.getZipCode = function () {
    }
    this.isAdjustedExpirationDate = function () {
    }
    this.isECommerceTransaction = function () {
    }
    this.isPendingCapture = function () {
    }
    this.isRecurringPayment = function () {
    }
    this.isThreeDSecureEnabled = function () {
    }
    this.paymentGatewayInTestMode = function () {
    }
    this.getAmount = function () {
        return this.amount;
    }
    this.getCurrencyISO = function () {
        return this.currencyISO;
    }
    this.getPaymentDeviceId = function () {
        return this.paymentDeviceId;
    }
    this.setRedirectDetails = function(redirectDetails) {
        this.redirectDetails = redirectDetails;
    }
    this.setDelayCode = function (delayCode) {
        this.delayCode = delayCode;
    }
    this.setMemo = function (memo) {
        this.memo = memo;
    }
    this.setAmount = function (amount) {
        this.amount = amount;
    }
    this.setCurrencyISO = function (currencyISO) {
        this.currencyISO = currencyISO;
    }
    this.setPaymentDeviceId = function (paymentDeviceId) {
        this.paymentDeviceId = paymentDeviceId;
    }
}
result = function () {
    var anExternalSystemWasContacted;
    var authorizationCode;
    var holdDetails;
    var holdReason;
    var paymentStatus;
    var referenceCode;
    this.getAnExternalSystemWasContacted = function () {
        return this.anExternalSystemWasContacted;
    }
    this.getAuthorizationCode = function () {
        return this.authorizationCode;
    }
    this.getHoldDetails = function () {
        return this.holdDetails;
    }
    this.getHoldReason = function () {
        return this.holdReason;
    }
    this.getPaymentStatus = function () {
        return this.paymentStatus;
    }
    this.getReferenceCode = function () {
        return this.referenceCode;
    }
    this.setRequest = function (request) {
    }
    this.setAnExternalSystemWasContacted = function (anExternalSystemWasContacted) {
        this.anExternalSystemWasContacted = anExternalSystemWasContacted;
    }
    this.setAuthorizationCode = function (authorizationCode) {
        this.authorizationCode = authorizationCode;
    }
    this.setAVSAddressResult = function (AVSAddressResult) {
    }
    this.setAVSZipCodeResult = function (AVSZipCodeResult) {
    }
    this.setCscResult = function (cscResult) {
    }
    this.setHoldDetails = function (holdDetails) {
        this.holdDetails = holdDetails;
    }
    this.setHoldReason = function (holdReason) {
        this.holdReason = holdReason;
    }
    this.setInReview = function (inReview) {
    }
    this.setPaymentStatus = function (paymentStatus) {
        this.paymentStatus = paymentStatus;
    }
    this.setResponse = function (response) {
    }
    this.setRequestedRedirectData = function (url) {
    }
    this.setThreeDSecure = function (acs_url, md, paReq, nameValuePairs) {
    }
    this.setReferenceCode = function (referenceCode) {
        this.referenceCode = referenceCode;
    }
}
redirectDetails = function () {
    var dataFromPostBack;
    var dataFromRedirect;
    var postBackUrl;
    var returnUrl;
    this.getDataFromPostBack = function () {
        return this.dataFromPostBack;
    }
    this.getDataFromRedirect = function () {
        return this.dataFromRedirect;
    }
    this.getPostBackUrl = function (port) {
        return this.postBackUrl;
    }
    this.getReturnUrl = function () {
        return this.returnUrl;
    }
}