/*tracing.js*/
// Require dependencies
const opentelemetry = require("@opentelemetry/sdk-node");
const { getNodeAutoInstrumentations } = require("@opentelemetry/auto-instrumentations-node");
const {
    OTLPTraceExporter,
  } = require("@opentelemetry/exporter-trace-otlp-http");
const { diag, DiagConsoleLogger, DiagLogLevel } = require('@opentelemetry/api');

// For troubleshooting, set the log level to DiagLogLevel.DEBUG
diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.INFO);

const sdk = new opentelemetry.NodeSDK({
  traceExporter: new opentelemetry.tracing.ConsoleSpanExporter(),
  // traceExporter: new OTLPTraceExporter({
  //   // optional - default url is http://localhost:4318/v1/traces
  //   url: "localhost:9312/v1/traces",
  //   // optional - collection of custom headers to be sent with each request, empty by default
  //   headers: {},
  // }),
  instrumentations: [getNodeAutoInstrumentations()]
});

sdk.start()