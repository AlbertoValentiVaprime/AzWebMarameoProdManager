function Controller(viewModel) {

    try {

        if (viewModel.RequiredActionType == ActionType.UsernameInput)
            document.getElementById("UserValue").className = ".inputBrushBlue";
        else
            document.getElementById("UserValue").className = ".inputBrushGray";

        /*if (viewModel.RequiredActionType == ActionType.UsernameInput)
    {
        ui.UserValue.BorderBrush = BrushBlue;
        ui.UserValue.BorderThickness = new Thickness(2);
    }
    else
    {
        ui.UserValue.BorderBrush = BrushGray;
        ui.UserValue.BorderThickness = new Thickness(1);
    }

    if (viewModel.RequiredActionType == ActionType.MachineTypeInput)
    {
        ui.MachineType.BorderBrush = BrushBlue;
        ui.MachineType.BorderThickness = new Thickness(2);
        ui.MachineNo.BorderBrush = BrushBlue;
        ui.MachineNo.BorderThickness = new Thickness(2);
    }
    else
    {
        ui.MachineType.BorderBrush = BrushGray;
        ui.MachineType.BorderThickness = new Thickness(1);
        ui.MachineNo.BorderBrush = BrushGray;
        ui.MachineNo.BorderThickness = new Thickness(1);
    }

    if (viewModel.RequiredActionType == ActionType.ProdOrderNoInput)
    {
        ui.ProductionOrderNo.BorderBrush = BrushBlue;
        ui.ProductionOrderNo.BorderThickness = new Thickness(2);
    }
    else
    {
        ui.ProductionOrderNo.BorderBrush = BrushGray;
        ui.ProductionOrderNo.BorderThickness = new Thickness(1);
    }

    if (viewModel.RequiredActionType == ActionType.ProdOrderAndOperationNoInput)
    {
        ui.ProductionOrderNo.BorderBrush = BrushBlue;
        ui.ProductionOrderNo.BorderThickness = new Thickness(2);
        ui.OperationNo.BorderBrush = BrushBlue;
        ui.OperationNo.BorderThickness = new Thickness(2);
    }
    else
    {
        ui.ProductionOrderNo.BorderBrush = BrushGray;
        ui.ProductionOrderNo.BorderThickness = new Thickness(1);
        ui.OperationNo.BorderBrush = BrushGray;
        ui.OperationNo.BorderThickness = new Thickness(1);
    }

    if (viewModel.RequiredActionType == ActionType.StandstillInput)
    {
        ui.IdleCode.BorderBrush = BrushBlue;
        ui.IdleCode.BorderThickness = new Thickness(2);
    }
    else
    {
        ui.IdleCode.BorderBrush = BrushGray;
        ui.IdleCode.BorderThickness = new Thickness(1);
    }

    ui.MachineType.IsEnabled = (viewModel.RequiredActionType == ActionType.MachineTypeInput);
    ui.StartProcessButton.IsEnabled = ((viewModel.RequiredActionType == ActionType.WaitingInput) || (viewModel.RequiredActionType == ActionType.SettingInput) || (viewModel.RequiredActionType == ActionType.StandstillInput));
    ui.StartSetupButton.IsEnabled = ((viewModel.RequiredActionType == ActionType.WaitingInput) || (viewModel.RequiredActionType == ActionType.ProgressInput) || (viewModel.RequiredActionType == ActionType.StandstillInput));
    ui.StartIdleButton.IsEnabled = ((viewModel.RequiredActionType == ActionType.WaitingInput) || (viewModel.RequiredActionType == ActionType.SettingInput) || (viewModel.RequiredActionType == ActionType.ProgressInput));
    ui.EndProcessButton.IsEnabled = (viewModel.RequiredActionType == ActionType.ProgressInput);
    ui.EndSetupButton.IsEnabled = (viewModel.RequiredActionType == ActionType.SettingInput);
    ui.EndIdleButton.IsEnabled = (viewModel.RequiredActionType == ActionType.StandstillInput);
    ui.PostButton.IsEnabled = (viewModel.RequiredActionType == ActionType.WaitingInput);
    ui.SkipOperationButton.IsEnabled = (viewModel.RequiredActionType == ActionType.WaitingInput);
    ui.FinishOperationButton.IsEnabled = (viewModel.RequiredActionType == ActionType.WaitingInput);
    ui.ChangeUserButton.IsEnabled = true;
    ui.ChangeMachineButton.IsEnabled = true;
    ui.ScrapButton.IsEnabled = (viewModel.RequiredActionType == ActionType.WaitingInput);
    ui.OutPutButton.IsEnabled = (viewModel.RequiredActionType == ActionType.WaitingInput);
    ui.Input.Focus();*/
    } catch (err) {
        alert('Error: ' + parameter + ' -  ' + err);
        console.log(err);
    }
}
