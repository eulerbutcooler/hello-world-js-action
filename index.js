import * as core from "@actions/core";

const name = core.getInput("name");
const outputval = `Ji boliye ${name}`;
core.setOutput("greeting", outputval);
