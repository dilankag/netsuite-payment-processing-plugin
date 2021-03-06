/*
 Purpose:
 This script is used to import Netsuite's environment into IDE environment. You should not use this file while
 uploading any SuiteScript to your Netsuite account. This script is intended to be used only for testing purpose.
 */

function nlapiAddDays(d, days) {}

function nlapiAddMonths(d, months) {}

function nlapiAttachRecord(type, id, type2, id2, attributes) {}

function nlapiCancelLineItem(type) {}

function nlapiCommitLineItem(type) {}

function nlapiCopyRecord(type, id, initializeValues) {
    return new nlobjRecord()
}

function nlapiCreateAssistant(title, hideHeader) {
    return new nlobjAssistant()
}

function nlapiCreateCSVImport() {
    return new nlobjCSVImport()
}

function nlapiCreateCurrentLineItemSubrecord(sublist, fldname) {
    return new nlobjSubrecord()
}

function nlapiCreateSearch(type, filters, columns) {
    return new nlobjSearch()
}

function nlapiCreateSubrecord(fldname) {
    return new nlobjSubrecord()
}

function nlapiCreateError(code, details, suppressNotification) {
    return new nlobjError()
}

function nlapiCreateFile(name, type, contents) {
    return new nlobjFile()
}

function nlapiCreateForm(title, hideNavbar) {
    return new nlobjForm()
}

function nlapiCreateList(title, hideNavbar) {
    return new nlobjList()
}

function nlapiCreateRecord(type, initializeValues) {
    return new nlobjRecord()
}

function nlapiCreateReportDefinition() {
    return new nlobjReportDefinition()
}

function nlapiCreateReportForm(title) {
    return new nlobjReportForm()
}

function nlapiDateToString(d, format) {}

function nlapiDeleteFile(id) {}

function nlapiDeleteRecord(type, id) {}

function nlapiDetachRecord(type, id, type2, id2, attributes) {}

function nlapiDisableField(fldnam, val) {}

function nlapiDisableLineItemField(type, fldnam, val) {}

function nlapiEditCurrentLineItemSubrecord(sublist, fldname) {
    return new nlobjSubrecord()
}

function nlapiEditSubrecord(fldname) {
    return new nlobjSubrecord()
}

function nlapiEncrypt(s, algorithm, key) {}

function nlapiEscapeXML(text) {}

function nlapiExchangeRate(sourceCurrency, targetCurrency, effectiveDate) {}

function nlapiFindLineItemMatrixValue(type, fldnam, val, column) {}

function nlapiFindLineItemValue(type, fldnam, val) {}

function nlapiFormatCurrency(str) {}

function nlapiGetContext() {
    return new nlobjContext()
}

function nlapiGetCurrentLineItemIndex(type) {}

function nlapiGetCurrentLineItemMatrixValue(type, fldnam, column) {}

function nlapiGetCurrentLineItemText(type, fldnam) {}

function nlapiGetCurrentLineItemValue(type, fldnam) {}

function nlapiGetCurrentLineItemValues(type, fldnam) {}

function nlapiGetDepartment() {}

function nlapiGetField(fldnam) {
    return new nlobjField()
}

function nlapiGetFieldText(fldnam) {}

function nlapiGetFieldTexts(fldnam) {}

function nlapiGetFieldValue(fldnam) {}

function nlapiGetFieldValues(fldnam) {}

function nlapiGetLineItemCount(type) {}

function nlapiGetLineItemField(type, fldnamm, linenum) {
    return new nlobjField()
}

function nlapiGetLineItemMatrixField(type, fldnam, linenum, column) {
    return new nlobjField()
}

function nlapiGetLineItemMatrixValue(type, fldnam, linenum, column) {}

function nlapiGetLineItemText(type, fldnam, linenum) {}

function nlapiGetLineItemValue(type, fldnam, linenum) {}

function nlapiGetLineItemValues(type, fldname, linenum) {}

function nlapiGetLocation() {}

function nlapiGetLogin() {
    return new nlobjLogin()
}

function nlapiGetMatrixCount(type, fldnam) {}

function nlapiGetMatrixField(type, fldnam, column) {
    return new nlobjField()
}

function nlapiGetMatrixValue(type, fldnam, column) {}

function nlapiGetNewRecord() {
    return new nlobjRecord()
}

function nlapiGetOldRecord() {
    return new nlobjRecord()
}

function nlapiGetRecordId() {}

function nlapiGetRecordType() {}

function nlapiGetRole() {}

function nlapiGetSubsidiary() {}

function nlapiGetUser() {}

function nlapiInitiateWorkflow(recordtype, id, workflowid) {}

function nlapiInsertLineItem(type, line) {}

function nlapiInsertLineItemOption(type, fldnam, value, text, selected) {}

function nlapiInsertSelectOption(fldnam, value, text, selected) {}

function nlapiIsLineItemChanged(type) {}

function nlapiLoadFile(id) {
    return new nlobjFile()
}

function nlapiLoadRecord(type, id, initializeValues) {
    return new nlobjRecord()
}

function nlapiLoadSearch(type, id) {
    return new nlobjSearch()
}

function nlapiLogExecution(type, title, details) {
    console.log(type, title, details);
}

function nlapiLookupField(type, id, fields, text) {}

function nlapiMergeRecord(id, baseType, baseId, altType, altId, fields) {
    return new nlobjFile()
}

function nlapiOutboundSSO(id) {}

function nlapiPrintRecord(type, id, mode, properties) {
    return new nlobjFile()
}

function nlapiRefreshLineItems(type) {}

function nlapiRefreshPortlet() {}

function nlapiRemoveCurrentLineItemSubrecord(sublist, fldname) {}

function nlapiRemoveLineItem(type, line) {}

function nlapiRemoveLineItemOption(type, fldnam, value) {}

function nlapiRemoveSelectOption(fldnam, value) {}

function nlapiRemoveSubrecord(fldname) {}

function nlapiRequestURL(url, requestData, headers, callback, httpMethod) {
    console.log('endpoint url : ', url);
    console.log('raw request : ' , requestData);
    var httpRequest;
    if (window.XMLHttpRequest)
    {
        httpRequest = new XMLHttpRequest();
        console.log('client browser : IE7+, Firefox, Chrome, Opera, Safari');
    }
    else if (window.ActiveXObject)
    {
        httpRequest = new ActiveXObject('Microsoft.XMLHTTP');
        console.log('client browser : IE6, IE5');
    }
    httpRequest.open(httpMethod, url, false);
    for (var field in headers) {
        httpRequest.setRequestHeader(field, headers[field]);
        console.log('raw header : [ field : ', field , ', value : ', headers[field], ' ]');
    }
    var nlobj = new nlobjResponse();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status >= 200 && httpRequest.status < 400) {
                console.log('response ok : status : ', httpRequest.status);
                console.log('raw response : ' , httpRequest.responseText);
                nlobj.setBody(httpRequest.responseText);
            } else {
                console.log('response fail : ', httpRequest.responseText, ', status : ', httpRequest.status);
            }
        }
    };
    httpRequest.send(requestData);
    return nlobj;
}

function nlapiRequestURLWithCredentials(credentials, url, postdata, headers, httpMethod) {
    return new nlobjResponse()
}

function nlapiResizePortlet() {}

function nlapiResolveURL(type, identifier, id, displayMode) {}

function nlapiScheduleScript(scriptId, deployId, params) {}

function nlapiSearchDuplicate(type, fields, id) {
    return [new nlobjSearchResult()]
}

function nlapiSearchGlobal(keywords) {
    return [new nlobjSearchResult()]
}

function nlapiSearchRecord(type, id, filters, columns) {
    return [new nlobjSearchResult()]
}

function nlapiSelectLineItem(type, linenum) {}

function nlapiSelectNewLineItem(type) {}

function nlapiSelectNode(node, xpath) {}

function nlapiSelectNodes(node, xpath) {}

function nlapiSelectValue(node, xpath) {}

function nlapiSelectValues(node, path) {}

function nlapiSendCampaignEmail(campaigneventid, recipientid) {}

function nlapiSendEmail(author, recipient, subject, body, cc, bcc, records, attachments) {}

function nlapiSendFax(author, recipient, subject, body, records, attachments) {}

function nlapiSetCurrentLineItemMatrixValue(type, fldnam, column, value, firefieldchanged, synchronous) {}

function nlapiSetCurrentLineItemText(type, fldnam, text, firefieldchanged, synchronous) {}

function nlapiSetCurrentLineItemValue(type, fldnam, value, firefieldchanged, synchronous) {}

function nlapiSetCurrentLineItemValues(type, fldnam, values, firefieldchanged, synchronous) {}

function nlapiSetFieldText(fldname, txt, firefieldchanged, synchronous) {}

function nlapiSetFieldTexts(fldname, txts, firefieldchanged, synchronous) {}

function nlapiSetFieldValue(fldnam, value, firefieldchanged, synchronous) {}

function nlapiSetFieldValues(fldnam, value, firefieldchanged, synchronous) {}

function nlapiSetLineItemValue(type, fldnam, linenum, value) {}

function nlapiSetMatrixValue(type, fldnam, column, value, firefieldchanged, synchronous) {}

function nlapiSetRecoveryPoint() {}

function nlapiSetRedirectURL(type, identifier, id, editmode, parameters) {}

function nlapiStringToDate(str, format) {}

function nlapiStringToXML(text) {}

function nlapiSubmitCSVImport(nlobjCSVImport) {}

function nlapiSubmitField(type, id, fields, values, doSourcing) {}

function nlapiSubmitFile(file) {}

function nlapiSubmitRecord(record, doSourcing, ignoreMandatoryFields) {}

function nlapiTransformRecord(type, id, transformType, transformValues) {
    return new nlobjRecord()
}

function nlapiTriggerWorkflow(recordtype, id, workflowid, actionid) {}

function nlapiViewCurrentLineItemSubrecord(sublist, fldname) {
    return new nlobjSubrecord()
}

function nlapiViewLineItemSubrecord(sublist, fldname, linenum) {
    return new nlobjSubrecord()
}

function nlapiViewSubrecord(fldname) {
    return new nlobjSubrecord()
}

function nlapiXMLToPDF(xmlstring) {
    return new nlobjFile()
}

function nlapiXMLToString(xml) {}

function nlapiYieldScript() {}

nlobjAssistant = function () {
    this.addField = function (name, type, label, source, group) {
        return new nlobjField()
    }
    this.addFieldGroup = function (name, label) {
        return new nlobjFieldGroup()
    }
    this.addStep = function (name, label) {
        return new nlobjAssistantStep()
    }
    this.addSubList = function (name, type, label) {
        return new nlobjSubList()
    }
    this.getAllFields = function () {}
    this.getAllFieldGroups = function () {}
    this.getAllSteps = function () {
        return [new nlobjAssistantStep()]
    }
    this.getAllSubLists = function () {}
    this.getCurrentStep = function () {
        return new nlobjAssistantStep()
    }
    this.getField = function (name) {
        return new nlobjField()
    }
    this.getFieldGroup = function (name) {
        return new nlobjFieldGroup()
    }
    this.getLastAction = function () {}
    this.getLastStep = function () {
        return new nlobjAssistantStep()
    }
    this.getNextStep = function () {
        return new nlobjAssistantStep()
    }
    this.getStep = function (name) {
        return new nlobjAssistantStep()
    }
    this.getStepCount = function () {}
    this.getSubList = function (name) {
        return new nlobjSubList()
    }
    this.hasError = function () {}
    this.isFinished = function () {}
    this.sendRedirect = function (response) {
        return new nlobjResponse()
    }
    this.setCurrentStep = function (step) {
        return new nlobjAssistantStep()
    }
    this.setError = function (html) {}
    this.setFieldValues = function (values) {}
    this.setFinished = function (html) {}
    this.setNumbered = function (hasStepNumber) {}
    this.setOrdered = function (ordered) {}
    this.setScript = function (script) {}
    this.setShortcut = function (show) {}
    this.setSplash = function (title, text1, text2) {}
    this.setTitle = function (title) {}
}
nlobjAssistantStep = function () {
    this.getAllFields = function () {}
    this.getAllLineItemFields = function (group) {}
    this.getAllLineItems = function () {}
    this.getFieldValue = function (name) {}
    this.getFieldValues = function (name) {}
    this.getLineItemCount = function (group) {}
    this.getLineItemValue = function (group, name, line) {}
    this.getStepNumber = function () {}
    this.setHelpText = function (help) {}
    this.setLabel = function (label) {}
}
nlobjButton = function () {
    this.setDisabled = function (disabled) {}
    this.setLabel = function (label) {}
    this.setVisible = function (visible) {}
}
nlobjColumn = function () {
    this.addParamToURL = function (param, value, dynamic) {}
    this.setLabel = function (label) {}
    this.setURL = function (url, dynamic) {}
}
nlobjConfiguration = function () {
    this.getAllFields = function () {}
    this.getField = function (fldnam) {
        return new nlobjField()
    }
    this.getFieldText = function (name) {}
    this.getFieldTexts = function (name) {}
    this.getFieldValue = function (name) {}
    this.getFieldValues = function (name) {}
    this.getType = function () {}
    this.setFieldText = function (name, text) {}
    this.setFieldTexts = function (name, text) {}
    this.setFieldValue = function (name, value) {}
    this.setFieldValues = function (name, value) {}
}
nlobjContext = function () {
    this.getColorPreferences = function () {}
    this.getCompany = function () {
        return 'Netsuite'
    }
    this.getDepartment = function () {}
    this.getDeploymentId = function () {}
    this.getEmail = function () {
        return 'dilanka.roshan@paycorp.com.au';
    }
    this.getEnvironment = function () {}
    this.getExecutionContext = function () {}
    this.getFeature = function (name) {}
    this.getLocation = function () {}
    this.getLogLevel = function () {}
    this.getName = function () {}
    this.getPercentComplete = function () {}
    this.getPermission = function (name) {}
    this.getPreference = function (name) {}
    this.getRemainingUsage = function () {}
    this.getRole = function () {}
    this.getRoleCenter = function () {}
    this.getScriptId = function () {}
    this.getSessionObject = function (name) {}
    this.setting = function (type, name) {}
    this.getSubsidiary = function () {}
    this.getUser = function () {}
    this.getVersion = function () {}
    this.setPercentComplete = function (pct) {}
    this.setSessionObject = function (name, value) {}
    this.setting = function (type, name, value) {}
}
nlobjCSVImport = function () {
    this.setLinkedFile = function (file) {}
    this.setMapping = function (savedImport) {}
    this.setOption = function (jobName) {}
    this.setPrimaryFile = function (file) {}
}
nlobjError = function () {
    this.getCode = function () {}
    this.getDetails = function () {}
    this.getId = function () {}
    this.getInternalId = function () {}
    this.getStackTrace = function () {}
    this.getUserEvent = function () {}
}
nlobjField = function () {
    this.addSelectOption = function (value, text, selected) {}
    this.getLabel = function () {}
    this.getName = function () {}
    this.getSelectOptions = function (filter, filteroperator) {
        return [new nlobjSelectOption()]
    }
    this.getType = function () {}
    this.setAlias = function (alias) {
        return new nlobjField()
    }
    this.setBreakType = function (breaktype) {
        return new nlobjField()
    }
    this.setDefaultValue = function (value) {
        return new nlobjField()
    }
    this.setDisplaySize = function (width, height) {}
    this.setDisplayType = function (type) {
        return new nlobjField()
    }
    this.setHelpText = function (help, inline) {
        return new nlobjField()
    }
    this.setLabel = function (label) {
        return new nlobjField()
    }
    this.setLayoutType = function (type, breaktype) {
        return new nlobjField()
    }
    this.setLinkText = function (text) {
        return new nlobjField()
    }
    this.setMandatory = function (mandatory) {
        return new nlobjField()
    }
    this.setMaxLength = function (maxlength) {
        return new nlobjField()
    }
    this.setPadding = function (padding) {
        return new nlobjField()
    }
}
nlobjFieldGroup = function () {
    this.setCollapsible = function (collapsible, hidden) {
        return new nlobjFieldGroup()
    }
    this.setLabel = function (label) {
        return new nlobjFieldGroup()
    }
    this.setShowBorder = function (show) {}
    this.setSingleColumn = function (column) {}
}
nlobjFile = function () {
    this.getDescription = function () {}
    this.getFolder = function () {}
    this.getId = function () {}
    this.getName = function () {}
    this.getSize = function () {}
    this.getType = function () {}
    this.getURL = function () {}
    this.getValue = function () {}
    this.isInactive = function () {}
    this.isOnline = function () {}
    this.setDescription = function (description) {}
    this.setEncoding = function (encodingType) {}
    this.setFolder = function (id) {}
    this.setIsInactive = function (inactive) {}
    this.setIsOnline = function (online) {}
    this.setName = function (name) {}
}
nlobjForm = function () {
    this.addButton = function (name, label, script) {
        return new nlobjButton()
    }
    this.addCredentialField = function (id, label, website, scriptId, value, entityMatch, tab) {
        return new nlobjField()
    }
    this.addField = function (name, type, label, sourceOrRadio, tab) {
        return new nlobjField()
    }
    this.addFieldGroup = function (name, label, tab) {
        return new nlobjFieldGroup()
    }
    this.addPageLink = function (type, title, url) {}
    this.addResetButton = function (label) {
        return new nlobjButton()
    }
    this.addSubList = function (name, type, label, tab) {
        return new nlobjSubList()
    }
    this.addSubmitButton = function (label) {
        return new nlobjButton()
    }
    this.addSubTab = function (name, label, tab) {
        return new nlobjTab()
    }
    this.addTab = function (name, label) {
        return new nlobjTab()
    }
    this.getButton = function (name) {
        return new nlobjButton()
    }
    this.getField = function (name, radio) {
        return new nlobjField()
    }
    this.getSubList = function (name) {
        return new nlobjSubList()
    }
    this.getSubTab = function (name) {
        return new nlobjTab()
    }
    this.getTab = function (name) {
        return new nlobjTab()
    }
    this.getTabs = function () {
        return [new nlobjTab()]
    }
    this.insertField = function (field, nextfld) {
        return new nlobjField()
    }
    this.insertSubList = function (sublist, nextsub) {
        return new nlobjSubList()
    }
    this.insertSubTab = function (subtab, nextsub) {
        return new nlobjTab()
    }
    this.insertTab = function (tab, nexttab) {
        return new nlobjTab()
    }
    this.removeButton = function (name) {}
    this.setFieldValues = function (values) {}
    this.setScript = function (script) {}
    this.setTitle = function (title) {}
}
nlobjList = function () {
    this.addButton = function (name, label, script) {}
    this.addColumn = function (name, type, label, align) {
        return new nlobjColumn()
    }
    this.addEditColumn = function (column, showView, showHrefCol) {
        return new nlobjColumn()
    }
    this.addPageLink = function (type, title, url) {}
    this.addRow = function (row) {}
    this.addRows = function (rows) {}
    this.setScript = function (script) {}
    this.setStyle = function (style) {}
    this.setTitle = function (title) {}
}
nlobjLogin = function () {
    this.changeEmail = function (currentPassword, newEmail, justThisAccount) {}
    this.changePassword = function (currentPassword, newPassword) {}
}
nlobjPivotColumn = function () {
    this.getAlias = function () {}
    this.getParent = function () {
        return new nlobjPivotColumn()
    }
    this.getLabel = function () {}
    this.getSummaryLine = function () {
        return new nlobjPivotColumn()
    }
    this.getValue = function () {}
    this.getVisibleChildren = function () {
        return [new nlobjPivotColumn()]
    }
    this.isHidden = function () {}
}
nlobjPivotRow = function () {
    this.getAlias = function () {}
    this.getChildren = function () {
        return [new nlobjPivotRow()]
    }
    this.getLabel = function () {}
    this.getParent = function () {
        return new nlobjPivotRow()
    }
    this.getSummaryLine = function () {
        return new nlobjPivotRow()
    }
    this.getValue = function () {}
    this.getValue = function (pivotColumn) {}
    this.isDetailLine = function () {}
}
nlobjPivotTable = function () {
    this.getColumnHierarchy = function () {
        return new nlobjPivotColumn()
    }
    this.getRowHierarchy = function () {
        return new nlobjPivotRow()
    }
}
nlobjPivotTableHandle = function () {
    this.getPivotTable = function () {
        return new nlobjPivotTable()
    }
    this.isReady = function () {}
}
nlobjPortlet = function () {
    this.addColumn = function (name, type, label, just) {
        return new nlobjColumn()
    }
    this.addEditColumn = function (column, showView, showHrefCol) {
        return new nlobjColumn()
    }
    this.addField = function (name, type, label, source) {
        return new nlobjField()
    }
    this.addLine = function (text, url, indent) {}
    this.addRow = function (row) {}
    this.addRows = function (rows) {}
    this.setHtml = function (html) {}
    this.setRefreshInterval = function (n) {}
    this.setScript = function (scriptid) {}
    this.setSubmitButton = function (url, label, target) {
        return new nlobjButton()
    }
    this.setTitle = function (title) {}
}
nlobjRecord = function () {
    this.commitLineItem = function (group) {}
    this.createCurrentLineItemSubrecord = function (sublist, fldname) {
        return new nlobjSubrecord()
    }
    this.createSubrecord = function (fldname) {
        return new nlobjSubrecord()
    }
    this.editCurrentLineItemSubrecord = function (sublist, fldname) {
        return new nlobjSubrecord()
    }
    this.getCurrentLineItemValues = function (type, fldname) {}
    this.editSubrecord = function (fldname) {
        return new nlobjSubrecord()
    }
    this.findLineItemMatrixValue = function (group, fldnam, column, val) {}
    this.findLineItemValue = function (group, fldnam, value) {}
    this.getAllFields = function () {}
    this.getAllLineItemFields = function (group) {}
    this.getCurrentLineItemMatrixValue = function (group, fldnam, column) {}
    this.getField = function (fldnam) {
        return new nlobjField()
    }
    this.getFieldText = function (name) {}
    this.getFieldTexts = function (name) {}
    this.getFieldValue = function (name) {}
    this.getFieldValues = function (name) {}
    this.getId = function () {}
    this.getLineItemCount = function (group) {}
    this.getLineItemField = function (group, fldnam, linenum) {
        return new nlobjField()
    }
    this.getLineItemMatrixField = function (group, fldnam, linenum, column) {
        return new nlobjField()
    }
    this.getLineItemMatrixValue = function (group, fldnam, lineum, column) {}
    this.getLineItemText = function (group, fldnam, linenum) {}
    this.getLineItemValue = function (group, name, linenum) {}
    this.getLineItemValues = function (type, fldname, linenum) {}
    this.getMatrixCount = function (group, fldnam) {}
    this.getMatrixField = function (group, fldname, column) {
        return new nlobjField()
    }
    this.getMatrixValue = function (group, fldnam, column) {}
    this.getRecordType = function () {}
    this.insertLineItem = function (group, linenum) {}
    this.removeLineItem = function (group, linenum) {}
    this.removeCurrentLineItemSubrecord = function (sublist, fldname) {}
    this.removeSubrecord = function (fldname) {}
    this.selectLineItem = function (group, linenum) {}
    this.selectNewLineItem = function (group) {}
    this.setCurrentLineItemMatrixValue = function (group, fldnam, column, value) {}
    this.setCurrentLineItemValue = function (group, name, value) {}
    this.setFieldText = function (name, text) {}
    this.setFieldTexts = function (name, text) {}
    this.setFieldValue = function (name, value) {}
    this.setFieldValues = function (name, value) {}
    this.setLineItemValue = function (group, name, linenum, value) {}
    this.setMatrixValue = function (group, fldnam, column, value) {}
    this.viewCurrentLineItemSubrecord = function (sublist, fldname) {
        return new nlobjSubrecord()
    }
    this.viewLineItemSubrecord = function (sublist, fldname, linenum) {
        return new nlobjSubrecord()
    }
    this.viewSubrecord = function (fldname) {
        return new nlobjSubrecord()
    }
}
nlobjReportColumn = function () {
    this.getFormula = function () {}
    this.getParent = function () {}
    this.isMeasure = function () {}
}
nlobjReportColumnHierarchy = function () {
    this.getChildren = function () {}
    this.getParent = function () {}
}
nlobjReportDefinition = function () {
    this.addColumn = function (alias, isMeasure, label, parent, format, formula) {
        return new nlobjReportColumn()
    }
    this.addColumnHierarchy = function (alias, label, parent, format) {
        return new nlobjReportColumnHierarchy()
    }
    this.addRowHierarchy = function (alias, label, format) {
        return new nlobjReportRowHierarchy()
    }
    this.addSearchDatasource = function (searchType, id, filters, columns, map) {}
    this.executeReport = function (form) {
        return new nlobjPivotTableHandle()
    }
    this.setTitle = function (title) {}
}
nlobjReportForm = function () {}
nlobjReportRowHierarchy = function () {
    this.getChild = function () {}
    this.getParent = function () {}
}
nlobjResponse = function () {
    var body;
    this.addHeader = function (name, value) {}
    this.getAllHeaders = function () {}
    this.getBody = function () {
        return this.body;
    }
    this.getCode = function () {}
    this.getError = function () {
        return new nlobjError()
    }
    this.getHeader = function (name) {}
    this.getHeaders = function (name) {}
    this.setContentType = function (type, name, disposition) {}
    this.setHeader = function (name, value) {}
    this.sendRedirect = function (type, identifier, id, editmode, parameters) {}
    this.setBody = function (body) {
        this.body = body;
    }
    this.write = function (output) {}
    this.writeLine = function (output) {}
    this.writePage = function (pageobject) {}
}
nlobjRequest = function () {
    this.getAllHeaders = function () {}
    this.getAllParameters = function () {}
    this.getBody = function () {}
    this.getFile = function (id) {
        return new nlobjFile()
    }
    this.getHeader = function (name) {}
    this.getLineItemCount = function (group) {}
    this.getLineItemValue = function (group, name, line) {}
    this.getMethod = function () {}
    this.getParameter = function (name) {}
    this.getParameterValues = function (name) {}
    this.getURL = function () {}
}
nlobjSearch = function () {
    this.addColumn = function (column) {}
    this.addColumns = function (columns) {}
    this.addFilter = function (filter) {}
    this.addFilters = function (filters) {}
    this.deleteSearch = function () {}
    this.getColumns = function () {
        return [new nlobjSearchColumn()]
    }
    this.getFilterExpression = function () {}
    this.getFilters = function () {
        return [new nlobjSearchFilter()]
    }
    this.getId = function () {}
    this.getIsPublic = function () {}
    this.getScriptId = function () {}
    this.getSearchType = function () {}
    this.runSearch = function () {
        return new nlobjSearchResultSet()
    }
    this.saveSearch = function (title, scriptId) {}
    this.setColumns = function (columns) {}
    this.setFilterExpression = function (filterExpression) {}
    this.setFilters = function (filters) {}
    this.setIsPublic = function (type) {}
    this.setRedirectURLToSearch = function () {}
    this.setRedirectURLToSearchResults = function () {}
}
nlobjSearchColumn = function (name, join, summary) {
    this.getFormula = function () {}
    this.getFunction = function () {}
    this.getJoin = function () {}
    this.getLabel = function () {}
    this.getName = function () {}
    this.getSort = function () {}
    this.getSummary = function () {}
    this.setFormula = function (formula) {
        return new nlobjSearchColumn()
    }
    this.setFunction = function (functionid) {
        return new nlobjSearchColumn()
    }
    this.setLabel = function (label) {
        return new nlobjSearchColumn()
    }
    this.setSort = function (order) {
        return new nlobjSearchColumn()
    }
    this.setWhenOrderedBy = function (name, join) {
        return new nlobjSearchColumn()
    }
}
nlobjSearchFilter = function (name, join, operator, value1, value2) {
    this.getFormula = function () {}
    this.getJoin = function () {}
    this.getName = function () {}
    this.getSummaryType = function () {}
    this.getOperator = function () {}
    this.setFormula = function (formula) {
        return new nlobjSearchFilter()
    }
    this.setSummaryType = function (type) {
        return new nlobjSearchFilter()
    }
}
nlobjSearchResult = function () {
    this.getAllColumns = function () {
        return [new nlobjSearchColumn()]
    }
    this.getId = function () {}
    this.getRecordType = function () {}
    this.getText = function (column) {}
    this.getText = function (name, join, summary) {}
    this.getValue = function (name, join, summary) {}
    this.getValue = function (column) {}
}
nlobjSelectOption = function () {
    this.getId = function () {};
    this.getText = function () {}
}
nlobjSubList = function () {
    this.addButton = function (name, label, script) {
        return new nlobjButton()
    }
    this.addField = function (name, type, label, source) {
        return new nlobjField()
    }
    this.addMarkAllButtons = function () {}
    this.addRefreshButton = function () {
        return new nlobjButton()
    }
    this.getLineItemCount = function (group) {}
    this.getLineItemValue = function (group, fldnam, linenum) {}
    this.setAmountField = function (field) {}
    this.setDisplayType = function (type) {}
    this.setHelpText = function (help) {}
    this.setLabel = function (label) {}
    this.setLineItemValue = function (name, linenum, value) {}
    this.setLineItemValues = function (values) {}
    this.setUniqueField = function (name) {
        return new nlobjField()
    }
}
nlobjSubrecord = function () {
    this.cancel = function () {}
    this.commit = function () {}
}
nlobjTab = function () {
    this.setLabel = function (label) {
        return new nlobjTab()
    }
    this.setHelpText = function (help) {
        return new nlobjTab()
    }
}
