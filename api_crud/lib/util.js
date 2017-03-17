const chalk = require('chalk');
const utilityDebugTool = require('utility_debug_tool');

function _bump(currentSemVersion, typesofIncrement){

  // Major [0]
  // Minor [1]
  // Patch [2]
  const aryVersions = currentSemVersion.split('.');

  for (let versionIndex in aryVersions) {
    aryVersions[versionIndex] = parseInt(aryVersions[versionIndex]);
  }

  if (typesofIncrement === 'patch') {
    aryVersions[2] += 1; // patch
  } else if (typesofIncrement === 'minor') {
    aryVersions[2] = 0; // patch
    aryVersions[1] += 1; // minor
  } else if (typesofIncrement === 'major') {
    aryVersions[2] = 0; // patch
    aryVersions[1] = 0; // minor
    aryVersions[0] += 1; // minor
  }

  return aryVersions.join('.');
}
