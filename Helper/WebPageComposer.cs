using System;
using System.Text;
using System.IO;
using Microsoft.Azure.WebJobs;

namespace com.controladdin.businesscentral
{

    public partial class WebPageComposer
    {

        private ExecutionContext context;
        public WebPageComposer(ExecutionContext context)
        {
            this.context = context;
        }
        public string Compose(ConnectorConfig config)
        {
            var message = new StringBuilder();


            message.AppendLine("<!DOCTYPE html>");
            message.AppendLine("<html>");
            message.AppendLine("  <head>");
            message.AppendLine("    <title>Production Management</title>");
            message.AppendLine("    <meta name=\"viewport\" content=\"initial-scale=1.0\">");
            message.AppendLine("    <meta charset=\"utf-8\">");
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
            var content = File.ReadAllText(path);
            return content;
        }

        public string ComposeJavaScript()
        {
            var path = Path.Combine(context.FunctionDirectory, "../website.js");
            var content = File.ReadAllText(path);
            return content;
        }

        public string ComposeHtml()
        {
            var path = Path.Combine(context.FunctionDirectory, "../websitedemo.html");
            var content = File.ReadAllText(path);
            return content;
        }
    }
}
