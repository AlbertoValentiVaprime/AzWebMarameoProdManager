using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace MarameoProductionTerminal
{
    public class ViewModel
    {
        public string User { get; set; }
        public string ProdOrderNo { get; set; }
        public string OperationNo { get; set; }
        public string MachineNo { get; set; }
        public string Description { get; set; }
        public string Output { get; set; }
        public string Action { get; set; }
        public string Status { get; set; }
        public int MachineType { get; set; }
        public bool Finish { get; set; }
        public decimal ProcessingTime { get; set; }
        public decimal SetupTime { get; set; }
        public decimal IdleTime { get; set; }
        public string IdleCode { get; set; }
        public decimal FinishedQuantity { get; set; }
        public decimal ScrapQuantity { get; set; }

        public string WorkCenterCode { get; set; }
        public string WorkCenterGroupCode { get; set; }
        public string SeperatorCode { get; set; }
        public string StartProcessingCommand { get; set; }
        public string EndProcessingCommand { get; set; }
        public string StartSetupCommand { get; set; }
        public string EndSetupCommand { get; set; }
        public string StartIdleCommand { get; set; }
        public string EndIdleCommand { get; set; }
        public string PostCommand { get; set; }
        public string SkipOperationCommand { get; set; }
        public string ChangeUserCommand { get; set; }
        public string ChangeMachineCommand { get; set; }
        public string OutPutButtonCommand { get; set; }
        public string ScrapButtonCommand { get; set; }
        public string FinishButtonCommand { get; set; }

        public ActionType RequiredActionType { get; set; }
        public string SelectedInput { get; set; }
    }
}
