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
        document.getElementById("UserValue").ondblclick = UserValue_MouseDown;
        document.getElementById("ProductionOrderNo").ondblclick = ProductionOrderNo_MouseDown;
        document.getElementById("OperationNo").ondblclick = OperationNo_MouseDown;
        document.getElementById("MachineType").ondblclick = MachineType_SelectionChanged;
        document.getElementById("MachineNo").onmousedown = MachineNo_MouseDown;
        document.getElementById("IdleCode").onmousedown = IdleCode_MouseDown;
        //document.getElementById("StartProcessButton").onclick = StartProcessButton_Click;
        document.getElementById("StartSetupButton").onclick = StartSetupButton_Click;
        document.getElementById("StartIdleButton").onclick = StartIdleButton_Click;
        document.getElementById("EndProcessButton").onclick = EndProcessButton;
        document.getElementById("EndSetupButton").onclick = EndSetupButton;
        document.getElementById("EndIdleButton").onclick = EndIdleButton;
        document.getElementById("PostButton").onclick = PostButton;
        document.getElementById("SkipOperationButton").onclick = SkipOperationButton_Click;
        document.getElementById("ChangeUserButton").onclick = ChangeUserButton_Click;
        document.getElementById("ChangeMachineButton").onclick = ChangeMachineButton_Click;
        document.getElementById("ScrapButton").onclick = ScrapButton_Click;
        document.getElementById("OutPutButton").onclick = OutPutButton_Click;
        document.getElementById("FinishOperationButton").onclick = FinishOperationButton_Click;
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
}
function StartIdleButton_Click() {
}
function EndProcessButton() {
}
function EndSetupButton() {
}
function EndIdleButton() {
}
function PostButton() {
}
function SkipOperationButton_Click() {
}
function ChangeUserButton_Click() {
}
function ChangeMachineButton_Click() {
}
function ScrapButton_Click() {
}
function OutPutButton_Click() {
}
function FinishOperationButton_Click() {
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

/*

        void StartSetupButton_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            if (ui.StartSetupButton.IsEnabled)
            {
                ui.Input.Text = ((ViewModel)ui.DataContext).StartSetupCommand;
                transmitInput();
            }
        }

        void StartIdleButton_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            if (ui.StartIdleButton.IsEnabled)
            {
                ui.Input.Text = ((ViewModel)ui.DataContext).StartIdleCommand;
                transmitInput();
            }
        }

        void EndProcessButton_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            if (ui.EndProcessButton.IsEnabled)
            {
                ui.Input.Text = ((ViewModel)ui.DataContext).EndProcessingCommand;
                transmitInput();
            }
        }

        void EndSetupButton_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            if (ui.EndSetupButton.IsEnabled)
            {
                ui.Input.Text = ((ViewModel)ui.DataContext).EndSetupCommand;
                transmitInput();
            }
        }

        void EndIdleButton_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            if (ui.EndIdleButton.IsEnabled)
            {
                ui.Input.Text = ((ViewModel)ui.DataContext).EndIdleCommand;
                transmitInput();
            }
        }

        void PostButton_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            if (ui.PostButton.IsEnabled)
            {
                ui.Input.Text = ((ViewModel)ui.DataContext).PostCommand;
                transmitInput();
            }
        }

        void SkipOperationButton_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            if (ui.SkipOperationButton.IsEnabled)
            {
                ui.Input.Text = ((ViewModel)ui.DataContext).SkipOperationCommand;
                transmitInput();
            }
        }

        void ChangeUserButton_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            if (ui.ChangeUserButton.IsEnabled)
            {
                ui.Input.Text = ((ViewModel)ui.DataContext).ChangeUserCommand;
                transmitInput();
            }
        }

        void ChangeMachineButton_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            if (ui.ChangeMachineButton.IsEnabled)
            {
                ui.Input.Text = ((ViewModel)ui.DataContext).ChangeMachineCommand;
                transmitInput();
            }
        }

        void OutPutButton_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            if (ui.OutPutButton.IsEnabled)
            {
                ui.Input.Text = ((ViewModel)ui.DataContext).OutPutButtonCommand;
                transmitInput();
            }
        }

        void ScrapButton_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            if (ui.ScrapButton.IsEnabled)
            {
                ui.Input.Text = ((ViewModel)ui.DataContext).ScrapButtonCommand;
                transmitInput();
            }
        }

        void FinishOperationButton_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            if (ui.FinishOperationButton.IsEnabled)
            {
                ui.Input.Text = ((ViewModel)ui.DataContext).FinishButtonCommand;
                transmitInput();
            }
        }*/

