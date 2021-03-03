
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
        alert('Error: ' + parameter + ' -  ' + err);
        console.log(err);
    }
}

