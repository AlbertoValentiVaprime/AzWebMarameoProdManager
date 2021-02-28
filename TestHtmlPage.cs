using System.Threading.Tasks;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Configuration;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;

namespace com.controladdin.businesscentral
{
    public static class TestHtmlPage
    {
        [FunctionName("TestHtmlPage")]
        public static async Task<HttpResponseMessage> Run(
           [HttpTrigger(AuthorizationLevel.Anonymous, "get", "post", Route = null)]
           HttpRequestMessage req,
           ILogger log,
           ExecutionContext context)
        {
            var config = new ConfigurationBuilder()
                .SetBasePath(context.FunctionAppDirectory)
                .AddJsonFile("local.settings.json", optional: true, reloadOnChange: true)
                .AddEnvironmentVariables()
                .Build();
 
            var bcConfig = new ConnectorConfig(config);
            var composer = new WebPageComposer(context, bcConfig);
            
            var replyText = composer.GetStaticPage();

            var response = new HttpResponseMessage(HttpStatusCode.OK);
            response.Content = new StringContent(replyText);
            response.Content.Headers.ContentType = new MediaTypeHeaderValue("text/html");
            return response;
        }

       
    }
}
