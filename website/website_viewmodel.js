function GetViewModel(parameter) {

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
        var setupTime = document.getElementById("SetupTime").value;
        var idleTime = document.getElementById("IdleTime").value;
        var idleCode = document.getElementById("IdleCode").value;;
        var finishedQuantity = document.getElementById("FinishedQuantity").value;
        var scrapQuantity = document.getElementById("ScrapQunatity").value;

        var workCenterCode = DataContextAddIns.WorkCenterCode;
        var workCenterGroupCode = DataContextAddIns.WorkCenterGroupCode;
        var seperatorCode = DataContextAddIns.SeperatorCode;
        var startProcessingCommand = DataContextAddIns.StartProcessingCommand;
        var endProcessingCommand = DataContextAddIns.StartProcessingCommand;
        var startSetupCommand = DataContextAddIns.StartSetupCommand;
        var endSetupCommand = DataContextAddIns.EndSetupCommand;
        var startIdleCommand = DataContextAddIns.StartIdleCommand;
        var endIdleCommand = DataContextAddIns.EndIdleCommand;
        var postCommand = DataContextAddIns.PostCommand;
        var skipOperationCommand = DataContextAddIns.SkipOperationCommand;
        var changeUserCommand = DataContextAddIns.ChangeUserCommand;
        var changeMachineCommand = DataContextAddIns.ChangeMachineCommand;
        var outPutButtonCommand = DataContextAddIns.OutPutButtonCommand;
        var scrapButtonCommand = DataContextAddIns.ScrapButtonCommand;
        var finishButtonCommand = DataContextAddIns.FinishButtonCommand;

        var requiredActionType = parameter;
        var selectedInput = document.getElementById("Input").value;;

        var viewModel = new ViewModel(
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

        return viewModel;
    } catch (err) {
        alert('GetViewModel error:'+ err);
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

