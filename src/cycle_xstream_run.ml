type dispose_function = unit -> unit

external cycle_xstream_run :
  < run :
    ('sources -> < dom : 'sink Memory_stream.t > Js.t) ->
    < dom : 'a -> 'b > Js.t ->
    dispose_function [@bs.meth]; .. > Js.t =
  "@cycle/xstream-run" [@@bs.module]

let run main drivers = cycle_xstream_run##run main drivers
