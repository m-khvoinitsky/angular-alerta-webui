'use strict';

angular.module('config', [])
  .constant('config', {
    'endpoint'    : "http://"+window.location.hostname+":8080",
    'provider'    : "basic", // google, github, gitlab or basic
    'client_id'   : "INSERT-CLIENT-ID-HERE",
    'gitlab_url'  : "https://gitlab.com",  // replace with your gitlab server
    'colors'      : {}, // use default colors, remove colors_css property below to use it
    // alternative way of overriding colors
    'colors_css': `
      .alert-row-severity-critical {
        background-color: red;
        color: white;
      }
      .alert-row-severity-major {
        background-color: orange;
        color: black;
      }
      .alert-row-severity-minor {
        background-color: yellow;
        color: black;
      }
      .alert-row-severity-warning {
        background-color: #1E90FF;
        color: white;
      }
      .alert-row-severity-indeterminate {
        background-color: silver;
        color: black;
      }
      .alert-row-severity-cleared {
        background-color: #00CC00;
        color: black;
      }
      .alert-row-severity-normal {
        background-color: #00CC00;
        color: black;
      }
      .alert-row-severity-ok {
        background-color: #00CC00;
        color: black;
      }
      .alert-row-severity-informational {
        background-color: #00CC00;
        color: black;
      }
      .alert-row-severity-debug {
        background-color: #7554BF;
        color: white;
      }
      .alert-row-severity-security {
        background-color: black;
        color: white;
      }
      .alert-row-severity-unknown {
        background-color: silver;
        color: black;
      }
      .alert-row-highlighted {
        background-color: skyblue;
        color: black;
      }`,
    'default_sort': ['reverseSeverityCode', 'lastReceiveTime'],
    'default_sort_reverse': true,
    'severity'    : {}, // use default severity codes
    'audio'       : {}, // no audio
    'tracking_id' : ""  // Google Analytics tracking ID eg. UA-NNNNNN-N
  });
