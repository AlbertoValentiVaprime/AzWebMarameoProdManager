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

        document.getElementById("MachineType").disabled = !(viewModel.RequiredActionType == "ActionType.MachineTypeInput");
        document.getElementById("StartProcessButton").disabled =
            !((viewModel.RequiredActionType == "ActionType.WaitingInput")
                || (viewModel.RequiredActionType == "ActionType.SettingInput") || (viewModel.RequiredActionType == "ActionType.StandstillInput"));
        document.getElementById("StartSetupButton").disabled =
            !((viewModel.RequiredActionType == "ActionType.WaitingInput")
                || (viewModel.RequiredActionType == "ActionType.ProgressInput")
                || (viewModel.RequiredActionType == "ActionType.StandstillInput"));
        document.getElementById("StartIdleButton").disabled =
            !((viewModel.RequiredActionType == "ActionType.WaitingInput")
                || (viewModel.RequiredActionType == "ActionType.SettingInput")
                || (viewModel.RequiredActionType == "ActionType.ProgressInput"));
        document.getElementById("EndProcessButton").disabled = !(viewModel.RequiredActionType == "ActionType.ProgressInput");
        document.getElementById("EndSetupButton").disabled = !(viewModel.RequiredActionType == "ActionType.SettingInput");
        document.getElementById("EndIdleButton").disabled = !(viewModel.RequiredActionType == "ActionType.StandstillInput");
        document.getElementById("PostButton").disabled = !(viewModel.RequiredActionType == "ActionType.WaitingInput");
        document.getElementById("SkipOperationButton").disabled = !(viewModel.RequiredActionType == "ActionType.WaitingInput");
        document.getElementById("FinishOperationButton").disabled = !(viewModel.RequiredActionType == "ActionType.WaitingInput");
        document.getElementById("ChangeUserButton").disabled = false;
        document.getElementById("ChangeMachineButton").disabled = false;
        document.getElementById("ScrapButton").disabled = !(viewModel.RequiredActionType == "ActionType.WaitingInput");
        document.getElementById("OutPutButton").disabled = !(viewModel.RequiredActionType == "ActionType.WaitingInput");
        //document.getElementById("Input").focus();
        alert('StartProcessButton disabled:'+document.getElementById("StartProcessButton").disabled);
    } catch (err) {
        alert('Controller error: ' + err);
        console.log(err);
    }
}
var DataContextAddIns;

function InitController() {

    try {
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
        document.getElementById("FinishOperationButton").onclick = FinishOperationButton_Click;*/
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
        alert('StartProcessButton_Click');
        alert('StartProcessButton disabled:'+document.getElementById("StartProcessButton").disabled);
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

/*

        #region TextBox-Events
        void UserValue_MouseDown(object sender, System.Windows.Input.MouseButtonEventArgs e)
        {
            if (((ViewModel)ui.DataContext).RequiredActionType == ActionType.UsernameInput)
            {
                addIn.RaiseControlAddInEvent(2, ((int) LookupType.User).ToString());

                if (selectionCommitted())
                {
                    ui.Input.Text = ((ViewModel)ui.DataContext).SelectedInput;
                    transmitInput();
                }
            }
        }

        void ProductionOrderNo_MouseDown(object sender, System.Windows.Input.MouseButtonEventArgs e)
        {
            if ((((ViewModel)ui.DataContext).RequiredActionType == ActionType.ProdOrderNoInput) || (((ViewModel)ui.DataContext).RequiredActionType == ActionType.ProdOrderAndOperationNoInput))
            {
                addIn.RaiseControlAddInEvent(2, ((int)LookupType.ProdOrder).ToString());

                if (selectionCommitted())
                {
                    ui.Input.Text = ((ViewModel)ui.DataContext).SelectedInput;

                    if (((ViewModel)ui.DataContext).RequiredActionType == ActionType.ProdOrderAndOperationNoInput)
                    {
                        ((ViewModel)ui.DataContext).SelectedInput = "";
                    }
                    else
                    {
                        transmitInput();
                    }
                }
            }
        }

        void OperationNo_MouseDown(object sender, System.Windows.Input.MouseButtonEventArgs e)
        {
            if (((ViewModel)ui.DataContext).RequiredActionType == ActionType.ProdOrderAndOperationNoInput)
            {
                addIn.RaiseControlAddInEvent(2, ((int)LookupType.ProdOrderOperation).ToString() + ((ViewModel)ui.DataContext).SeperatorCode + ui.Input.Text);

                if (selectionCommitted())
                {
                    ui.Input.Text = ((ViewModel)ui.DataContext).SelectedInput;
                    transmitInput();
                }
            }
        }

        void MachineType_SelectionChanged(object sender, System.Windows.Controls.SelectionChangedEventArgs e)
        {
            //if (!(ui.DataContext == null))
            //    ((ViewModel)ui.DataContext).MachineNo = "";
        }

        void MachineNo_MouseDown(object sender, System.Windows.Input.MouseButtonEventArgs e)
        {
            if (((ViewModel)ui.DataContext).RequiredActionType == ActionType.MachineTypeInput)
            {
                if (ui.MachineType.SelectedIndex == 1)
                {
                    addIn.RaiseControlAddInEvent(2, ((int)LookupType.WorkCenter).ToString());

                    if (selectionCommitted())
                    {
                        ui.Input.Text = ((ViewModel)ui.DataContext).WorkCenterCode + ((ViewModel)ui.DataContext).SelectedInput;
                        transmitInput();
                    }
                }
                else if (ui.MachineType.SelectedIndex == 2)
                {
                    addIn.RaiseControlAddInEvent(2, ((int)LookupType.WorkCenterGroup).ToString());

                    if (selectionCommitted())
                    {
                        ui.Input.Text = ((ViewModel)ui.DataContext).WorkCenterGroupCode + ((ViewModel)ui.DataContext).SelectedInput;
                        transmitInput();
                    }
                }
            }
        }

        void IdleCode_MouseDown(object sender, System.Windows.Input.MouseButtonEventArgs e)
        {
            if (((ViewModel)ui.DataContext).RequiredActionType == ActionType.StandstillInput)
            {
                addIn.RaiseControlAddInEvent(2, ((int)LookupType.IdleCode).ToString());

                if (selectionCommitted())
                {
                    ui.Input.Text = ((ViewModel)ui.DataContext).SelectedInput;
                    transmitInput();
                }
            }
        }
        #endregion


*/