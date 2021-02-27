using System;
using System.Text;
using System.IO;
using Microsoft.Azure.WebJobs;

namespace com.controladdin.businesscentral
{

    public partial class WebPageComposer
    {

        private ExecutionContext context;
        private ConnectorConfig config;
        public WebPageComposer(ExecutionContext context, ConnectorConfig config)
        {
            this.context = context;
            this.config = config;
        }
        public string Compose()
        {
            var message = new StringBuilder();

            message.AppendLine("<!DOCTYPE html>");
            message.AppendLine("<html>");
            message.AppendLine("  <head>");
            message.AppendLine("    <title>Production Management</title>");
            message.AppendLine("    <meta name=\"viewport\" content=\"initial-scale=1.0\">");
            message.AppendLine("    <meta charset=\"utf-8\">");
            message.AppendLine("    <script language='javascript'>");
            message.AppendLine(ComposeJavaScript());
            message.AppendLine("    </script>");
            message.AppendLine("    <style>");
            message.AppendLine(ComposeCss());
            message.AppendLine("    </style>");
            message.AppendLine("  </head>");
            message.AppendLine("  <body>");
            message.AppendLine(ComposeHtml());
            message.AppendLine("  </body>");
            message.AppendLine("</html>");

            return message.ToString();
        }

        public string ComposeCss()
        {
            var path = Path.Combine(context.FunctionDirectory, "../website.css");
            return File.ReadAllText(path);
        }

        public string ComposeJavaScript()
        {
            var path = Path.Combine(context.FunctionDirectory, "../website.js");
            return File.ReadAllText(path);
        }

        public string ComposeHtml()
        {
            var page = config.LocalPage;
            var path = Path.Combine(context.FunctionDirectory, "../" + page);
            return File.ReadAllText(path);
        }
    }
}
