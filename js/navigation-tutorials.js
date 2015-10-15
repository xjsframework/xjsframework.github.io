angular.module('navigation-tutorials', [])

.value('TUTS', {
  "pages": [
    {
      "path": "types",
      "partial": "tutorials/types",
      "name": "Types of Plugins"
    },
    {
      "path": "sourceplugins",
      "partial": "tutorials/sourceplugins",
      "name": "Developing Source Plugins"
    },
    {
      "path": "sourceconfig",
      "partial": "tutorials/sourceconfig",
      "name": "Developing the Source Configuration Window"
    },
    {
      "path": "extensions",
      "partial": "tutorials/extensions",
      "name": "Developing Extension Plugins"
    },
    {
      "path": "errors",
      "partial": "tutorials/errors",
      "name": "Common Errors"
    },
    {
      "path": "debugging",
      "partial": "tutorials/debugging",
      "name": "Debugging Your Plugins"
    }
  ]
});
