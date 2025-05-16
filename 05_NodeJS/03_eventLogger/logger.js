const fs = require("fs");
const os = require("os");
const { EventEmitter } = require("stream");

require("events");

class Logger extends EventEmitter {
  log(message) {
    this.emit("Message", { message });
  }
}
const logger = new Logger();
const logfile = "./eventlog.txt";

const logToFile = (event) => {
  const logMessage = `${new Date().toISOString()}-${event.message}\n`;
  fs.appendFileSync(logfile, logMessage);
};

logger.on("message", logToFile);

setInterval(() => {
  const memoryUsage = (os.freemem() / os.totalmem()) * 100;
  logger.log(`Current memory usgae: ${memoryUsage.toFixed(2)}`);
}, 3000);

logger.log("Application Started");
logger.log("Application event occured");
