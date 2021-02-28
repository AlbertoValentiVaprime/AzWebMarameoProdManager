function PostToBc(parameter) {

    try {
        var fanr = document.getElementById("fanr").value;
        console.log(fanr);
        var vm = new ViewModel(
            fanr,
            fanr,
            fanr,
            parameter,
        );
        var json = vm.serialize().toString();
        CallJavaScript('OnBcPageCallBack', [json]);
        console.log(json);
        return true;
    } catch (err) {
        alert('Error: ' + parameter + ' -  ' + err);
        console.log(err);
    }
}

function PostToBcDemo(parameter) {

    try {
        console.log(parameter);
        CallJavaScript('OnBcPageCallBack', [parameter]);
        return true;
    } catch (err) {
        alert('Error: ' + parameter + ' -  ' + err);
        console.log(err);
    }
}


class ViewModel {
    constructor(ProdOrderNo, OperationNo, MachineNo, RequiredActionType) {
        this.ProdOrderNo = ProdOrderNo;
        this.OperationNo = OperationNo;
        this.MachineNo = MachineNo;
        this.RequiredActionType = RequiredActionType;
    }
    serialize() {
        return JSON.stringify(this);
    }

    unserialize(str, theClass) {
        var instance = new ViewModel();
        var serializedObject = JSON.parse(str);
        Object.assign(instance, serializedObject);
        return instance;
    }
}

