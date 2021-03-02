
function PostToBc(parameter) {

    try {
        
        var user = document.getElementById("UserValue").value;
        var prodOrderNo = document.getElementById("ProductionOrderNo").value;
        var operationNo = document.getElementById("OperationNo").value;
        var machineNo = document.getElementById("MachineNo").value;
        var description = document.getElementById("Description").value;
        var output = document.getElementById("Output").value;
        var action = document.getElementById("Action").value;
        var status = document.getElementById("Status").value;
        var machineType = document.getElementById("MachineType").value;
        var finish = '';
        var processingTime = document.getElementById("ProcessingTime").value;
        var setupTime =  document.getElementById("SetupTime").value;
        var idleTime = document.getElementById("IdleTime").value;
        var idleCode = document.getElementById("IdleCode").value;;
        var finishedQuantity = document.getElementById("FinishedQuantity").value;
        var scrapQuantity = document.getElementById("ScrapQunatity").value;

        var workCenterCode = '';
        var workCenterGroupCode = '';
        var seperatorCode = '';
        var startProcessingCommand = '';
        var endProcessingCommand = '';
        var startSetupCommand = '';
        var endSetupCommand = '';
        var startIdleCommand = '';
        var endIdleCommand = '';
        var postCommand = '';
        var skipOperationCommand = '';
        var changeUserCommand = '';
        var changeMachineCommand = '';
        var outPutButtonCommand = '';
        var scrapButtonCommand = '';
        var finishButtonCommand = '';

        var requiredActionType = parameter;
        var selectedInput = document.getElementById("Input").value;;

        console.log(machineNo);

        var vm = new ViewModel(
            user,
            prodOrderNo,
            operationNo,
            machineNo,
            description,
            output,
            action,
            status,
            machineType,
            finish,
            processingTime,
            setupTime,
            idleTime,
            idleCode,
            finishedQuantity,
            scrapQuantity,

            workCenterCode,
            workCenterGroupCode,
            seperatorCode,
            startProcessingCommand,
            endProcessingCommand,
            startSetupCommand,
            endSetupCommand,
            startIdleCommand,
            endIdleCommand,
            postCommand,
            skipOperationCommand,
            changeUserCommand,
            changeMachineCommand,
            outPutButtonCommand,
            scrapButtonCommand,
            finishButtonCommand,

            requiredActionType,
            selectedInput
        );

        var json = vm.serialize().toString();

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


class ViewModel {
    constructor(
        user,
        prodOrderNo,
        operationNo,
        machineNo,
        description,
        output,
        action,
        status,
        machineType,
        finish,
        processingTime,
        setupTime,
        idleTime,
        idleCode,
        finishedQuantity,
        scrapQuantity,

        workCenterCode,
        workCenterGroupCode,
        seperatorCode,
        startProcessingCommand,
        endProcessingCommand,
        startSetupCommand,
        endSetupCommand,
        startIdleCommand,
        endIdleCommand,
        postCommand,
        skipOperationCommand,
        changeUserCommand,
        changeMachineCommand,
        outPutButtonCommand,
        scrapButtonCommand,
        finishButtonCommand,

        requiredActionType,
        selectedInput) {

        this.User = user;
        this.ProdOrderNo = prodOrderNo;
        this.OperationNo = operationNo;
        this.MachineNo = machineNo;
        this.Description = description;
        this.Output = output;
        this.Action = action;
        this.Status = status;
        this.MachineType = machineType;
        this.Finish = finish;
        this.ProcessingTime = processingTime;
        this.SetupTime = setupTime;
        this.IdleTime = idleTime;
        this.IdleCode = idleCode;
        this.FinishedQuantity = finishedQuantity;
        this.ScrapQuantity = scrapQuantity;

        this.WorkCenterCode = workCenterCode;
        this.WorkCenterGroupCode = workCenterGroupCode;
        this.SeperatorCode = seperatorCode;
        this.StartProcessingCommand = startProcessingCommand;
        this.EndProcessingCommand = endProcessingCommand;
        this.StartSetupCommand = startSetupCommand;
        this.EndSetupCommand = endSetupCommand;
        this.StartIdleCommand = startIdleCommand;
        this.EndIdleCommand = endIdleCommand;
        this.PostCommand = postCommand;
        this.SkipOperationCommand = skipOperationCommand;
        this.ChangeUserCommand = changeUserCommand;
        this.ChangeMachineCommand = changeMachineCommand;
        this.OutPutButtonCommand = outPutButtonCommand;
        this.ScrapButtonCommand = scrapButtonCommand;
        this.FinishButtonCommand = finishButtonCommand;

        this.RequiredActionType = requiredActionType;
        this.SelectedInput = selectedInput;

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

