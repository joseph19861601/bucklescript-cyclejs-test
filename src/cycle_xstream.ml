type ('t, 'a) t
type base
type memory
type 'a base_t = (base, 'a) t
type 'a memory_t = (memory, 'a) t

external xstream :
  < default :
    < periodic : int -> ('t, int) t [@bs.meth];
      never : ('t, _) t;
      empty : ('t, _) t;
      throw : 'a -> ('t, _) t [@bs.meth];
      fromArray : 'b array -> ('t, 'b) t [@bs.meth];
      .. > Js.t; .. > Js.t =
  "" [@@bs.module]

let periodic period = xstream##default##periodic period
let of_array array = xstream##default##fromArray array
let singleton x = of_array [|x|]

external combine2 : ('t, 'a) t -> ('t, 'b) t -> ('t, ('a * 'b)) t =
  "" [@@bs.module "./xstream_ops", "Xstream_ops"]

external combine3 :
  ('t, 'a) t -> ('t, 'b) t -> ('t, 'c) t -> ('t, ('a * 'b * 'c)) t =
  "" [@@bs.module "./xstream_ops", "Xstream_ops"]

external combine4 :
  ('t, 'a) t ->
  ('t, 'b) t ->
  ('t, 'c) t ->
  ('t, 'd) t ->
  ('t, ('a * 'b * 'c * 'd)) t =
  "" [@@bs.module "./xstream_ops", "Xstream_ops"]

external merge2 : ('t, 'a) t -> ('t, 'a) t -> ('t, 'a) t =
  "" [@@bs.module "./xstream_ops", "Xstream_ops"]

external merge3 :
  ('t, 'a) t -> ('t, 'a) t -> ('t, 'a) t -> ('t, 'a) t =
  "" [@@bs.module "./xstream_ops", "Xstream_ops"]

external merge4 :
  ('t, 'a) t -> ('t, 'a) t -> ('t, 'a) t -> ('t, 'a) t -> ('t, 'a) t =
  "" [@@bs.module "./xstream_ops", "Xstream_ops"]

external map : ('a -> 'b) -> ('t, 'b) t =
  "" [@@bs.send.pipe: ('t, 'a) t]

external map_to : 'b -> ('t, 'b) t =
  "mapTo" [@@bs.send.pipe: ('t, 'a) t]

external fold : ('b -> 'a -> 'b) -> 'b -> 'b memory_t =
  "" [@@bs.send.pipe: ('t, 'a) t]

external remember : 'a base_t -> 'a memory_t = "" [@@bs.send]
external start_with : 'a -> 'a memory_t =
  "startWith" [@@bs.send.pipe: 'a base_t]

