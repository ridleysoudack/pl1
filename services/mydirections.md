# My personal directions request

First, explore the various options through the Directions API https://developers.google.com/maps/documentation/directions/get-directions. 

Be creative and use multiple parameters from the API documentation to earn a top grade. The rubric is listed in the bottom of the MarkDown document. 

> Tip: Can't make changes? GitHub previews MD documents by default (read-only). Start editing to make the changes for your URL and JSON response below

## Directions URL
This URL returns directions data for a cycling route for American tourists (units in imperial) that hits a number of Toronto landmarks and scenic neighbourhoods, while avoiding highways:

```
https://maps.googleapis.com/maps/api/directions/json?destination=place_id:ChIJmzrzi9Y0K4gRgXUc3sTY7RU&origin=place_id:ChIJBfc2I9M1K4gRZ-4AoyXIvAE&waypoints=place_id:ChIJ3flrK2IzK4gRsoLymGpVn1g%7Cplace_id:ChIJE-Xa87o0K4gRkvXFHuE0hMk%7Cplace_id:ChIJ_wU50co0K4gRingYcKzmofs&mode=bicycling&units=imperial&avoid=highways&key=AIzaSyCM-WWHYHIKY-do4kquMy9Z4wQaQx51AuE
```

## Links to waypoint locations
Start point (High Park, Toronto): https://www.google.com/maps/search/?api=1&query=43.6465479,-79.465879&query_place_id=ChIJBfc2I9M1K4gRZ-4AoyXIvAE

Waypoint 1 (Casa Loma, Toronto): https://www.google.com/maps/search/?api=1&query=43.6803861,-79.4168726&query_place_id=ChIJ3flrK2IzK4gRsoLymGpVn1g

Waypoint 2 (Royal Ontario Museum, Toronto): https://www.google.com/maps/search/?api=1&query=43.6677097,-79.3969658&query_place_id=ChIJE-Xa87o0K4gRkvXFHuE0hMk

Waypoint 3 (Yonge and Dundas Square, Toronto): https://www.google.com/maps/search/?api=1&query=43.6560811,-79.3823601&query_place_id=ChIJ_wU50co0K4gRingYcKzmofs

End point (CN Tower, Toronto): https://www.google.com/maps/search/?api=1&query=43.6425662,-79.3892455&query_place_id=ChIJmzrzi9Y0K4gRgXUc3sTY7RU


## Next paste the full JSON response to this query here:

```JSON
{
   "geocoded_waypoints" : [
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJBfc2I9M1K4gRZ-4AoyXIvAE",
         "types" : [ "establishment", "park", "point_of_interest", "tourist_attraction" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJ3flrK2IzK4gRsoLymGpVn1g",
         "types" : [ "neighborhood", "political" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJE-Xa87o0K4gRkvXFHuE0hMk",
         "types" : [ "establishment", "museum", "point_of_interest", "tourist_attraction" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJ_wU50co0K4gRingYcKzmofs",
         "types" : [ "establishment", "point_of_interest" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJmzrzi9Y0K4gRgXUc3sTY7RU",
         "types" : [ "establishment", "point_of_interest", "tourist_attraction" ]
      }
   ],
   "routes" : [
      {
         "bounds" : {
            "northeast" : {
               "lat" : 43.6779808,
               "lng" : -79.3789556
            },
            "southwest" : {
               "lat" : 43.6416639,
               "lng" : -79.4604112
            }
         },
         "copyrights" : "Map data ©2022 Google",
         "legs" : [
            {
               "distance" : {
                  "text" : "3.7 mi",
                  "value" : 5990
               },
               "duration" : {
                  "text" : "24 mins",
                  "value" : 1450
               },
               "end_address" : "Casa Loma, Toronto, ON, Canada",
               "end_location" : {
                  "lat" : 43.6768401,
                  "lng" : -79.41036149999999
               },
               "start_address" : "High Park, 1873 Bloor St W, Toronto, ON M6R 2Z3, Canada",
               "start_location" : {
                  "lat" : 43.6543642,
                  "lng" : -79.4601996
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "23 ft",
                        "value" : 7
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 6
                     },
                     "end_location" : {
                        "lat" : 43.6544209,
                        "lng" : -79.46017519999999
                     },
                     "html_instructions" : "Head \u003cb\u003enorth\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eWalk your bicycle\u003c/div\u003e",
                     "polyline" : {
                        "points" : "wfmiGfq~cNA?GCA?"
                     },
                     "start_location" : {
                        "lat" : 43.6543642,
                        "lng" : -79.4601996
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "98 ft",
                        "value" : 30
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 22
                     },
                     "end_location" : {
                        "lat" : 43.6546169,
                        "lng" : -79.4604112
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e toward \u003cb\u003eBloor St W\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "cgmiGbq~cNCHABCFEFIFEDG@"
                     },
                     "start_location" : {
                        "lat" : 43.6544209,
                        "lng" : -79.46017519999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "2.2 mi",
                        "value" : 3523
                     },
                     "duration" : {
                        "text" : "14 mins",
                        "value" : 836
                     },
                     "end_location" : {
                        "lat" : 43.6635591,
                        "lng" : -79.4184063
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eBloor St W\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "khmiGpr~cNIq@Ea@UaBMgAOaAEc@CMk@qES}AMi@WyBoAuJCQU_BWeBYuBIq@SmBCQAUMmAS_BK{@Io@K_AGe@Gg@UaBE]CWUaBIw@COCKG]C[[cCMaAE[AOIm@ESWyBE]AEAKGc@AKESC[WmBCSCSOiAY{BKs@Iu@_@sCE[c@iDMiAGc@CSE]AKCOAME_@QqAScBK{@Iw@EWMgACSOkA[eCE[Ge@a@{CW}BGe@QuAKs@Gg@CSG]AIAOIi@E]S_BYmBGi@YmB]gCGc@c@iDEa@EW]iCKo@E[OmAYqBCQE]M}@Ky@OkACQEYKg@?C?KAGCOCQCOCQCQCSCSAIIk@COEUCSAMCQCSEUCUCSAGCMAKEWS_B_@qCMcAa@_DOeAGc@EWCWEWCUOcAYwBCUKq@Gc@"
                     },
                     "start_location" : {
                        "lat" : 43.6546169,
                        "lng" : -79.4604112
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.9 mi",
                        "value" : 1388
                     },
                     "duration" : {
                        "text" : "6 mins",
                        "value" : 353
                     },
                     "end_location" : {
                        "lat" : 43.6755784,
                        "lng" : -79.4230446
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eChristie St\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "g`oiG`lvcN{@VSDA?E@g@Nw@VYHe@NeAZkBj@aBf@G@q@RSFeAZ}A`@a@Jc@JgAXs@NuDhAuC|@oA\\eAZaATgBf@aAZe@Ls@Ra@Jc@LODYHIB_@HkAZc@LUF]JmA\\qA\\WFI@cAXa@LUJ"
                     },
                     "start_location" : {
                        "lat" : 43.6635591,
                        "lng" : -79.4184063
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.6 mi",
                        "value" : 1042
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 233
                     },
                     "end_location" : {
                        "lat" : 43.6768401,
                        "lng" : -79.41036149999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eDavenport Rd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "kkqiG~hwcNWyAGa@c@_CAAw@qEk@_DG[OaA?AAKEUCUEe@Co@Em@?G?SAY?AA]Ac@Ac@A_@A]?Q?W@[@m@B_A?M@w@?]?o@CsAA[EaBCiBCiB?U?K?U?kF?uA?{C?U?a@ASAQACAY"
                     },
                     "start_location" : {
                        "lat" : 43.6755784,
                        "lng" : -79.4230446
                     },
                     "travel_mode" : "BICYCLING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            },
            {
               "distance" : {
                  "text" : "1.3 mi",
                  "value" : 2162
               },
               "duration" : {
                  "text" : "8 mins",
                  "value" : 469
               },
               "end_address" : "100 Queens Park, Toronto, ON M5S 2C6, Canada",
               "end_location" : {
                  "lat" : 43.6679186,
                  "lng" : -79.39380849999999
               },
               "start_address" : "Casa Loma, Toronto, ON, Canada",
               "start_location" : {
                  "lat" : 43.6768401,
                  "lng" : -79.41036149999999
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "0.4 mi",
                        "value" : 619
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 91
                     },
                     "end_location" : {
                        "lat" : 43.6766625,
                        "lng" : -79.4036737
                     },
                     "html_instructions" : "Head \u003cb\u003eeast\u003c/b\u003e on \u003cb\u003eDavenport Rd\u003c/b\u003e toward \u003cb\u003eWalmer Rd\u003c/b\u003e",
                     "polyline" : {
                        "points" : "gsqiGvytcNGq@O_A]oB{@sEAM[cBCM_@uBEWQcAG_@Ko@AIAI?G?E?E?C?GBOB[BOBMHYBKBMN_@BGBEBGHOHMJMr@_AtBmC"
                     },
                     "start_location" : {
                        "lat" : 43.6768401,
                        "lng" : -79.41036149999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "171 ft",
                        "value" : 52
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 24
                     },
                     "end_location" : {
                        "lat" : 43.6767826,
                        "lng" : -79.4030518
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eMacpherson Ave\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "crqiG|oscNCGAEAIIs@CYAE?E?I"
                     },
                     "start_location" : {
                        "lat" : 43.6766625,
                        "lng" : -79.4036737
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 mi",
                        "value" : 395
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 115
                     },
                     "end_location" : {
                        "lat" : 43.67436439999999,
                        "lng" : -79.39980919999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eDavenport Rd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "{rqiG`lscNNEb@Od@Ob@M`@OHC?ABABCPSXc@Ta@P[R]FKfAmBZi@FILUDKJQFMDKDMFYDO@OF]Ba@D_@"
                     },
                     "start_location" : {
                        "lat" : 43.6767826,
                        "lng" : -79.4030518
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 mi",
                        "value" : 732
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 118
                     },
                     "end_location" : {
                        "lat" : 43.6680384,
                        "lng" : -79.3973943
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eBedford Rd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "wcqiGxwrcNHCHAj@Q~@YZIh@OVKlBm@fA_@bA[TI|@WbA[|Ae@LGFCHAHCPAD?TB`@GVEVGPCd@OlA]rAc@VKVGhA_@b@M"
                     },
                     "start_location" : {
                        "lat" : 43.67436439999999,
                        "lng" : -79.39980919999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 mi",
                        "value" : 273
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 95
                     },
                     "end_location" : {
                        "lat" : 43.6687059,
                        "lng" : -79.39413209999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eBloor St W\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "g|oiGthrcNMkAo@oFIq@_@wC]eC"
                     },
                     "start_location" : {
                        "lat" : 43.6680384,
                        "lng" : -79.3973943
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "299 ft",
                        "value" : 91
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 26
                     },
                     "end_location" : {
                        "lat" : 43.6679186,
                        "lng" : -79.39380849999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eQueens Park\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the right\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "m`piGhtqcNd@Mp@Ux@UJE"
                     },
                     "start_location" : {
                        "lat" : 43.6687059,
                        "lng" : -79.39413209999999
                     },
                     "travel_mode" : "BICYCLING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            },
            {
               "distance" : {
                  "text" : "1.4 mi",
                  "value" : 2177
               },
               "duration" : {
                  "text" : "9 mins",
                  "value" : 511
               },
               "end_address" : "1 Dundas St E, Toronto, ON M5B 2R8, Canada",
               "end_location" : {
                  "lat" : 43.6560263,
                  "lng" : -79.3807795
               },
               "start_address" : "100 Queens Park, Toronto, ON M5S 2C6, Canada",
               "start_location" : {
                  "lat" : 43.6679186,
                  "lng" : -79.39380849999999
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "0.1 mi",
                        "value" : 184
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 25
                     },
                     "end_location" : {
                        "lat" : 43.6663316,
                        "lng" : -79.39314879999999
                     },
                     "html_instructions" : "Head \u003cb\u003esouth\u003c/b\u003e on \u003cb\u003eQueens Park\u003c/b\u003e toward \u003cb\u003eCharles St W\u003c/b\u003e",
                     "polyline" : {
                        "points" : "o{oiGhrqcNDA\\Kx@W\\MDADAPGBC\\IPGt@URGd@O"
                     },
                     "start_location" : {
                        "lat" : 43.6679186,
                        "lng" : -79.39380849999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "289 ft",
                        "value" : 88
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 63
                     },
                     "end_location" : {
                        "lat" : 43.6666096,
                        "lng" : -79.39221090000001
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "qqoiGdnqcNE_@MiAMiAAC?AAAA?A?AAK@"
                     },
                     "start_location" : {
                        "lat" : 43.6663316,
                        "lng" : -79.39314879999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "92 ft",
                        "value" : 28
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 4
                     },
                     "end_location" : {
                        "lat" : 43.6666844,
                        "lng" : -79.3918741
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "isoiGhhqcNEUGm@"
                     },
                     "start_location" : {
                        "lat" : 43.6666096,
                        "lng" : -79.39221090000001
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "131 ft",
                        "value" : 40
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 5
                     },
                     "end_location" : {
                        "lat" : 43.6663449,
                        "lng" : -79.3917347
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "wsoiGdfqcNd@SBAHANC"
                     },
                     "start_location" : {
                        "lat" : 43.6666844,
                        "lng" : -79.3918741
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "177 ft",
                        "value" : 54
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 7
                     },
                     "end_location" : {
                        "lat" : 43.6659415,
                        "lng" : -79.3914587
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "sqoiGheqcNBQ@C@A?C@?@AXIh@M"
                     },
                     "start_location" : {
                        "lat" : 43.6663449,
                        "lng" : -79.3917347
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "272 ft",
                        "value" : 83
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 13
                     },
                     "end_location" : {
                        "lat" : 43.6656488,
                        "lng" : -79.3905401
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "cooiGrcqcNJgAFa@@I@G?G`@s@"
                     },
                     "start_location" : {
                        "lat" : 43.6659415,
                        "lng" : -79.3914587
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "20 ft",
                        "value" : 6
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 1
                     },
                     "end_location" : {
                        "lat" : 43.6655975,
                        "lng" : -79.39056819999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e toward \u003cb\u003eSt Basil Ln\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "imoiGz}pcN@@@??@@?@??@@?"
                     },
                     "start_location" : {
                        "lat" : 43.6656488,
                        "lng" : -79.3905401
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "23 ft",
                        "value" : 7
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 1
                     },
                     "end_location" : {
                        "lat" : 43.665556,
                        "lng" : -79.39050759999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e toward \u003cb\u003eSt Basil Ln\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "_moiG`~pcN@??A@??A@??A@A?A?A"
                     },
                     "start_location" : {
                        "lat" : 43.6655975,
                        "lng" : -79.39056819999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "20 ft",
                        "value" : 6
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 1
                     },
                     "end_location" : {
                        "lat" : 43.6655765,
                        "lng" : -79.3904424
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e toward \u003cb\u003eSt Basil Ln\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "wloiGt}pcN?A?A?A?A?AA??AAA"
                     },
                     "start_location" : {
                        "lat" : 43.665556,
                        "lng" : -79.39050759999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "92 ft",
                        "value" : 28
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 4
                     },
                     "end_location" : {
                        "lat" : 43.6653977,
                        "lng" : -79.390202
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e toward \u003cb\u003eSt Basil Ln\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "{loiGf}pcNb@o@"
                     },
                     "start_location" : {
                        "lat" : 43.6655765,
                        "lng" : -79.3904424
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "26 ft",
                        "value" : 8
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 1
                     },
                     "end_location" : {
                        "lat" : 43.6654075,
                        "lng" : -79.39010569999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e toward \u003cb\u003eSt Basil Ln\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "wkoiGv{pcN?A@AAA?A?AAG"
                     },
                     "start_location" : {
                        "lat" : 43.6653977,
                        "lng" : -79.390202
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "358 ft",
                        "value" : 109
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 17
                     },
                     "end_location" : {
                        "lat" : 43.6644722,
                        "lng" : -79.3897046
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e toward \u003cb\u003eSt Basil Ln\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "ykoiGd{pcNHCn@U@?`Bi@\\M"
                     },
                     "start_location" : {
                        "lat" : 43.6654075,
                        "lng" : -79.39010569999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 mi",
                        "value" : 193
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 32
                     },
                     "end_location" : {
                        "lat" : 43.66501299999999,
                        "lng" : -79.387422
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eSt Basil Ln\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "}eoiGrxpcNSmAMcAEYW}AIo@AGGYWkB"
                     },
                     "start_location" : {
                        "lat" : 43.6644722,
                        "lng" : -79.3897046
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 mi",
                        "value" : 755
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 167
                     },
                     "end_location" : {
                        "lat" : 43.6584927,
                        "lng" : -79.38485439999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eBay St.\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "iioiGjjpcNh@QvAe@pA_@fA]l@QPGpAc@jA]DA|@[^MHCFA@?v@EF?NAHAJCf@M`AWp@Uh@QRIr@U^Kl@Qr@YHCPGHCdBg@PEPK"
                     },
                     "start_location" : {
                        "lat" : 43.66501299999999,
                        "lng" : -79.387422
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 mi",
                        "value" : 232
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 62
                     },
                     "end_location" : {
                        "lat" : 43.6590871,
                        "lng" : -79.3820928
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eGerrard St W\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eTurn is not allowed Mon–Fri 7:00 AM – 7:00 PM\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "q`niGhzocN_@mCE]G_@Ku@AGS}AM_AIu@OiA"
                     },
                     "start_location" : {
                        "lat" : 43.6584927,
                        "lng" : -79.38485439999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 mi",
                        "value" : 356
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 108
                     },
                     "end_location" : {
                        "lat" : 43.6560263,
                        "lng" : -79.3807795
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eYonge St\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the left\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "idniG`iocNpAc@~Ag@|@[`A[^MjA_@bBi@f@Qx@W"
                     },
                     "start_location" : {
                        "lat" : 43.6590871,
                        "lng" : -79.3820928
                     },
                     "travel_mode" : "BICYCLING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            },
            {
               "distance" : {
                  "text" : "1.6 mi",
                  "value" : 2566
               },
               "duration" : {
                  "text" : "12 mins",
                  "value" : 736
               },
               "end_address" : "290 Bremner Blvd, Toronto, ON M5V 3L9, Canada",
               "end_location" : {
                  "lat" : 43.642855,
                  "lng" : -79.38718730000001
               },
               "start_address" : "1 Dundas St E, Toronto, ON M5B 2R8, Canada",
               "start_location" : {
                  "lat" : 43.6560263,
                  "lng" : -79.3807795
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "0.3 mi",
                        "value" : 504
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 107
                     },
                     "end_location" : {
                        "lat" : 43.6516946,
                        "lng" : -79.3789556
                     },
                     "html_instructions" : "Head \u003cb\u003esouth\u003c/b\u003e on \u003cb\u003eYonge St\u003c/b\u003e toward \u003cb\u003eDundas Square\u003c/b\u003e",
                     "polyline" : {
                        "points" : "eqmiGz`ocNBAJCHCb@OLEb@MbA]`@MPGNE`@M`@M`@Mh@QpAc@`AY`@OfBi@`@OJCLEt@WjA]"
                     },
                     "start_location" : {
                        "lat" : 43.6560263,
                        "lng" : -79.3807795
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 mi",
                        "value" : 197
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 49
                     },
                     "end_location" : {
                        "lat" : 43.6511725,
                        "lng" : -79.3813012
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eRichmond St W\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "avliGnuncNXpBL|@Jp@VxBNfAJn@"
                     },
                     "start_location" : {
                        "lat" : 43.6516946,
                        "lng" : -79.3789556
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 mi",
                        "value" : 597
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 159
                     },
                     "end_location" : {
                        "lat" : 43.6460346,
                        "lng" : -79.379192
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eBay St.\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eTurn is not allowed Mon–Fri 7:00 AM – 7:00 PM\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "yrliGbdocNhBi@VIlA_@n@U`@MJC|Ag@b@MfA]pBo@`@M`@MBA`@M`@MHC`@OjAa@lAa@r@YRD"
                     },
                     "start_location" : {
                        "lat" : 43.6511725,
                        "lng" : -79.3813012
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 mi",
                        "value" : 489
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 149
                     },
                     "end_location" : {
                        "lat" : 43.6447774,
                        "lng" : -79.3850078
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eFront St W\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "urkiG|vncNf@~DBRNlAHn@PpABLNpABJR~A?FFt@Pl@TdBBRF`@Hp@DVHn@F`@Fh@Hn@D\\"
                     },
                     "start_location" : {
                        "lat" : 43.6460346,
                        "lng" : -79.379192
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 mi",
                        "value" : 277
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 73
                     },
                     "end_location" : {
                        "lat" : 43.64239449999999,
                        "lng" : -79.3840129
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eLower Simcoe St\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "{jkiGh{ocNb@O~@YdA]`@M@A^MJETG\\MZI`@Mn@QNGBAl@Q"
                     },
                     "start_location" : {
                        "lat" : 43.6447774,
                        "lng" : -79.3850078
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 mi",
                        "value" : 232
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 72
                     },
                     "end_location" : {
                        "lat" : 43.6416639,
                        "lng" : -79.3866783
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eBremner Blvd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "}{jiG`uocND^BPDX@NF`@Ht@Jz@Jx@D^BPBL@D?B@D?B@B@B?D@D@B?BBF@B?DBFBH@D@B@@?@@D@DBFJRDLDFFJ"
                     },
                     "start_location" : {
                        "lat" : 43.64239449999999,
                        "lng" : -79.3840129
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "148 ft",
                        "value" : 45
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 8
                     },
                     "end_location" : {
                        "lat" : 43.64197420000001,
                        "lng" : -79.38701130000001
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "kwjiGvepcN_@h@CDABA@A@A@E?GBA@A@"
                     },
                     "start_location" : {
                        "lat" : 43.6416639,
                        "lng" : -79.3866783
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "33 ft",
                        "value" : 10
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 2
                     },
                     "end_location" : {
                        "lat" : 43.6420251,
                        "lng" : -79.3869064
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "iyjiGxgpcNISA?"
                     },
                     "start_location" : {
                        "lat" : 43.64197420000001,
                        "lng" : -79.38701130000001
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 mi",
                        "value" : 177
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 82
                     },
                     "end_location" : {
                        "lat" : 43.6429503,
                        "lng" : -79.38672960000001
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eWalk your bicycle\u003c/div\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "uyjiGdgpcNAECCAAAAK?KGIEMGEAGCYC[EGCCC?AACAGE[AEAE_@g@A^A\\?T?@@P@L"
                     },
                     "start_location" : {
                        "lat" : 43.6420251,
                        "lng" : -79.3869064
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "125 ft",
                        "value" : 38
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 35
                     },
                     "end_location" : {
                        "lat" : 43.642855,
                        "lng" : -79.38718730000001
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eWalk your bicycle\u003c/div\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the left\u003c/div\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "m_kiG`fpcN@HD`@Hn@"
                     },
                     "start_location" : {
                        "lat" : 43.6429503,
                        "lng" : -79.38672960000001
                     },
                     "travel_mode" : "BICYCLING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            }
         ],
         "overview_polyline" : {
            "points" : "wfmiGfq~cNICEHUZMFOsAy@oGo@_Fa@gCaCaRq@{E]_Dg@uEqAqKs@oFsC_U{Dg[cBiNkAcJ}@mH{@{GyAmKw@gGqBcOe@qDKk@ASOcAMcAg@oDeDaWy@cGGc@{@VUD_Cr@yH~BsCx@kFrAiFxAeFzAgCp@iDbA_Dz@sA\\eJbCcAXw@XeA}F{BoMKy@OkCCmAGeCBsBDcDCcCG}BGuF?sNC}AC]WqBwBuL{@_FWcB?WJcATaAZu@rAkBtBmCCGCOOyA?INEhA_@nAa@X[tA_CrBmDf@aAXcARoB~Bq@dAYdCy@~E}AvDmAj@GTB`@GVE|Cy@lEwAb@MMkAy@aH}@}GvAc@hBi@bBi@TKn@QhA]d@OE_@MiAOmACCCAK@EUGm@d@SLCNCBQBE\\Oh@MJgAHk@@Ob@q@@?@@@@BABA@KCId@s@CM|CcA\\MSmAS}Ak@oDWkBh@QhDeAxE{AnDiAjAKl@GhBe@zAg@fBk@|Bw@nBk@b@Qy@aGm@{EOiApAc@|CcApGsBpEwAfT_HjA]XpBXnBf@`EJn@hBi@dBi@pAc@tEwAhH}BxCcAr@YRDj@rEX|Bh@|DRfBFt@Pl@XxBPrA^rCNlAbBi@hC{@`EoAl@QD^Hj@^bD\\lC\\rAVn@LRc@n@GHQFQ]CCWGe@Su@IKGIi@CK_@g@A^Ar@@RRhB"
         },
         "summary" : "Bloor St W",
         "warnings" : [
            "Bicycling directions are in beta. Use caution – This route may contain streets that aren't suited for bicycling."
         ],
         "waypoint_order" : [ 0, 1, 2 ]
      }
   ],
   "status" : "OK"
}
```
____
## Rubric

This is part of your first practical lab in Week 3 

1. A working URL properly documented in the MarkDown with a unique origin and destination earns 50%
2. Including one to four additional functioning unique parameters from the API earns 50-70%
3. Having 3 or more functioning unique/novel and well-thought out parameters from the API earns 70-90%
4. Including more than 2 "stops", including links to display PlaceIDs on Google Maps, or other innovative presentations earns 80%-100%. 
