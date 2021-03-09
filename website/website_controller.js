function Controller(viewModel) {

    try {

        var inputSelected = "inputSelected";
        var inputUnselected = "inputUnselected";

        if (viewModel.RequiredActionType == ActionType_UsernameInput)
            document.getElementById("UserValue").className = inputSelected;
        else
            document.getElementById("UserValue").className = inputUnselected;

        if (viewModel.RequiredActionType == ActionType_MachineTypeInput) {
            document.getElementById("MachineType").className = inputSelected;
            document.getElementById("MachineNo").className = inputSelected;
        }
        else {
            document.getElementById("MachineType").className = inputUnselected;
            document.getElementById("MachineNo").className = inputUnselected;
        }

        if (viewModel.RequiredActionType == ActionType_ProdOrderNoInput)
            document.getElementById("ProductionOrderNo").className = inputSelected;
        else
            document.getElementById("ProductionOrderNo").className = inputUnselected;

        if (viewModel.RequiredActionType == ActionType_ProdOrderAndOperationNoInput) {
            document.getElementById("ProductionOrderNo").className = inputSelected;
            document.getElementById("OperationNo").className = inputSelected;
        }
        else {
            document.getElementById("ProductionOrderNo").className = inputUnselected;
            document.getElementById("OperationNo").className = inputUnselected;
        }

        if (viewModel.RequiredActionType == ActionType_StandstillInput)
            document.getElementById("IdleCode").className = inputSelected;
        else
            document.getElementById("IdleCode").className = inputUnselected;

        document.getElementById("MachineType").disabled = !(viewModel.RequiredActionType == ActionType_MachineTypeInput);
        document.getElementById("StartProcessButton").disabled =
            !((viewModel.RequiredActionType == ActionType_WaitingInput)
                || (viewModel.RequiredActionType == ActionType_SettingInput) || (viewModel.RequiredActionType == ActionType_StandstillInput));
        document.getElementById("StartSetupButton").disabled =
            !((viewModel.RequiredActionType == ActionType_WaitingInput)
                || (viewModel.RequiredActionType == ActionType_ProgressInput)
                || (viewModel.RequiredActionType == ActionType_StandstillInput));
        document.getElementById("StartIdleButton").disabled =
            !((viewModel.RequiredActionType == ActionType_WaitingInput)
                || (viewModel.RequiredActionType == ActionType_SettingInput)
                || (viewModel.RequiredActionType == ActionType_ProgressInput));
        document.getElementById("EndProcessButton").disabled = !(viewModel.RequiredActionType == ActionType_ProgressInput);
        document.getElementById("EndSetupButton").disabled = !(viewModel.RequiredActionType == ActionType_SettingInput);
        document.getElementById("EndIdleButton").disabled = !(viewModel.RequiredActionType == ActionType_StandstillInput);
        document.getElementById("PostButton").disabled = !(viewModel.RequiredActionType == ActionType_WaitingInput);
        document.getElementById("SkipOperationButton").disabled = !(viewModel.RequiredActionType == ActionType_WaitingInput);
        document.getElementById("FinishOperationButton").disabled = !(viewModel.RequiredActionType == ActionType_WaitingInput);
        document.getElementById("ChangeUserButton").disabled = false;
        document.getElementById("ChangeMachineButton").disabled = false;
        document.getElementById("ScrapButton").disabled = !(viewModel.RequiredActionType == ActionType_WaitingInput);
        document.getElementById("OutPutButton").disabled = !(viewModel.RequiredActionType == ActionType_WaitingInput);
        //document.getElementById("Input").focus();
    } catch (err) {
        alert('Controller error: ' + err);
        console.log(err);
    }
}

function DataBind(viewModel) {
    try {
        document.getElementById("UserValue").Text = viewModel.User;
        document.getElementById("ProductionOrderNo").Text = viewModel.ProdOrderNo;
        document.getElementById("OperationNo").Text = viewModel.OperationNo;
        document.getElementById("Status").Text = viewModel.User;
        document.getElementById("MachineType").Text = viewModel.MachineType;
        document.getElementById("MachineNo").Text = viewModel.MachineNo;
        document.getElementById("Description").Text = viewModel.Description;
        document.getElementById("SetupTime").Text = viewModel.SetupTime;
        document.getElementById("ProcessingTime").Text = viewModel.ProcessingTime;
        document.getElementById("IdleTime").Text = viewModel.IdleTime;
        document.getElementById("IdleCode").Text = viewModel.IdleCode;
        document.getElementById("FinishedQuantity").Text = viewModel.FinishedQuantity;
        document.getElementById("ScrapQunatity").Text = viewModel.ScrapQuantity;
        document.getElementById("Action").Text = viewModel.Action;
        document.getElementById("Output").Text = viewModel.Output;
    } catch (err) {
        alert('DataBind error: ' + err);
        console.log(err);
    }

}

function UpdateUI(viewModel) {
    try {
        DataBind(viewModel);
        Controller(viewModel);
    } catch (err) {
        alert('UpdateUI error: ' + err);
        console.log(err);
    }
}

window.onload = function () {
    InitController();
};

var DataContextAddIns;
var CtrlAddinViewModel;

function InitController() {

    try {
        DataContextAddIns = new AddIns();
        CtrlAddinViewModel = GetViewModel('');

        /*document.getElementById("UserValue").ondblclick = UserValue_MouseDown;
        document.getElementById("ProductionOrderNo").ondblclick = ProductionOrderNo_MouseDown;
        document.getElementById("OperationNo").ondblclick = OperationNo_MouseDown;
        document.getElementById("MachineType").ondblclick = MachineType_SelectionChanged;
        document.getElementById("MachineNo").onmousedown = MachineNo_MouseDown;
        document.getElementById("IdleCode").onmousedown = IdleCode_MouseDown;
        document.getElementById("StartProcessButton").onclick = StartProcessButton_Click;
        document.getElementById("StartSetupButton").onclick = StartSetupButton_Click;
        document.getElementById("StartIdleButton").onclick = StartIdleButton_Click;
        document.getElementById("EndProcessButton").onclick = EndProcessButton_Click;
        document.getElementById("EndSetupButton").onclick = EndSetupButton_Click;
        document.getElementById("EndIdleButton").onclick = EndIdleButton_Click;
        document.getElementById("PostButton").onclick = PostButton_Click;
        document.getElementById("SkipOperationButton").onclick = SkipOperationButton_Click;
        document.getElementById("ChangeUserButton").onclick = ChangeUserButton_Click;
        document.getElementById("ChangeMachineButton").onclick = ChangeMachineButton_Click;
        document.getElementById("ScrapButton").onclick = ScrapButton_Click;
        document.getElementById("OutPutButton").onclick = OutPutButton_Click;
        document.getElementById("FinishOperationButton").onclick = FinishOperationButton_Click;*/
        alert('AddIn succesfully loaded')
    } catch (err) {
        alert('InitController error: ' + err);
        console.log(err);
    }
}

function StartProcessButton_Click() {
    try {
        if (!document.getElementById("StartProcessButton").disabled) {
            document.getElementById("Input").Text = DataContextAddIns.StartProcessingCommand;
            transmitInput();
        }
    } catch (err) {
        alert('StartProcessButton_Click error: ' + err);
        console.log(err);
    }

}
function StartSetupButton_Click() {
    try {
        if (!document.getElementById("StartSetupButton").disabled) {
            document.getElementById("Input").Text = DataContextAddIns.StartSetupCommand;
            transmitInput();
        }
    } catch (err) {
        alert('StartSetupButton_Click error: ' + err);
        console.log(err);
    }
}
function StartIdleButton_Click() {
    try {
        if (!document.getElementById("StartIdleButton").disabled) {
            document.getElementById("Input").Text = DataContextAddIns.StartIdleCommand;
            transmitInput();
        }
    } catch (err) {
        alert('StartIdleButton_Click error: ' + err);
        console.log(err);
    }
}
function EndProcessButton_Click() {
    try {
        if (!document.getElementById("EndProcessButton").disabled) {
            document.getElementById("Input").Text = DataContextAddIns.EndProcessingCommand;
            transmitInput();
        }
    } catch (err) {
        alert('EndProcessButton_Click error: ' + err);
        console.log(err);
    }
}

function EndSetupButton_Click() {
    try {
        if (!document.getElementById("EndSetupButton").disabled) {
            document.getElementById("Input").Text = DataContextAddIns.EndSetupCommand;
            transmitInput();
        }
    } catch (err) {
        alert('EndSetupButton_Click error: ' + err);
        console.log(err);
    }
}

function EndIdleButton_Click() {
    try {
        if (!document.getElementById("EndIdleButton").disabled) {
            document.getElementById("Input").Text = DataContextAddIns.EndIdleCommand;
            transmitInput();
        }
    } catch (err) {
        alert('EndIdleButton_Click error: ' + err);
        console.log(err);
    }
}
function PostButton_Click() {
    try {
        if (!document.getElementById("PostButton").disabled) {
            document.getElementById("Input").Text = DataContextAddIns.PostCommand;
            transmitInput();
        }
    } catch (err) {
        alert('PostButton_Click error: ' + err);
        console.log(err);
    }
}
function SkipOperationButton_Click() {
    try {
        if (!document.getElementById("SkipOperationButton").disabled) {
            document.getElementById("Input").Text = DataContextAddIns.SkipOperationCommand;
            transmitInput();
        }
    } catch (err) {
        alert('SkipOperationButton_Click error: ' + err);
        console.log(err);
    }
}
function ChangeUserButton_Click() {
    try {
        if (!document.getElementById("ChangeUserButton").disabled) {
            document.getElementById("Input").Text = DataContextAddIns.ChangeUserCommand;
            transmitInput();
        }
    } catch (err) {
        alert('ChangeUserButton_Click error: ' + err);
        console.log(err);
    }
}
function ChangeMachineButton_Click() {
    try {
        if (!document.getElementById("ChangeMachineButton").disabled) {
            document.getElementById("Input").Text = DataContextAddIns.ChangeMachineCommand;
            transmitInput();
        }
    } catch (err) {
        alert('ChangeMachineButton_Click error: ' + err);
        console.log(err);
    }
}
function ScrapButton_Click() {
    try {
        if (!document.getElementById("ScrapButton").disabled) {
            document.getElementById("Input").Text = DataContextAddIns.ScrapButtonCommand;
            transmitInput();
        }
    } catch (err) {
        alert('ScrapButton_Click error: ' + err);
        console.log(err);
    }
}
function OutPutButton_Click() {
    try {
        if (!document.getElementById("OutPutButton").disabled) {
            document.getElementById("Input").Text = DataContextAddIns.OutPutButtonCommand;
            transmitInput();
        }
    } catch (err) {
        alert('OutPutButton_Click error: ' + err);
        console.log(err);
    }
}
function FinishOperationButton_Click() {
    try {
        if (!document.getElementById("FinishOperationButton").disabled) {
            document.getElementById("Input").Text = DataContextAddIns.FinishButtonCommand;
            transmitInput();
        }
    } catch (err) {
        alert('FinishOperationButton_Click error: ' + err);
        console.log(err);
    }
}

function transmitInput() {
    try {
        PostRaiseControlAddInEvent(0, document.getElementById("Input").Text);//0 Text entered in Input
        document.getElementById("Input").Text = '';
        //ui.Input.Focus();
        DataContextAddIns.SelectedInput = '';
    } catch (err) {
        alert('transmitInput error: ' + err);
        console.log(err);
    }
}


function selectionCommitted() {
    if (DataContextAddIns.SelectedInput == '')
        return false;
    return true;
    //return !string.IsNullOrEmpty(((ViewModel)ui.DataContext).SelectedInput);
}

function UserValue_MouseDown() {
    try {
        if (DataContextAddIns.RequiredActionType == ActionType_UsernameInput) {
            PostRaiseControlAddInEvent(2, LookupType_User);
            if (selectionCommitted()) {
                document.getElementById("Input").Text = DataContextAddIns.SelectedInput;
                transmitInput();
            }

        }
    }
    catch (err) {
        alert('UserValue_MouseDown error: ' + err);
        console.log(err);
    }
}

function ProductionOrderNo_MouseDown() {
    try {
        if (DataContextAddIns.RequiredActionType == ActionType_ProdOrderNoInput) {
            PostRaiseControlAddInEvent(2, LookupType_ProdOrder);
            if (selectionCommitted()) {
                document.getElementById("Input").Text = DataContextAddIns.SelectedInput;
                if (DataContextAddIns.RequiredActionType == ActionType_ProdOrderAndOperationNoInput) {
                    document.getElementById("Input").Text = '';
                }
                else {
                    transmitInput();
                }
            }

        }
    }
    catch (err) {
        alert('ProductionOrderNo_MouseDown error: ' + err);
    }
}

function OperationNo_MouseDown() {
    try {
        if (DataContextAddIns.RequiredActionType == ActionType_ProdOrderAndOperationNoInput) {
            var param1 = LookupType_ProdOrderOperation + DataContextAddIns.SeperatorCode + document.getElementById("Input").Text;
            PostRaiseControlAddInEvent(2, param1);
            if (selectionCommitted()) {
                document.getElementById("Input").Text = DataContextAddIns.SelectedInput;
                transmitInput();
            }
        }
    }
    catch (err) {
        alert('OperationNo_MouseDown error: ' + err);
        console.log(err);
    }

}

function MachineType_SelectionChanged() {
}

function MachineNo_MouseDown() {
    try {
        if (document.getElementById("MachineType").Text == 1) {
            PostRaiseControlAddInEvent(2, LookupType_WorkCenter);
            if (selectionCommitted()) {
                document.getElementById("Input").Text = DataContextAddIns.WorkCenterCode + DataContextAddIns.SelectedInput;
                transmitInput();
            }
        }
        else if (document.getElementById("MachineType").Text == 2) {
            PostRaiseControlAddInEvent(2, LookupType_WorkCenterGroup);
            if (selectionCommitted()) {
                document.getElementById("Input").Text = DataContextAddIns.WorkCenterGroupCode + DataContextAddIns.SelectedInput;
                transmitInput();
            }
        }
    }
    catch (err) {
        alert('MachineNo_MouseDown error: ' + err);
        console.log(err);
    }

}

function IdleCode_MouseDown() {
    try {
        if (DataContextAddIns.RequiredActionType == ActionType_StandstillInput) {
            PostRaiseControlAddInEvent(2, LookupType_IdleCode);
            if (selectionCommitted()) {
                document.getElementById("Input").Text = DataContextAddIns.SelectedInput;
                transmitInput();
            }
        }
    }
    catch (err) {
        alert('IdleCode_MouseDown error: ' + err);
        console.log(err);
    }
}
