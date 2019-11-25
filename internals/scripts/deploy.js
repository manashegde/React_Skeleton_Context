// @flow
const fs = require("fs");
const path = require("path");
const ncp = require("ncp").ncp;

const staticFilesSrcPath = path.normalize(
  path.join(__dirname, "../../", "build")
);

const staticFilesDeployPath = path.normalize(
  path.join(__dirname, "../../", "xbc-client-webapp/src/main/webapp")
);

copyStaticFilesToProd();

function copyStaticFilesToProd() {
  try {
    ncp(staticFilesSrcPath, staticFilesDeployPath, err => {
      if (err) {
        return console.error("---------- failed to copy static files:", err);
      }
      console.log("---------- copied static files successfully");
    });
  } catch (error) {
    console.error("-------- failed to copy static files:", error);
  }
}
