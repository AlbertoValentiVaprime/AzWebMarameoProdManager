using System;
using Microsoft.Extensions.Configuration;

namespace com.controladdin.businesscentral
{

    public partial class ConnectorConfig
    {
        public ConnectorConfig(IConfigurationRoot config)
        {
            if (config != null)
            {
                LocalPage = config["LocalPage"];

                if (string.IsNullOrEmpty(LocalPage))
                    LocalPage = "websitedemo2.html";
            }
        }

        public string LocalPage;
    }
}
