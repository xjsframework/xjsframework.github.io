angular.module('navigation-tutorials', [])

.value('TUTS', {
  "pages": [
    {
      "path": "sourceplugins",
      "partial": "tutorials/sourceplugins",
      "name": "Developing Source Plugins"
    },
    {
      "path": "sourceconfig",
      "partial": "tutorials/sourceconfig",
      "name": "Developing the Source Configuration window"
    },
    {
      "path": "extensions",
      "partial": "tutorials/extensions",
      "name": "Developing Extension Plugins"
    },
    {
      "path": "types",
      "partial": "tutorials/types",
      "name": "Types of Plugins"
    }
  ]
});