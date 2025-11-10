function formToJsonString(formSelector) {
    var formData = $(formSelector).serialize();
    var jsonData = {};
    formData.split('&').forEach(function (keyValue) {
        var pair = keyValue.split('=');
        jsonData[pair[0]] = decodeURIComponent(pair[1] || '');
    });
    return JSON.stringify(jsonData);
}


function post(url, data, successCallback, errorCallback,completeCallback) {
    var request = {
        type: 'POST',
        contentType: 'application/json',
        data: data,
        url: url,
        success:successCallback
    };
    if (errorCallback != undefined)
        request['error'] = errorCallback;
    if (completeCallback != undefined)
        request['complete'] = completeCallback;
    $.ajax(request);
}


function handleSubmit(formSelector, submitHandler) {
    $(function () {
        $(formSelector).on('submit', function (e) {
            e.preventDefault();
            submitHandler();
        })
    });
}