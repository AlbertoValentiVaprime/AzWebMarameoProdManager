
function PostToBc(parameter) {

    try {

        var viewModel = GetViewModel(parameter);
        var json = viewModel.serialize().toString();

        Controller(viewModel);
        CallJavaScript(json);
        //console.log(json);
    } catch (err) {
        alert('PostToBc error: ' + parameter + ' -  ' + err);
    }
}

function PostToBcDemo(parameter) {
    try {
        console.log(parameter);
        CallJavaScript(parameter);
    } catch (err) {
        alert('PostToBcDemo Error: ' + parameter + ' -  ' + err);
    }
}

function PostRaiseControlAddInEvent(index, msg) {
    try {
        PostToBc(msg);
        RaiseControlAddInEvent(index, msg);
    } catch (err) {
        alert('PostRaiseControlAddInEvent Error: ' + msg + ' -  ' + err);
    }
}






