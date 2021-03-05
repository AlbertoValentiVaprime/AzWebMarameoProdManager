function Controller(viewModel) {

    try {

        var inputSelected = "inputSelected";
        var inputUnselected = "inputUnselected";

        if (viewModel.RequiredActionType == "ActionType.UsernameInput")
            document.getElementById("UserValue").className = inputSelected;
        else
            document.getElementById("UserValue").className = inputUnselected;

        if (viewModel.RequiredActionType == "ActionType.MachineTypeInput") {
            document.getElementById("MachineType").className = inputSelected;
            document.getElementById("MachineNo").className = inputSelected;
        }
        else {
            document.getElementById("MachineType").className = inputUnselected;
            document.getElementById("MachineNo").className = inputUnselected;
        }

        if (viewModel.RequiredActionType == "ActionType.ProdOrderNoInput")
            document.getElementById("ProductionOrderNo").className = inputSelected;
        else
            document.getElementById("ProductionOrderNo").className = inputUnselected;

        if (viewModel.RequiredActionType == "ActionType.ProdOrderAndOperationNoInput") {
            document.getElementById("ProductionOrderNo").className = inputSelected;
            document.getElementById("OperationNo").className = inputSelected;
        }
        else {
            document.getElementById("ProductionOrderNo").className = inputUnselected;
            document.getElementById("OperationNo").className = inputUnselected;
        }

        if (viewModel.RequiredActionType == "ActionType.StandstillInput")
            document.getElementById("IdleCode").className = inputSelected;
        else
            document.getElementById("IdleCode").className = inputUnselected;

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
        //document.getElementById("Input").focus();
    } catch (err) {
        alert('Controller error: ' + err);
        console.log(err);
    }
}
var DataContextAddIns;

function InitController() {

    try {
        alert('InitController');
        DataContextAddIns = new AddIns();
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
        document.getElementById("FinishOperationButton").onclick = FinishOperationButton_Click;
        */
    } catch (err) {
        alert('InitController error: ' + err);
        console.log(err);
    }
}

function UserValue_MouseDown() {
}

function ProductionOrderNo_MouseDown() {
}

function OperationNo_MouseDown() {
}
function MachineType_SelectionChanged() {
}
function MachineNo_MouseDown() {
}
function IdleCode_MouseDown() {
}
function StartProcessButton_Click() {
    try {
        //if (document.getElementById("StartProcessButton").IsEnabled) {
        //document.getElementById("Input").Text = DataContextAddIns.StartProcessingCommand;
        transmitInput();
        //}
    } catch (err) {
        alert('StartProcessButton_Click error: ' + err);
        console.log(err);
    }

}
function StartSetupButton_Click() {
    try {
        //if (ui.StartSetupButton.IsEnabled)
        //{
        //ui.Input.Text = ((ViewModel)ui.DataContext).StartSetupCommand;
        transmitInput();
        //}
    } catch (err) {
        alert('StartSetupButton_Click error: ' + err);
        console.log(err);
    }
}
function StartIdleButton_Click() {
    try {
        //if (ui.StartIdleButton.IsEnabled)
        //{
        //    ui.Input.Text = ((ViewModel)ui.DataContext).StartIdleCommand;
        transmitInput();
        //}
    } catch (err) {
        alert('StartIdleButton_Click error: ' + err);
        console.log(err);
    }
}
function EndProcessButton_Click() {
    try {
        //if (ui.EndProcessButton.IsEnabled)
        //{
        //    ui.Input.Text = ((ViewModel)ui.DataContext).EndProcessingCommand;
        transmitInput();
        //}
    } catch (err) {
        alert('EndProcessButton_Click error: ' + err);
        console.log(err);
    }
}

function EndSetupButton_Click() {
    try {
        //if (ui.EndSetupButton.IsEnabled)
        //{
        //ui.Input.Text = ((ViewModel)ui.DataContext).EndSetupCommand;
        transmitInput();
        //}
    } catch (err) {
        alert('EndSetupButton_Click error: ' + err);
        console.log(err);
    }
}

function EndIdleButton_Click() {
    try {
        //if (ui.EndIdleButton.IsEnabled)
        //{
        //ui.Input.Text = ((ViewModel)ui.DataContext).EndIdleCommand;
        transmitInput();
        //}
    } catch (err) {
        alert('EndIdleButton_Click error: ' + err);
        console.log(err);
    }
}
function PostButton_Click() {
    try {
        //if (ui.PostButton.IsEnabled)
        //{
        //    ui.Input.Text = ((ViewModel)ui.DataContext).PostCommand;
        transmitInput();
        //}
    } catch (err) {
        alert('PostButton_Click error: ' + err);
        console.log(err);
    }
}
function SkipOperationButton_Click() {
    try {
        //if (ui.SkipOperationButton.IsEnabled)
        //{
        //    ui.Input.Text = ((ViewModel)ui.DataContext).SkipOperationCommand;
        transmitInput();
        //}
    } catch (err) {
        alert('SkipOperationButton_Click error: ' + err);
        console.log(err);
    }
}
function ChangeUserButton_Click() {
    try {
        //if (ui.ChangeUserButton.IsEnabled)
        //{
        //    ui.Input.Text = ((ViewModel)ui.DataContext).ChangeUserCommand;
        transmitInput();
        //}
    } catch (err) {
        alert('ChangeUserButton_Click error: ' + err);
        console.log(err);
    }
}
function ChangeMachineButton_Click() {
    try {
        //if (ui.ChangeMachineButton.IsEnabled)
        //{
        //    ui.Input.Text = ((ViewModel)ui.DataContext).ChangeMachineCommand;
        transmitInput();
        //}
    } catch (err) {
        alert('ChangeMachineButton_Click error: ' + err);
        console.log(err);
    }
}
function ScrapButton_Click() {
    try {
        //if (ui.ScrapButton.IsEnabled)
        //{
        //    ui.Input.Text = ((ViewModel)ui.DataContext).ScrapButtonCommand;
        transmitInput();
        //}
    } catch (err) {
        alert('ScrapButton_Click error: ' + err);
        console.log(err);
    }
}
function OutPutButton_Click() {
    try {
        //if (ui.OutPutButton.IsEnabled)
        //{
        //    ui.Input.Text = ((ViewModel)ui.DataContext).OutPutButtonCommand;
        transmitInput();
        //}
    } catch (err) {
        alert('OutPutButton_Click error: ' + err);
        console.log(err);
    }
}
function FinishOperationButton_Click() {
    try {
        //if (ui.FinishOperationButton.IsEnabled)
        //{
        //    ui.Input.Text = ((ViewModel)ui.DataContext).FinishButtonCommand;
        transmitInput();
        //}
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
        //DataContextAddIns.SelectedInput = '';
    } catch (err) {
        alert('transmitInput error: ' + err);
        console.log(err);
    }
}

