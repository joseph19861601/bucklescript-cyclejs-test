// Generated by BUCKLESCRIPT VERSION 1.4.2 , PLEASE EDIT WITH CARE
'use strict';

var $$Array = require("bs-platform/lib/js/array");

function make($staropt$star, $staropt$star$1, _) {
  var options = $staropt$star ? $staropt$star[0] : { };
  var locales = $staropt$star$1 ? $staropt$star$1[0] : /* [] */0;
  var match = locales ? /* tuple */[
      $$Array.of_list(locales),
      options
    ] : /* tuple */[
      undefined,
      undefined
    ];
  return new Intl.DateTimeFormat(match[0], match[1]);
}

function Date_time_format_001(prim, prim$1) {
  return prim$1.format(prim);
}

var Date_time_format = [
  make,
  Date_time_format_001
];

exports.Date_time_format = Date_time_format;
/* No side effect */
