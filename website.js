    function PostToBc(parameter) {
        alert(parameter);
        Microsoft.Dynamics.NAV.InvokeExtensibilityMethod('OnBcPageCallBack', [parameter]);
        return true;
    }
