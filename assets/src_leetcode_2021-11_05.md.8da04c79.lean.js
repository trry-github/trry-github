import{_ as s,C as a,c as n,k as l,a as e,H as p,w as t,Q as o,o as r}from"./chunks/framework.30f3a391.js";const c=JSON.parse('{"title":"判断一个数字是否可以表示成三的幂的和","description":"","frontmatter":{"title":"判断一个数字是否可以表示成三的幂的和","sidebar":true},"headers":[],"relativePath":"src/leetcode/2021-11/05.md","filePath":"src/leetcode/2021-11/05.md","lastUpdated":1683796624000}'),Q={name:"src/leetcode/2021-11/05.md"},T=o("",3),i=l("li",null,"输入：n = 12",-1),y=l("li",null,"输出：true",-1),d={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.186ex"},xmlns:"http://www.w3.org/2000/svg",width:"12.283ex",height:"2.072ex",role:"img",focusable:"false",viewBox:"0 -833.9 5429.1 915.9","aria-hidden":"true"},m=[l("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[l("g",{"data-mml-node":"math"},[l("g",{"data-mml-node":"mn"},[l("path",{"data-c":"31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",style:{"stroke-width":"3"}}),l("path",{"data-c":"32",d:"M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z",transform:"translate(500,0)",style:{"stroke-width":"3"}})]),l("g",{"data-mml-node":"mo",transform:"translate(1277.8,0)"},[l("path",{"data-c":"3D",d:"M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",style:{"stroke-width":"3"}})]),l("g",{"data-mml-node":"msup",transform:"translate(2333.6,0)"},[l("g",{"data-mml-node":"mn"},[l("path",{"data-c":"33",d:"M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z",style:{"stroke-width":"3"}})]),l("g",{"data-mml-node":"mn",transform:"translate(533,363) scale(0.707)"},[l("path",{"data-c":"31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",style:{"stroke-width":"3"}})])]),l("g",{"data-mml-node":"mo",transform:"translate(3492.3,0)"},[l("path",{"data-c":"2B",d:"M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z",style:{"stroke-width":"3"}})]),l("g",{"data-mml-node":"msup",transform:"translate(4492.6,0)"},[l("g",{"data-mml-node":"mn"},[l("path",{"data-c":"33",d:"M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z",style:{"stroke-width":"3"}})]),l("g",{"data-mml-node":"mn",transform:"translate(533,363) scale(0.707)"},[l("path",{"data-c":"32",d:"M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z",style:{"stroke-width":"3"}})])])])],-1)],E=l("p",null,[l("strong",null,"示例 2：")],-1),u=l("li",null,"输入：n = 91",-1),h=l("li",null,"输出：true",-1),b={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.186ex"},xmlns:"http://www.w3.org/2000/svg",width:"17.168ex",height:"2.09ex",role:"img",focusable:"false",viewBox:"0 -841.7 7588.1 923.7","aria-hidden":"true"},x=[l("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[l("g",{"data-mml-node":"math"},[l("g",{"data-mml-node":"mn"},[l("path",{"data-c":"39",d:"M352 287Q304 211 232 211Q154 211 104 270T44 396Q42 412 42 436V444Q42 537 111 606Q171 666 243 666Q245 666 249 666T257 665H261Q273 665 286 663T323 651T370 619T413 560Q456 472 456 334Q456 194 396 97Q361 41 312 10T208 -22Q147 -22 108 7T68 93T121 149Q143 149 158 135T173 96Q173 78 164 65T148 49T135 44L131 43Q131 41 138 37T164 27T206 22H212Q272 22 313 86Q352 142 352 280V287ZM244 248Q292 248 321 297T351 430Q351 508 343 542Q341 552 337 562T323 588T293 615T246 625Q208 625 181 598Q160 576 154 546T147 441Q147 358 152 329T172 282Q197 248 244 248Z",style:{"stroke-width":"3"}}),l("path",{"data-c":"31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",transform:"translate(500,0)",style:{"stroke-width":"3"}})]),l("g",{"data-mml-node":"mo",transform:"translate(1277.8,0)"},[l("path",{"data-c":"3D",d:"M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",style:{"stroke-width":"3"}})]),l("g",{"data-mml-node":"msup",transform:"translate(2333.6,0)"},[l("g",{"data-mml-node":"mn"},[l("path",{"data-c":"33",d:"M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z",style:{"stroke-width":"3"}})]),l("g",{"data-mml-node":"mn",transform:"translate(533,363) scale(0.707)"},[l("path",{"data-c":"30",d:"M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",style:{"stroke-width":"3"}})])]),l("g",{"data-mml-node":"mo",transform:"translate(3492.3,0)"},[l("path",{"data-c":"2B",d:"M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z",style:{"stroke-width":"3"}})]),l("g",{"data-mml-node":"msup",transform:"translate(4492.6,0)"},[l("g",{"data-mml-node":"mn"},[l("path",{"data-c":"33",d:"M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z",style:{"stroke-width":"3"}})]),l("g",{"data-mml-node":"mn",transform:"translate(533,363) scale(0.707)"},[l("path",{"data-c":"32",d:"M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z",style:{"stroke-width":"3"}})])]),l("g",{"data-mml-node":"mo",transform:"translate(5651.3,0)"},[l("path",{"data-c":"2B",d:"M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z",style:{"stroke-width":"3"}})]),l("g",{"data-mml-node":"msup",transform:"translate(6651.6,0)"},[l("g",{"data-mml-node":"mn"},[l("path",{"data-c":"33",d:"M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z",style:{"stroke-width":"3"}})]),l("g",{"data-mml-node":"mn",transform:"translate(533,363) scale(0.707)"},[l("path",{"data-c":"34",d:"M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z",style:{"stroke-width":"3"}})])])])],-1)],f=l("p",null,[l("strong",null,"示例 3：")],-1),w=l("ul",null,[l("li",null,"输入：n = 21"),l("li",null,"输出：false")],-1),g=l("p",null,[l("strong",null,"提示：")],-1),H={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.186ex"},xmlns:"http://www.w3.org/2000/svg",width:"15.293ex",height:"2.156ex",role:"img",focusable:"false",viewBox:"0 -871.1 6759.7 953.1","aria-hidden":"true"},V=[l("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[l("g",{"data-mml-node":"math"},[l("g",{"data-mml-node":"mn"},[l("path",{"data-c":"31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",style:{"stroke-width":"3"}})]),l("g",{"data-mml-node":"mo",transform:"translate(777.8,0)"},[l("g",{"data-mml-node":"text"},[l("path",{"data-c":"3C",d:"M694 -11T694 -19T688 -33T678 -40Q671 -40 524 29T234 166L90 235Q83 240 83 250Q83 261 91 266Q664 540 678 540Q681 540 687 534T694 519T687 505Q686 504 417 376L151 250L417 124Q686 -4 687 -5Q694 -11 694 -19Z",style:{"stroke-width":"3"}})]),l("g",{"data-mml-node":"text",transform:"translate(778,0)"},[l("path",{"data-c":"3D",d:"M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",style:{"stroke-width":"3"}})])]),l("g",{"data-mml-node":"mi",transform:"translate(2611.6,0)"},[l("path",{"data-c":"1D45B",d:"M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z",style:{"stroke-width":"3"}})]),l("g",{"data-mml-node":"mo",transform:"translate(3489.3,0)"},[l("g",{"data-mml-node":"text"},[l("path",{"data-c":"3C",d:"M694 -11T694 -19T688 -33T678 -40Q671 -40 524 29T234 166L90 235Q83 240 83 250Q83 261 91 266Q664 540 678 540Q681 540 687 534T694 519T687 505Q686 504 417 376L151 250L417 124Q686 -4 687 -5Q694 -11 694 -19Z",style:{"stroke-width":"3"}})]),l("g",{"data-mml-node":"text",transform:"translate(778,0)"},[l("path",{"data-c":"3D",d:"M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",style:{"stroke-width":"3"}})])]),l("g",{"data-mml-node":"msup",transform:"translate(5323.1,0)"},[l("g",{"data-mml-node":"mn"},[l("path",{"data-c":"31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",style:{"stroke-width":"3"}}),l("path",{"data-c":"30",d:"M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",transform:"translate(500,0)",style:{"stroke-width":"3"}})]),l("g",{"data-mml-node":"mn",transform:"translate(1033,393.1) scale(0.707)"},[l("path",{"data-c":"37",d:"M55 458Q56 460 72 567L88 674Q88 676 108 676H128V672Q128 662 143 655T195 646T364 644H485V605L417 512Q408 500 387 472T360 435T339 403T319 367T305 330T292 284T284 230T278 162T275 80Q275 66 275 52T274 28V19Q270 2 255 -10T221 -22Q210 -22 200 -19T179 0T168 40Q168 198 265 368Q285 400 349 489L395 552H302Q128 552 119 546Q113 543 108 522T98 479L95 458V455H55V458Z",style:{"stroke-width":"3"}})])])])],-1)],A=o("",2);const D=s(Q,[["render",function(s,o,c,Q,D,L){const _=a("mn"),k=a("mo"),F=a("msup"),M=a("math"),v=a("mjx-assistive-mml"),C=a("mjx-container"),Z=a("mi");return r(),n("div",null,[T,l("ul",null,[i,y,l("li",null,[e("解释："),p(C,{class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},{default:t((()=>[(r(),n("svg",d,m)),p(v,{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},{default:t((()=>[p(M,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:t((()=>[p(_,null,{default:t((()=>[e("12")])),_:1}),p(k,null,{default:t((()=>[e("=")])),_:1}),p(F,null,{default:t((()=>[p(_,null,{default:t((()=>[e("3")])),_:1}),p(_,null,{default:t((()=>[e("1")])),_:1})])),_:1}),p(k,null,{default:t((()=>[e("+")])),_:1}),p(F,null,{default:t((()=>[p(_,null,{default:t((()=>[e("3")])),_:1}),p(_,null,{default:t((()=>[e("2")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])]),E,l("ul",null,[u,h,l("li",null,[e("解释："),p(C,{class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},{default:t((()=>[(r(),n("svg",b,x)),p(v,{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},{default:t((()=>[p(M,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:t((()=>[p(_,null,{default:t((()=>[e("91")])),_:1}),p(k,null,{default:t((()=>[e("=")])),_:1}),p(F,null,{default:t((()=>[p(_,null,{default:t((()=>[e("3")])),_:1}),p(_,null,{default:t((()=>[e("0")])),_:1})])),_:1}),p(k,null,{default:t((()=>[e("+")])),_:1}),p(F,null,{default:t((()=>[p(_,null,{default:t((()=>[e("3")])),_:1}),p(_,null,{default:t((()=>[e("2")])),_:1})])),_:1}),p(k,null,{default:t((()=>[e("+")])),_:1}),p(F,null,{default:t((()=>[p(_,null,{default:t((()=>[e("3")])),_:1}),p(_,null,{default:t((()=>[e("4")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])]),f,w,g,l("ul",null,[l("li",null,[p(C,{class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},{default:t((()=>[(r(),n("svg",H,V)),p(v,{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},{default:t((()=>[p(M,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:t((()=>[p(_,null,{default:t((()=>[e("1")])),_:1}),p(k,null,{default:t((()=>[e("<=")])),_:1}),p(Z,null,{default:t((()=>[e("n")])),_:1}),p(k,null,{default:t((()=>[e("<=")])),_:1}),p(F,null,{default:t((()=>[p(_,null,{default:t((()=>[e("10")])),_:1}),p(_,null,{default:t((()=>[e("7")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])]),A])}]]);export{c as __pageData,D as default};
