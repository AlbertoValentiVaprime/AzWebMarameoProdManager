using System;
using System.Text;

namespace com.controladdin.businesscentral
{

    public partial class WebPageComposer
    {
        public string Compose(ConnectorConfig config)
        {
            var message = new StringBuilder();

            message.AppendLine("<!DOCTYPE html>");
            message.AppendLine("<html>");
            message.AppendLine("  <head>");
            message.AppendLine("    <title>Production Management</title>");
            message.AppendLine("    <meta name=\"viewport\" content=\"initial-scale=1.0\">");
            message.AppendLine("    <meta charset=\"utf-8\">");
            message.AppendLine(ComposeJavaScript());
            message.AppendLine("    <style>");
            message.AppendLine("      #prod_div {");
            message.AppendLine("        height: 100%;");
            message.AppendLine("      }");
            message.AppendLine("      html, body {");
            message.AppendLine("        height: 100%;");
            message.AppendLine("        margin: 0;");
            message.AppendLine("        padding: 0;");
            message.AppendLine("      }");
            message.AppendLine("    </style>");
            message.AppendLine("  </head>");
            message.AppendLine("  <body>");
            message.AppendLine("    <div id=\"prod_div\"></div>");
            message.AppendLine("  </body>");
            message.AppendLine("</html>");

            return message.ToString();
        }

        public string ComposeJavaScript()
        {
            var message = new StringBuilder();

            message.AppendLine("<script type='text/javascript'>");

            message.AppendLine("var prod_div;");
            message.AppendLine("function InitPage() {");
            message.AppendLine("  try {");
            message.AppendLine("  }");
            message.AppendLine("  catch (err) {");
            message.AppendLine("   alert(err);");
            message.AppendLine("  }");
            message.AppendLine("}");

            message.AppendLine("function onMessage(event) {");
            message.AppendLine("  var data = event.data;");
            message.AppendLine("   if (typeof (window[data.func]) == \"function\") {");
            message.AppendLine("     window[data.func].call(null, event.data.lat, event.data.lng);");
            message.AppendLine("   }");
            message.AppendLine(" }");

            message.AppendLine(" </script>");
            return message.ToString();
        }
    }
}
