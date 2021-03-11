
function PostToBc(parameter) {

    try {

        var viewModel = GetViewModel(parameter);
        var json = viewModel.serialize().toString();

        Controller(viewModel);

        if (typeof (CallJavaScript) == 'function')
            CallJavaScript(json);
    } catch (err) {
        alert('PostToBc error: ' + parameter + ' -  ' + err);
    }
}

function PostToBcDemo(parameter) {
    try {
        CallJavaScript(parameter); x
    } catch (err) {
        alert('PostToBcDemo Error: ' + parameter + ' -  ' + err);
    }
}

function PostRaiseControlAddInEvent(index, msg) {
    try {
        PostToBc(msg);
        if (typeof (RaiseControlAddInEvent) == 'function')
            RaiseControlAddInEvent(index, msg);
    } catch (err) {
        alert('PostRaiseControlAddInEvent Error: ' + msg + ' -  ' + err);
    }
}






