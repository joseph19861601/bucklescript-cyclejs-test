// Generated by BUCKLESCRIPT VERSION 1.4.1 , PLEASE EDIT WITH CARE
'use strict';

var Cycle            = require("./cycle");
var Style            = require("style!../../css/src/comment.css");
var Xstream_ops      = require("./xstream_ops");
var Pervasives       = require("bs-platform/lib/js/pervasives");
var Map_tree         = require("./map_tree");
var Caml_format      = require("bs-platform/lib/js/caml_format");
var Block            = require("bs-platform/lib/js/block");
var Id               = require("./id");
var Curry            = require("bs-platform/lib/js/curry");
var Printf           = require("bs-platform/lib/js/printf");
var Cycle_xstream    = require("./cycle_xstream");
var Intl             = require("./intl");
var $$String         = require("bs-platform/lib/js/string");
var List             = require("bs-platform/lib/js/list");
var Cycle_dom        = require("./cycle_dom");
var Cycle_dom_source = require("./cycle_dom_source");

var num = "numeric";

var datetime_format = Curry._3(Intl.Date_time_format[/* make */0], /* Some */[{
        year: num,
        month: num,
        day: num,
        hour: num,
        minute: num,
        second: num,
        hour12: false
      }], /* Some */[/* :: */[
        "en-CA-u-ca-iso8601",
        /* [] */0
      ]], /* () */0);

var edit_reply_tag = "edit-reply";

var start_reply_tag = "start-reply";

var cancel_reply_tag = "cancel-reply";

var save_reply_tag = "save-reply";

function ul_wrapper(param) {
  var comment_tree = param[1];
  var comment_view = function (comment) {
    var id = Id.to_int(comment[/* id */0]);
    var id_str = Pervasives.string_of_int(id);
    var match = comment[/* timestamp */3];
    if (match) {
      var replies = Map_tree.children(id, comment_tree);
      return Cycle_dom.h("li.box.comment", /* Some */[{
                    key: id_str
                  }], /* :: */[
                  Cycle_dom.h("span.comment-body", /* None */0, /* :: */[
                        Cycle_dom.h("strong", /* None */0, /* :: */[
                              Cycle_dom.text(comment[/* author */1] + " "),
                              /* [] */0
                            ]),
                        /* :: */[
                          Cycle_dom.text(comment[/* msg */2] + " "),
                          /* [] */0
                        ]
                      ]),
                  /* :: */[
                    Cycle_dom.h("span.control.has-addons.comment-actions", /* None */0, /* :: */[
                          Cycle_dom.h(Curry._3(Printf.sprintf(/* Format */[
                                        /* String_literal */Block.__(11, [
                                            "a#",
                                            /* String */Block.__(2, [
                                                /* No_padding */0,
                                                /* Char_literal */Block.__(12, [
                                                    /* "-" */45,
                                                    /* String */Block.__(2, [
                                                        /* No_padding */0,
                                                        /* String_literal */Block.__(11, [
                                                            ".button.is-small.",
                                                            /* String */Block.__(2, [
                                                                /* No_padding */0,
                                                                /* End_of_format */0
                                                              ])
                                                          ])
                                                      ])
                                                  ])
                                              ])
                                          ]),
                                        "a#%s-%s.button.is-small.%s"
                                      ]), start_reply_tag, id_str, start_reply_tag), /* None */0, /* :: */[
                                Cycle_dom.text("Reply"),
                                /* [] */0
                              ]),
                          /* :: */[
                            Cycle_dom.h("a#up-" + (id_str + ".button.is-small.up"), /* None */0, /* :: */[
                                  Cycle_dom.text("+1"),
                                  /* [] */0
                                ]),
                            /* :: */[
                              Cycle_dom.h("a#down-" + (id_str + ".button.is-small.down"), /* None */0, /* :: */[
                                    Cycle_dom.text("-1"),
                                    /* [] */0
                                  ]),
                              /* :: */[
                                Cycle_dom.h("span.button.is-small.is-disabled", /* None */0, /* :: */[
                                      Cycle_dom.text(Curry._2(Intl.Date_time_format[/* format */1], match[0], datetime_format) + " "),
                                      /* [] */0
                                    ]),
                                /* [] */0
                              ]
                            ]
                          ]
                        ]),
                    /* :: */[
                      replies ? Cycle_dom.h("ul", /* None */0, List.map(comment_view, replies)) : Cycle_dom.text(""),
                      /* [] */0
                    ]
                  ]
                ]);
    }
    else {
      return Cycle_dom.h("li.box.comment", /* Some */[{
                    key: id_str
                  }], /* :: */[
                  Cycle_dom.h("p.control.comment-body", /* None */0, /* :: */[
                        Cycle_dom.h(Curry._3(Printf.sprintf(/* Format */[
                                      /* String_literal */Block.__(11, [
                                          "input#",
                                          /* String */Block.__(2, [
                                              /* No_padding */0,
                                              /* Char_literal */Block.__(12, [
                                                  /* "-" */45,
                                                  /* String */Block.__(2, [
                                                      /* No_padding */0,
                                                      /* String_literal */Block.__(11, [
                                                          ".input.",
                                                          /* String */Block.__(2, [
                                                              /* No_padding */0,
                                                              /* End_of_format */0
                                                            ])
                                                        ])
                                                    ])
                                                ])
                                            ])
                                        ]),
                                      "input#%s-%s.input.%s"
                                    ]), edit_reply_tag, id_str, edit_reply_tag), /* Some */[{
                                type: "text"
                              }], /* [] */0),
                        /* [] */0
                      ]),
                  /* :: */[
                    Cycle_dom.h("p.control.has-addons.comment-actions", /* None */0, /* :: */[
                          Cycle_dom.h(Curry._3(Printf.sprintf(/* Format */[
                                        /* String_literal */Block.__(11, [
                                            "a#",
                                            /* String */Block.__(2, [
                                                /* No_padding */0,
                                                /* Char_literal */Block.__(12, [
                                                    /* "-" */45,
                                                    /* String */Block.__(2, [
                                                        /* No_padding */0,
                                                        /* String_literal */Block.__(11, [
                                                            ".button.is-small.",
                                                            /* String */Block.__(2, [
                                                                /* No_padding */0,
                                                                /* End_of_format */0
                                                              ])
                                                          ])
                                                      ])
                                                  ])
                                              ])
                                          ]),
                                        "a#%s-%s.button.is-small.%s"
                                      ]), save_reply_tag, id_str, save_reply_tag), /* None */0, /* :: */[
                                Cycle_dom.text("Send"),
                                /* [] */0
                              ]),
                          /* :: */[
                            Cycle_dom.h(Curry._3(Printf.sprintf(/* Format */[
                                          /* String_literal */Block.__(11, [
                                              "a#",
                                              /* String */Block.__(2, [
                                                  /* No_padding */0,
                                                  /* Char_literal */Block.__(12, [
                                                      /* "-" */45,
                                                      /* String */Block.__(2, [
                                                          /* No_padding */0,
                                                          /* String_literal */Block.__(11, [
                                                              ".button.is-small.",
                                                              /* String */Block.__(2, [
                                                                  /* No_padding */0,
                                                                  /* End_of_format */0
                                                                ])
                                                            ])
                                                        ])
                                                    ])
                                                ])
                                            ]),
                                          "a#%s-%s.button.is-small.%s"
                                        ]), cancel_reply_tag, id_str, cancel_reply_tag), /* None */0, /* :: */[
                                  Cycle_dom.text("Cancel"),
                                  /* [] */0
                                ]),
                            /* [] */0
                          ]
                        ]),
                    /* [] */0
                  ]
                ]);
    }
  };
  return function (eta) {
            return Cycle_dom.h("ul", /* None */0, eta);
          }(List.map(comment_view, Map_tree.roots(comment_tree)));
}

function view(param) {
  return param.map(ul_wrapper);
}

var author = "bob";

function actions(dom) {
  var elem_tag_id = function (id_tag, id_str) {
    var id_tag_len = id_tag.length;
    var id_str_len = id_str.length;
    return Id.of_int(Caml_format.caml_int_of_string($$String.sub(id_str, id_tag_len + 1 | 0, (id_str_len - id_tag_len | 0) - 1 | 0)));
  };
  var clicked_tagged_ids = function (id_tag) {
    return Cycle_dom_source.events("click", Cycle_dom_source.select("." + id_tag, dom)).map(function (e) {
                return elem_tag_id(id_tag, e.target.id);
              });
  };
  return Xstream_ops.merge4(clicked_tagged_ids(start_reply_tag).map(function (i) {
                  return /* Start_reply_to */Block.__(0, [
                            i,
                            author
                          ]);
                }), clicked_tagged_ids(cancel_reply_tag).map(function (i) {
                  return /* Cancel_reply */Block.__(2, [i]);
                }), clicked_tagged_ids(save_reply_tag).map(function (i) {
                  return /* Save_reply */Block.__(1, [i]);
                }), Cycle_dom_source.events("input", Cycle_dom_source.select(".edit-reply", dom)).map(function (e) {
                  var elem = e.target;
                  var elem_id = elem_tag_id(edit_reply_tag, elem.id);
                  var value = elem.value;
                  return /* Edit_reply */Block.__(3, [
                            elem_id,
                            value
                          ]);
                }));
}

var init_comment_id = Id.of_int(1);

var init_comment_003 = /* timestamp : Some */[new Date()];

var init_comment = /* record */[
  /* id */init_comment_id,
  /* author */author,
  /* msg */"Hello, World!",
  init_comment_003
];

var init_comment_tree = Map_tree.add(/* None */0, 1, init_comment, Map_tree.empty);

function update(t, param) {
  switch (param.tag | 0) {
    case 0 : 
        var parent_id = Id.to_int(param[0]);
        var author = param[1];
        var param$1 = t;
        var next_id = param$1[0];
        var reply = /* record */[
          /* id */next_id,
          /* author */author,
          /* msg */"",
          /* timestamp : None */0
        ];
        return /* tuple */[
                Id.incr(next_id),
                Map_tree.add(/* Some */[parent_id], Id.to_int(next_id), reply, param$1[1])
              ];
    case 1 : 
        var id = Id.to_int(param[0]);
        var param$2 = t;
        var stamp_time = function (c) {
          return /* record */[
                  /* id */c[/* id */0],
                  /* author */c[/* author */1],
                  /* msg */c[/* msg */2],
                  /* timestamp : Some */[new Date()]
                ];
        };
        return /* tuple */[
                param$2[0],
                Map_tree.update(id, stamp_time, param$2[1])
              ];
    case 2 : 
        var id$1 = Id.to_int(param[0]);
        var param$3 = t;
        return /* tuple */[
                param$3[0],
                Map_tree.remove(id$1, param$3[1])
              ];
    case 3 : 
        var id$2 = Id.to_int(param[0]);
        var msg = param[1];
        var param$4 = t;
        var with_msg = function (c) {
          return /* record */[
                  /* id */c[/* id */0],
                  /* author */c[/* author */1],
                  /* msg */msg,
                  /* timestamp */c[/* timestamp */3]
                ];
        };
        return /* tuple */[
                param$4[0],
                Map_tree.update(id$2, with_msg, param$4[1])
              ];
    
  }
}

var init_model_000 = Id.incr(init_comment_id);

var init_model = /* tuple */[
  init_model_000,
  init_comment_tree
];

function model(param) {
  return param.fold(update, init_model);
}

function main(sources) {
  var model$prime = model(actions(sources.DOM));
  return {
          DOM: view(model$prime),
          comments: model$prime.map(function (prim) {
                return prim[1];
              })
        };
}

var Ct = 0;

exports.Ct   = Ct;
exports.main = main;
/* datetime_format Not a pure module */