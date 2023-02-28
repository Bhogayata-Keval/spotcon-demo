# spotcon-demo
SPOTCon 2023 Demo

Run Collector as agent
```
cd collector-agent && go run *.go start
```

Run Collector as backend
```
cd collector-backend && go run *.go start
```

-----------------------

Run node.js app with Otel Instrumentation
```
node --require './tracing.js' index.js
```