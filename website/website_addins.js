
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

    
    
}

