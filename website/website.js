
function PostToBc(parameter) {

    try {

        var viewModel = GetViewModel(parameter);
        var json = viewModel.serialize().toString();

        Controller(viewModel);
        if (CallJavaScript != null)
            CallJavaScript(json);
        //console.log(json);
    } catch (err) {
        alert('Error: ' + parameter + ' -  ' + err);
        console.log(err);
    }
}

function PostToBcDemo(parameter) {

    try {
        console.log(parameter);
        CallJavaScript(parameter);
        return true;
    } catch (err) {
        alert('Error: ' + parameter + ' -  ' + err);
        console.log(err);
    }
}

