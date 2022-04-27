/*
* To try in Ace editor, copy and paste into the mode creator
* here : http://ace.c9.io/tool/mode_creator.html
*/

define(function(require, exports, module) {
    "use strict";
    var oop = require("../lib/oop");
    var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
    /* --------------------- START ----------------------------- */
    var StqlHighlightRules = function() {
    this.$rules = {
    "start" : [
       {
          "token" : "constant.numeric",
          "regex" : "(\\b\\d+)"
       },
       {
          "token" : "punctuation",
          "regex" : "(\\{)",
          "push" : "main__1"
       },
       {
          "token" : "punctuation",
          "regex" : "(;)"
       },
       {
          "token" : "punctuation",
          "regex" : "(\\()",
          "push" : "main__2"
       },
       {
          "token" : "entity.name.type",
          "regex" : "(<|=|>)"
       },
       {
          "token" : "entity.name.function",
          "regex" : "(COMBINE|FILTER|COMBINE|EXIST|DELETE|CREATE|IF|ELSE|AND|OR|NOT)"
       },
       {
          "token" : "string",
          "regex" : "(true|false)"
       },
       {
          "token" : "keyword",
          "regex" : "(\\b[a-z][a-zA-Z0-9]*)"
       },
       {
          "token" : "comment",
          "regex" : "(--.*)"
       },
       {
          defaultToken : "text",
       }
    ], 
    "main__1" : [
       {
          "token" : "punctuation",
          "regex" : "(\\})",
          "next" : "pop"
       },
       {
          "token" : "constant.numeric",
          "regex" : "(\\b\\d+)"
       },
       {
          "token" : "punctuation",
          "regex" : "(\\{)",
          "push" : "main__1"
       },
       {
          "token" : "punctuation",
          "regex" : "(;)"
       },
       {
          "token" : "punctuation",
          "regex" : "(\\()",
          "push" : "main__2"
       },
       {
          "token" : "entity.name.type",
          "regex" : "(<|=|>)"
       },
       {
          "token" : "entity.name.function",
          "regex" : "(COMBINE|FILTER|COMBINE|EXIST|DELETE|CREATE|IF|ELSE|AND|OR|NOT)"
       },
       {
          "token" : "string",
          "regex" : "(true|false)"
       },
       {
          "token" : "keyword",
          "regex" : "(\\b[a-z][a-zA-Z0-9]*)"
       },
       {
          "token" : "comment",
          "regex" : "(--.*)"
       },
       {
          defaultToken : "text",
       }
    ], 
    "main__2" : [
       {
          "token" : "punctuation",
          "regex" : "(\\))",
          "next" : "pop"
       },
       {
          "token" : "constant.numeric",
          "regex" : "(\\b\\d+)"
       },
       {
          "token" : "punctuation",
          "regex" : "(\\{)",
          "push" : "main__1"
       },
       {
          "token" : "punctuation",
          "regex" : "(;)"
       },
       {
          "token" : "punctuation",
          "regex" : "(\\()",
          "push" : "main__2"
       },
       {
          "token" : "entity.name.type",
          "regex" : "(<|=|>)"
       },
       {
          "token" : "entity.name.function",
          "regex" : "(COMBINE|FILTER|COMBINE|EXIST|DELETE|CREATE|IF|ELSE|AND|OR|NOT)"
       },
       {
          "token" : "string",
          "regex" : "(true|false)"
       },
       {
          "token" : "keyword",
          "regex" : "(\\b[a-z][a-zA-Z0-9]*)"
       },
       {
          "token" : "comment",
          "regex" : "(--.*)"
       },
       {
          "token" : "punctuation",
          "regex" : "(,)"
       },
       {
          defaultToken : "text",
       }
    ]
    };
    this.normalizeRules();
    };
    /* ------------------------ END ------------------------------ */
    oop.inherits(StqlHighlightRules, TextHighlightRules);
    exports.StqlHighlightRules = StqlHighlightRules;
    });
    