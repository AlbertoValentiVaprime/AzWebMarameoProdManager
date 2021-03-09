
function PostToBc(parameter) {

    try {

        var viewModel = GetViewModel(parameter);
        var json = viewModel.serialize().toString();

        Controller(viewModel);
        CallJavaScript(json);
        //console.log(json);
    } catch (err) {
        alert('PostToBc error: ' + parameter + ' -  ' + err);
        console.log(err);
    }
}

function PostToBcDemo(parameter) {
    try {
        console.log(parameter);
        CallJavaScript(parameter);
        return true;
    } catch (err) {
        alert('PostToBcDemo Error: ' + parameter + ' -  ' + err);
        console.log(err);
    }
}

function PostRaiseControlAddInEvent(index, msg) {
    try {

        PostToBc(msg);

        RaiseControlAddInEvent(index, msg);

        return true;
    } catch (err) {
        alert('PostRaiseControlAddInEvent Error: ' + msg + ' -  ' + err);
        console.log(err);
    }
}

function DoPostControlAddInEvent(msg) {
    try {
        alert('DoPostControlAddInEvent ' + msg);
        return true;
    } catch (err) {
        alert('DoPostControlAddInEvent Error: ' + msg + ' -  ' + err);
        console.log(err);
    }
}




