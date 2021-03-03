function Controller(viewModel) {

    try {

        if (viewModel.RequiredActionType == "ActionType.UsernameInput")
            document.getElementById("UserValue").className = "inputBrushBlue";
        else
            document.getElementById("UserValue").className = "inputBrushGray";

        if (viewModel.RequiredActionType == "ActionType.MachineTypeInput") {
            document.getElementById("MachineType").className = "inputBrushBlue";
            document.getElementById("MachineNo").className = "inputBrushBlue";
        }
        else {
            document.getElementById("MachineType").className = "inputBrushGray";
            document.getElementById("MachineNo").className = "inputBrushGray";
        }

        if (viewModel.RequiredActionType == "ActionType.ProdOrderNoInput")
            document.getElementById("ProductionOrderNo").className = "inputBrushBlue";
        else
            document.getElementById("ProductionOrderNo").className = "inputBrushGray";

        if (viewModel.RequiredActionType == "ActionType.ProdOrderAndOperationNoInput") {
            document.getElementById("ProductionOrderNo").className = "inputBrushBlue";
            document.getElementById("OperationNo").className = "inputBrushBlue";
        }
        else {
            document.getElementById("ProductionOrderNo").className = "inputBrushGray";
            document.getElementById("OperationNo").className = "inputBrushGray";
        }


        if (viewModel.RequiredActionType == "ActionType.StandstillInput")
            document.getElementById("IdleCode").className = "inputBrushBlue";
        else
            document.getElementById("IdleCode").className = "inputBrushGray";

        document.getElementById("MachineType").IsEnabled = (viewModel.RequiredActionType == "ActionType.MachineTypeInput");
        document.getElementById("StartProcessButton").IsEnabled = ((viewModel.RequiredActionType == "ActionType.WaitingInput")
            || (viewModel.RequiredActionType == "ActionType.SettingInput") || (viewModel.RequiredActionType == "ActionType.StandstillInput"));
        document.getElementById("StartSetupButton").IsEnabled = ((viewModel.RequiredActionType == "ActionType.WaitingInput")
            || (viewModel.RequiredActionType == "ActionType.ProgressInput")
            || (viewModel.RequiredActionType == "ActionType.StandstillInput"));
        document.getElementById("StartIdleButton").IsEnabled = ((viewModel.RequiredActionType == "ActionType.WaitingInput")
            || (viewModel.RequiredActionType == "ActionType.SettingInput")
            || (viewModel.RequiredActionType == "ActionType.ProgressInput"));
        document.getElementById("EndProcessButton").IsEnabled = (viewModel.RequiredActionType == "ActionType.ProgressInput");
        document.getElementById("EndSetupButton").IsEnabled = (viewModel.RequiredActionType == "ActionType.SettingInput");
        document.getElementById("EndIdleButton").IsEnabled = (viewModel.RequiredActionType == "ActionType.StandstillInput");
        document.getElementById("PostButton").IsEnabled = (viewModel.RequiredActionType == "ActionType.WaitingInput");
        document.getElementById("SkipOperationButton").IsEnabled = (viewModel.RequiredActionType == "ActionType.WaitingInput");
        document.getElementById("FinishOperationButton").IsEnabled = (viewModel.RequiredActionType == "ActionType.WaitingInput");
        document.getElementById("ChangeUserButton").IsEnabled = true;
        document.getElementById("ChangeMachineButton").IsEnabled = true;
        document.getElementById("ScrapButton").IsEnabled = (viewModel.RequiredActionType == "ActionType.WaitingInput");
        document.getElementById("OutPutButton").IsEnabled = (viewModel.RequiredActionType == "ActionType.WaitingInput");
        document.getElementById("Input").Focus();
    } catch (err) {
        alert('Controller error: ' + parameter + ' -  ' + err);
        console.log(err);
    }
}
