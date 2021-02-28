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
                WebServiceCompany = config["WebServiceCompany"];
                WebServiceUser = config["WebServiceUser"];
                WebServicePassword = config["WebServicePassword"];
                WebServiceGetUrl = config["WebServiceGetUrl"];
                LocalPage = config["LocalPage"];

                if (string.IsNullOrEmpty(LocalPage))
                    LocalPage = "websitedemo2.html";
            }
        }

        public string WebServiceCompany;
        public string WebServiceUser;
        public string WebServicePassword;
        public string WebServiceGetUrl;
        public string WebServicePostUrl;

        public string LocalPage;
    }
}
