class AddIns {
    constructor() {

        this.Action = '';
        this.Description = '';
        this.MachineNo = '';
        this.MachineType = '';
        this.OperationNo = '';
        this.Output = '';
        this.ProdOrderNo = '';
        this.Status = '';
        this.User = '';
        this.Finish = '';
        this.CurrentAction = 0;
        this.ProcessingTime = 0; //decimal
        this.SetupTime = 0; //decimal
        this.IdleTime = 0; //decimal
        this.IdleCode = '';
        this.FinishedQuantity = 0; //decimal
        this.ScrapQuantity = 0; //decimal
        this.RequiredActionType = 0;
        this.SelectedInput = '';

        this.WorkCenterCode = '';
        this.WorkCenterGroupCode = '';
        this.SeperatorCode = '';
        this.StartProcessingCommand = '';
        this.EndProcessingCommand = '';
        this.StartSetupCommand = '';
        this.EndSetupCommand = '';
        this.StartIdleCommand = '';
        this.EndIdleCommand = '';
        this.PostCommand = '';
        this.SkipOperationCommand = '';
        this.ChangeUserCommand = '';
        this.ChangeMachineCommand = '';
        this.OutPutButtonCommand = '';
        this.ScrapButtonCommand = '';
        this.FinishOperationCommand = '';
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

    unserialize(str) {
        var instance = new ViewModel();
        var serializedObject = JSON.parse(str);
        Object.assign(instance, serializedObject);
        return instance;
    }

}

function DoPostControlAddInEvent(message) {
    try {

        var addins = new AddIns().unserialize(message);
        DataContextAddIns = addins;
        setProdOrderNo(addins.ProdOrderNo);
        setAction(addins.Action);
        setDescription(addins.Description);
        setMachineNo(addins.MachineNo);
        setMachineType(addins.MachineType);
        setOperationNo(addins.OperationNo);
        setOutput(addins.Output);
        setStatus(addins.Status);
        setUser(addins.User);
        setFinish(addins.Finish);
        setProcessingTime(addins.ProcessingTime);
        setSetupTime(addins.SetupTime);
        setIdleTime(addins.IdleTime);
        setIdleCode(addins.IdleCode);
        setFinishedQuantity(addins.FinishedQuantity);
        setScrapQuantity(addins.ScrapQuantity);
        setRequiredActionType(addins.RequiredActionType);
        setSelectedInput(addins.SelectedInput);
        setWorkCenterCode(addins.WorkCenterCode);
        setWorkCenterGroupCode(addins.WorkCenterGroupCode);
        setSeperatorCode(addins.SeperatorCode);
        setStartProcessingCommand(addins.StartProcessingCommand);
        setEndProcessingCommand(addins.EndProcessingCommand);
        setStartSetupCommand(addins.StartSetupCommand);
        setEndSetupCommand(addins.EndSetupCommand);
        setStartIdleCommand(addins.StartIdleCommand);
        setEndIdleCommand(addins.EndIdleCommand);
        setPostCommand(addins.PostCommand);
        setSkipOperationCommand(addins.SkipOperationCommand);
        setChangeUserCommand(addins.ChangeUserCommand);
        setChangeMachineCommand(addins.ChangeMachineCommand);
        setOutPutButtonCommand(addins.OutPutButtonCommand);
        setScrapButtonCommand(addins.ScrapButtonCommand);
        setFinishOperationCommand(addins.FinishOperationCommand);

    }
    catch (err) {
        alert('DoPostControlAddInEvent error: ' + err);
        console.log(err);
    }

}

function setAction(value) {
    AddIns.Action = value;
    CtrlAddinViewModel.Action = value;
    UpdateUI(CtrlAddinViewModel);
}


function setDescription(value) {
    AddIns.Description = value;
    CtrlAddinViewModel.Description = value;
    UpdateUI(CtrlAddinViewModel);
}

function setMachineNo(value) {
    AddIns.MachineNo = value;
    CtrlAddinViewModel.MachineNo = value;
    UpdateUI(CtrlAddinViewModel);
}

function setMachineType(value) {
    AddIns.MachineType = value;
    CtrlAddinViewModel.MachineType = value;
    UpdateUI(CtrlAddinViewModel);
}

function setOperationNo(value) {
    AddIns.OperationNo = value;
    CtrlAddinViewModel.OperationNo = value;
    UpdateUI(CtrlAddinViewModel);
}

function setOutput(value) {
    AddIns.Output = value;
    CtrlAddinViewModel.Output = value;
    UpdateUI(CtrlAddinViewModel);
}

function setProdOrderNo(value) {
    AddIns.ProdOrderNo = value;
    CtrlAddinViewModel.ProdOrderNo = value;
    UpdateUI(CtrlAddinViewModel);
}

function Status(value) {
    AddIns.Status = value;
    CtrlAddinViewModel.Status = value;
    UpdateUI(CtrlAddinViewModel);
}

function setUser(value) {
    AddIns.User = value;
    CtrlAddinViewModel.User = value;
    UpdateUI(CtrlAddinViewModel);
}

function setFinish(value) {
    AddIns.Finish = value;
    CtrlAddinViewModel.Finish = value;
    UpdateUI(CtrlAddinViewModel);
}

function setProcessingTime(value) {
    AddIns.ProcessingTime = value;
    CtrlAddinViewModel.ProcessingTime = value;
    UpdateUI(CtrlAddinViewModel);
}

function setSetupTime(value) {
    AddIns.SetupTime = value;
    CtrlAddinViewModel.SetupTime = value;
    UpdateUI(CtrlAddinViewModel);
}

function setIdleTime(value) {
    AddIns.IdleTime = value;
    CtrlAddinViewModel.IdleTime = value;
    UpdateUI(CtrlAddinViewModel);
}

function setIdleCode(value) {
    AddIns.IdleCode = value;
    CtrlAddinViewModel.IdleCode = value;
    UpdateUI(CtrlAddinViewModel);
}

function setFinishedQuantity(value) {
    AddIns.FinishedQuantity = value;
    CtrlAddinViewModel.FinishedQuantity = value;
    UpdateUI(CtrlAddinViewModel);
}

function setScrapQuantity(value) {
    AddIns.ScrapQuantity = value;
    CtrlAddinViewModel.ScrapQuantity = value;
    UpdateUI(CtrlAddinViewModel);
}

function setRequiredActionType(value) {
    AddIns.RequiredActionType = value;
    CtrlAddinViewModel.RequiredActionType = value;
    UpdateUI(CtrlAddinViewModel);
}

function setSelectedInput(value) {
    AddIns.SelectedInput = value;
    CtrlAddinViewModel.SelectedInput = value;
    UpdateUI(CtrlAddinViewModel);
}

function setWorkCenterCode(value) {
    AddIns.WorkCenterCode = value;
    CtrlAddinViewModel.WorkCenterCode = value;
    UpdateUI(CtrlAddinViewModel);
}

function setWorkCenterGroupCode(value) {
    AddIns.WorkCenterGroupCode = value;
    CtrlAddinViewModel.WorkCenterGroupCode = value;
    UpdateUI(CtrlAddinViewModel);
}

function setSeperatorCode(value) {
    AddIns.SeperatorCode = value;
    CtrlAddinViewModel.SeperatorCode = value;
    UpdateUI(CtrlAddinViewModel);
}

function setStartProcessingCommand(value) {
    AddIns.StartProcessingCommand = value;
    CtrlAddinViewModel.StartProcessingCommand = value;
    UpdateUI(CtrlAddinViewModel);
}

function setEndProcessingCommand(value) {
    AddIns.EndProcessingCommand = value;
    CtrlAddinViewModel.EndProcessingCommand = value;
    UpdateUI(CtrlAddinViewModel);
}

function setStartSetupCommand(value) {
    AddIns.StartSetupCommand = value;
    CtrlAddinViewModel.StartSetupCommand = value;
    UpdateUI(CtrlAddinViewModel);
}

function setEndSetupCommand(value) {
    AddIns.EndSetupCommand = value;
    CtrlAddinViewModel.EndSetupCommand = value;
    UpdateUI(CtrlAddinViewModel);
}

function setStartIdleCommand(value) {
    AddIns.StartIdleCommand = value;
    CtrlAddinViewModel.StartIdleCommand = value;
    UpdateUI(CtrlAddinViewModel);
}

function setEndIdleCommand(value) {
    AddIns.EndIdleCommand = value;
    CtrlAddinViewModel.EndIdleCommand = value;
    UpdateUI(CtrlAddinViewModel);
}

function setPostCommand(value) {
    AddIns.PostCommand = value;
    CtrlAddinViewModel.PostCommand = value;
    UpdateUI(CtrlAddinViewModel);
}

function setSkipOperationCommand(value) {
    AddIns.SkipOperationCommand = value;
    CtrlAddinViewModel.SkipOperationCommand = value;
    UpdateUI(CtrlAddinViewModel);
}

function setChangeUserCommand(value) {
    AddIns.ChangeUserCommand = value;
    CtrlAddinViewModel.ChangeUserCommand = value;
    UpdateUI(CtrlAddinViewModel);
}

function setChangeMachineCommand(value) {
    AddIns.ChangeMachineCommand = value;
    CtrlAddinViewModel.ChangeMachineCommand = value;
    UpdateUI(CtrlAddinViewModel);
}

function setOutPutButtonCommand(value) {
    AddIns.OutPutButtonCommand = value;
    CtrlAddinViewModel.OutPutButtonCommand = value;
    UpdateUI(CtrlAddinViewModel);
}


function setScrapButtonCommand(value) {
    AddIns.ScrapButtonCommand = value;
    CtrlAddinViewModel.ScrapButtonCommand = value;
    UpdateUI(CtrlAddinViewModel);
}

function setFinishOperationCommand(value) {
    AddIns.FinishOperationCommand = value;
    CtrlAddinViewModel.FinishOperationCommand = value;
    UpdateUI(CtrlAddinViewModel);
}


