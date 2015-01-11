System.config({
  "paths": {
    "*": "*.js",
    "todo/*": "lib/*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "observed": "npm:observed@1.1.0",
    "github:jspm/nodelibs-events@0.1.0": {
      "events-browserify": "npm:events-browserify@0.0.1"
    },
    "github:jspm/nodelibs-process@0.1.0": {
      "process": "npm:process@0.10.0"
    },
    "github:jspm/nodelibs-tty@0.1.0": {
      "tty-browserify": "npm:tty-browserify@0.0.0"
    },
    "npm:debug@0.7.4": {
      "process": "github:jspm/nodelibs-process@0.1.0",
      "tty": "github:jspm/nodelibs-tty@0.1.0"
    },
    "npm:events-browserify@0.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:observed@1.1.0": {
      "debug": "npm:debug@0.7.4",
      "events": "github:jspm/nodelibs-events@0.1.0"
    }
  }
});

