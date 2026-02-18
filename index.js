import * as core from "@actions/core";

try {
  const name = core.getInput("name");
  const outputval = `Ji boliye ${name}`;
  core.setOutput("greeting", outputval);
} catch (error) {
  core.setFailed(error.message);
}
