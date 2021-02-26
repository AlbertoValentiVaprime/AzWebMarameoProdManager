    function PostToBc(parameter) {
        alert(parameter);
        Microsoft.Dynamics.NAV.InvokeExtensibilityMethod("PostToBc", parameter);        
        return true;
    }
