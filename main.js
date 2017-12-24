// axios.get('http://www.myapifilms.com/imdb/top?token=743c6d03-cb1d-4fc2-9265-7d7620e35287&format=json&data=0')
//   .then(function (response) {
//     console.log(response);
//   })
  // .catch(function (error) {
  //   console.log(error);
  // });

// 743c6d03-cb1d-4fc2-9265-7d7620e35287


// 2. Проект, который делали на занятии залить на гит. 

// 3. Два таска на команду:

//   3.1 Реализация перехода на страницу детали и просмотр инфы по деталям
//   3.2 Страница со списком фильмов, которые идут в кинотеатрах (in theathers)
//   запрос не отрабатывает постоянно пишет сетевая ошбка
// axios.get('http://www.myapifilms.com/imdb/inTheaters?token=743c6d03-cb1d-4fc2-9265-7d7620e35287&format=json&language=en-us')
//   .then(function (response) {
//     console.log(response);
//   })
  // .catch(function (error) {
  //   console.log(error);
  // });

const nowInTheathers = { "data" : {"inTheaters":[{"openingThisWeek":"Opening This Week","movies":[{"title":"Pitch Perfect 3","originalTitle":"","year":"2017","releaseDate":"20171222","directors":[{"name":"Trish Sie","id":"nm2586324"}],"writers":[{"name":"Kay Cannon","id":"nm0134224"},{"name":"Kay Cannon","id":"nm0134224"}],"urlPoster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNjEyMjk4NTE1NV5BMl5BanBnXkFtZTgwOTgzNzA3MjI@._V1_UX182_CR0,0,182,268_AL_.jpg","countries":["USA"],"languages":["English"],"genres":["Comedy","Music"],"plot":"After the highs of winning the World Championships, the Bellas find themselves split apart and discovering there aren't job prospects for making music with your mouth. But when they get the chance to reunite for an overseas USO tour, this group of awesome nerds will come together to make some music, and some questionable decisions, one last time.","simplePlot":"Following their win at the world championship, the now separated Bellas reunite for one last singing competition at an overseas USO tour, but face a group who uses both instruments and voices.","idIMDB":"tt4765284","urlIMDB":"http://www.imdb.com/title/tt4765284","rated":"PG-13","type":"Movie"},{"title":"Jumanji: Welcome to the Jungle","originalTitle":"","year":"2017","releaseDate":"20171220","directors":[{"name":"Jake Kasdan","id":"nm0440458"}],"writers":[{"name":"Chris McKenna","id":"nm0571344"},{"name":"Chris McKenna","id":"nm0571344"}],"urlPoster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTkyNDQ1MDc5OV5BMl5BanBnXkFtZTgwOTcyNzI2MzI@._V1_UX182_CR0,0,182,268_AL_.jpg","countries":["USA"],"languages":["English"],"genres":["Action","Adventure","Comedy","Family","Fantasy"],"plot":"In a brand new Jumanji adventure, four high school kids discover an old video game console and are drawn into the game's jungle setting, literally becoming the adult avatars they chose. What they discover is that you don't just play Jumanji - you must survive it. To beat the game and return to the real world, they'll have to go on the most dangerous adventure of their lives, discover what Alan Parrish left 20 years ago, and change the way they think about themselves - or they'll be stuck in the game forever, to be played by others without break.","simplePlot":"Four teenagers discover an old video game console and are literally drawn into the game's jungle setting becoming the adult avatars they chose.","idIMDB":"tt2283362","urlIMDB":"http://www.imdb.com/title/tt2283362","rated":"PG-13","type":"Movie"},{"title":"The Greatest Showman","originalTitle":"","year":"2017","releaseDate":"20171220","directors":[{"name":"Michael Gracey","id":"nm1243905"}],"writers":[{"name":"Jenny Bicks","id":"nm0081081"},{"name":"Bill Condon","id":"nm0174374"}],"urlPoster":"https://images-na.ssl-images-amazon.com/images/M/MV5BYjQ0ZWJkYjMtYjJmYS00MjJiLTg3NTYtMmIzN2E2Y2YwZmUyXkEyXkFqcGdeQXVyNjk5NDA3OTk@._V1_UX182_CR0,0,182,268_AL_.jpg","countries":["USA"],"languages":["English"],"genres":["Biography","Drama","Musical"],"plot":"Inspired by the imagination of P.T. Barnum, The Greatest Showman is an original musical that celebrates the birth of show business and tells of a visionary who rose from nothing to create a spectacle that became a worldwide sensation.","simplePlot":"Inspired by the imagination of P.T. Barnum, The Greatest Showman is an original musical that celebrates the birth of show business and tells of a visionary who rose from nothing to create a spectacle that became a worldwide sensation.","idIMDB":"tt1485796","urlIMDB":"http://www.imdb.com/title/tt1485796","rated":"PG","type":"Movie"},{"title":"Hostiles","originalTitle":"","year":"2017","releaseDate":"20180105","directors":[{"name":"Scott Cooper","id":"nm0178376"}],"writers":[{"name":"Scott Cooper","id":"nm0178376"},{"name":"Donald E. Stewart","id":"nm0829329"}],"runtime":"133 min","urlPoster":"https://images-na.ssl-images-amazon.com/images/M/MV5BOTBlNGQ1NDctMjY0Yy00MjZlLWIxMzYtYjVmZmQzMTI5OTdiXkEyXkFqcGdeQXVyNjkwMzU3NDI@._V1_UX182_CR0,0,182,268_AL_.jpg","countries":["USA"],"languages":["English","Cheyenne"],"genres":["Adventure","Drama","Western"],"plot":"In 1892, a legendary Army captain reluctantly agrees to escort a Cheyenne chief and his family through dangerous territory.","simplePlot":"In 1892, a legendary Army captain reluctantly agrees to escort a Cheyenne chief and his family through dangerous territory.","idIMDB":"tt5478478","urlIMDB":"http://www.imdb.com/title/tt5478478","rating":"8.2","metascore":"63","rated":"R","votes":"604","type":"Movie"},{"title":"Downsizing","originalTitle":"","year":"2017","releaseDate":"20171222","directors":[{"name":"Alexander Payne","id":"nm0668247"}],"writers":[{"name":"Alexander Payne","id":"nm0668247"},{"name":"Jim Taylor","id":"nm0852591"}],"runtime":"135 min","urlPoster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNDYxNDQ5OTYxOV5BMl5BanBnXkFtZTgwOTcyODkxNDM@._V1_UX182_CR0,0,182,268_AL_.jpg","countries":["USA","Norway"],"languages":["English","Spanish"],"genres":["Comedy","Drama","Sci-Fi"],"plot":"\"Downsizing\" follows a kindly occupational therapist who undergoes a new procedure to be shrunken to four inches tall so that he and his wife can help save the planet and afford a nice lifestyle at the same time.","simplePlot":"A social satire in which a guy realizes he would have a better life if he were to shrink himself.","idIMDB":"tt1389072","urlIMDB":"http://www.imdb.com/title/tt1389072","rating":"6.3","metascore":"74","votes":"1,319","type":"Movie"},{"title":"Father Figures","originalTitle":"","year":"2017","releaseDate":"20171222","directors":[{"name":"Lawrence Sher","id":"nm0003394"}],"writers":[{"name":"Justin Malen","id":"nm3675159"}],"runtime":"113 min","urlPoster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3MDQ4MDI1M15BMl5BanBnXkFtZTgwMDYxMjcxNDM@._V1_UX182_CR0,0,182,268_AL_.jpg","countries":["USA"],"languages":["English"],"genres":["Comedy"],"plot":"Upon learning that their mother has been lying to them for years about their allegedly deceased father, two fraternal twin brothers hit the road in order to find him.","simplePlot":"Upon learning that their mother has been lying to them for years about their allegedly deceased father, two fraternal twin brothers hit the road in order to find him.","idIMDB":"tt1966359","urlIMDB":"http://www.imdb.com/title/tt1966359","rated":"R","type":"Movie"},{"title":"The Post","originalTitle":"","year":"2017","releaseDate":"20180112","directors":[{"name":"Steven Spielberg","id":"nm0000229"}],"writers":[{"name":"Liz Hannah","id":"nm2176283"},{"name":"Josh Singer","id":"nm1802857"}],"urlPoster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjQyMjEwOTIwNV5BMl5BanBnXkFtZTgwOTkzNTMxNDM@._V1_UX182_CR0,0,182,268_AL_.jpg","countries":["USA"],"languages":["English"],"genres":["Biography","Drama","History","Thriller"],"plot":"A cover-up that spanned four U.S. Presidents pushed the country's first female newspaper publisher and a hard-driving editor to join an unprecedented battle between journalist and government. Inspired by true events.","simplePlot":"A cover-up that spanned four U.S. Presidents pushed the country's first female newspaper publisher and a hard-driving editor to join an unprecedented battle between journalist and government. Inspired by true events.","idIMDB":"tt6294822","urlIMDB":"http://www.imdb.com/title/tt6294822","rated":"PG-13","type":"Movie"},{"title":"Tiger Zinda Hai","originalTitle":"","year":"2017","releaseDate":"20171222","directors":[{"name":"Ali Abbas Zafar","id":"nm1804614"}],"writers":[{"name":"Neelesh Misra","id":"nm1305877"},{"name":"Ali Abbas Zafar","id":"nm1804614"}],"urlPoster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTYzOTk4OTA5N15BMl5BanBnXkFtZTgwMzUzNDIwNDI@._V1_UX182_CR0,0,182,268_AL_.jpg","countries":["India"],"languages":["Hindi"],"genres":["Action","Adventure","Thriller"],"plot":"Tiger & Zoya have been presumed dead by their respective countries. When all hell breaks lose in a foreign land which places civilian lives in harms way, Tiger & Zoya are called back into action for an impossible rescue mission to battle an international terrorist organisation. Will they succeed?","simplePlot":"Indian agent Tiger and Pakistani agent Zoya join forces in the name of humanity, against the militant messiah Abu Usman. Tiger Zinda Hai is an espionage action drama that follows a daring rescue mission in Iraq.","idIMDB":"tt5956100","urlIMDB":"http://www.imdb.com/title/tt5956100","type":"Movie"},{"title":"The Two of Us","originalTitle":"Le vieil homme et l'enfant","year":"1967","releaseDate":"19680219","directors":[{"name":"Claude Berri","id":"nm0001945"}],"writers":[{"name":"Claude Berri","id":"nm0001945"},{"name":"Gérard Brach","id":"nm0102722"}],"runtime":"90 min","urlPoster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTQxOTAzMTQyOF5BMl5BanBnXkFtZTcwNTIyMTY0MQ@@._V1_UY268_CR4,0,182,268_AL_.jpg","countries":["France"],"languages":["French"],"genres":["Comedy","Drama"],"plot":"Claude is a Jew. Because of the risks of an arrest (France is occupied by the Nazis), his parents send him away to an elderly couple in the country. Pepe, the husband, is a Petain supporter and a anti-Semite, but he does not know about Claude's religion. The film is the story of their growing mutual affection.","simplePlot":"Claude is a Jew. Because of the risks of an arrest (France is occupied by the Nazis), his parents send him away to an elderly couple in the country. Pepe, the husband, is a Petain supporter... ","idIMDB":"tt0063771","urlIMDB":"http://www.imdb.com/title/tt0063771","rating":"7.8","rated":"NOT RATED","votes":"1,492","type":"Movie"},{"title":"Happy End","originalTitle":"","year":"2017","releaseDate":"20171222","directors":[{"name":"Michael Haneke","id":"nm0359734"}],"writers":[{"name":"Michael Haneke","id":"nm0359734"}],"runtime":"107 min","urlPoster":"https://images-na.ssl-images-amazon.com/images/M/MV5BOGUwYjU2NjEtMmRhYy00ODVmLWE1YmMtNzY1OGEzOWI4ZWRkXkEyXkFqcGdeQXVyNDkzNTM2ODg@._V1_UX182_CR0,0,182,268_AL_.jpg","countries":["France","Austria","Germany"],"languages":["French","English"],"genres":["Drama"],"plot":"Gradually succumbing to dementia, George Laurent, the octogenarian patriarch of the Laurents, an affluent upper-bourgeois family, is uncomfortably sharing his palatial manor in Calais, the heart of the infamous migrant jungle, with his twice-married son, Thomas, and Anne, his workaholic daughter who has taken over the family construction business. Divorced and frigid, Anne has to handle the impact of a disastrous workplace accident caused by her disappointing son Pierre's negligence, while at the same time, the urgent hospitalisation of Thomas' ex-wife from a mysterious poisoning, leads his sulky 13-year-old daughter, Ève, to live with her father and his new wife, Anais. Undoubtedly, in this family, everyone has a skeleton in the closet, and as the fates of the Laurents enmesh with insistent and ignoble desires, a peculiar and disturbing alliance will form. But in the end, some secrets are bigger than others.","simplePlot":"A drama about a family set in Calais with the European refugee crisis as the backdrop.","idIMDB":"tt5304464","urlIMDB":"http://www.imdb.com/title/tt5304464","rating":"7.0","metascore":"75","rated":"R","votes":"2,393","type":"Movie"},{"title":"Crooked House","originalTitle":"","year":"2017","releaseDate":"20171121","directors":[{"name":"Gilles Paquet-Brenner","id":"nm0660707"}],"writers":[{"name":"Julian Fellowes","id":"nm0271501"},{"name":"Agatha Christie","id":"nm0002005"}],"runtime":"115 min","urlPoster":"https://images-na.ssl-images-amazon.com/images/M/MV5BODQ3NjI2MzU4OF5BMl5BanBnXkFtZTgwNTc5NDIyNDM@._V1_UX182_CR0,0,182,268_AL_.jpg","countries":["UK"],"languages":["English"],"genres":["Crime","Drama","Mystery"],"plot":"In Agatha Christie's most twisted tale, a spy-turned-private-detective is lured by his former lover to catch her grandfather's murderer before Scotland Yard exposes dark family secrets.","simplePlot":"In Agatha Christie's most twisted tale, a spy-turned-private-detective is lured by his former lover to catch her grandfather's murderer before Scotland Yard exposes dark family secrets.","idIMDB":"tt1869347","urlIMDB":"http://www.imdb.com/title/tt1869347","rating":"6.6","rated":"PG-13","votes":"2,209","type":"Movie"}]},{"inTheatersNow":"In Theaters Now","movies":[{"title":"Wonder","originalTitle":"","year":"2017","releaseDate":"20171117","directors":[{"name":"Stephen Chbosky","id":"nm0154716"}],"writers":[{"name":"Stephen Chbosky","id":"nm0154716"},{"name":"Steve Conrad","id":"nm0175726"}],"runtime":"113 min","urlPoster":"https://images-na.ssl-images-amazon.com/images/M/MV5BYjFhOWY0OTgtNDkzMC00YWJkLTk1NGEtYWUxNjhmMmQ5ZjYyXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_UX182_CR0,0,182,268_AL_.jpg","countries":["USA","Hong Kong"],"languages":["English"],"genres":["Drama","Family"],"plot":"Based on the New York Times bestseller, WONDER tells the incredibly inspiring and heartwarming story of August Pullman. Born with facial differences that, up until now, have prevented him from going to a mainstream school, Auggie becomes the most unlikely of heroes when he enters the local fifth grade. As his family, his new classmates, and the larger community all struggle to discover their compassion and acceptance, Auggie's extraordinary journey will unite them all and prove you can't blend in when you were born to stand out.","simplePlot":"Based on the New York Times bestseller, WONDER tells the incredibly inspiring and heartwarming story of August Pullman, a boy with facial differences who enters fifth grade, attending a mainstream elementary school for the first time.","idIMDB":"tt2543472","urlIMDB":"http://www.imdb.com/title/tt2543472","rating":"8.1","metascore":"68","rated":"PG","votes":"5,267","type":"Movie"},{"title":"Coco","originalTitle":"","year":"2017","releaseDate":"20171121","directors":[{"name":"Lee Unkrich","id":"nm0881279"},{"name":"Adrian Molina","id":"nm2937122"}],"writers":[{"name":"Lee Unkrich","id":"nm0881279"},{"name":"Jason Katz","id":"nm0441735"}],"runtime":"109 min","urlPoster":"https://images-na.ssl-images-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_UY268_CR3,0,182,268_AL_.jpg","countries":["USA"],"languages":["English","Spanish"],"genres":["Animation","Adventure","Comedy","Family","Fantasy","Musical","Mystery"],"plot":"Despite his family's baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.","simplePlot":"Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to work out the mystery.","idIMDB":"tt2380307","urlIMDB":"http://www.imdb.com/title/tt2380307","rating":"9.0","metascore":"80","rated":"PG","votes":"19,347","type":"Movie"},{"title":"Justice League","originalTitle":"","year":"2017","releaseDate":"20171117","directors":[{"name":"Zack Snyder","id":"nm0811583"}],"writers":[{"name":"Chris Terrio","id":"nm0006516"},{"name":"Joss Whedon","id":"nm0923736"}],"runtime":"120 min","urlPoster":"https://images-na.ssl-images-amazon.com/images/M/MV5BYWVhZjZkYTItOGIwYS00NmRkLWJlYjctMWM0ZjFmMDU4ZjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg","countries":["USA","UK","Canada"],"languages":["English","Irish","Russian","Icelandic"],"genres":["Action","Adventure","Fantasy","Sci-Fi"],"plot":"Fueled by his restored faith in humanity and inspired by Superman's selfless act, Bruce Wayne enlists the help of his newfound ally, Diana Prince, to face an even greater enemy. Together, Batman and Wonder Woman work quickly to find and recruit a team of metahumans to stand against this newly awakened threat. But despite the formation of this unprecedented league of heroes-Batman, Wonder Woman, Aquaman, Cyborg and The Flash-it may already be too late to save the planet from an assault of catastrophic proportions.","simplePlot":"Fueled by his restored faith in humanity and inspired by Superman's selfless act, Bruce Wayne enlists the help of his newfound ally, Diana Prince, to face an even greater enemy.","idIMDB":"tt0974015","urlIMDB":"http://www.imdb.com/title/tt0974015","rating":"7.3","metascore":"46","rated":"PG-13","votes":"118,705","type":"Movie"},{"title":"The Disaster Artist","originalTitle":"","year":"2017","releaseDate":"20171208","directors":[{"name":"James Franco","id":"nm0290556"}],"writers":[{"name":"Scott Neustadter","id":"nm2354099"},{"name":"Michael H. Weber","id":"nm2352210"}],"runtime":"103 min","urlPoster":"https://images-na.ssl-images-amazon.com/images/M/MV5BOGNkMzliMGMtMDI5Ni00OTZkLTgyMTYtNzk5ZTY1NjVhYjVmXkEyXkFqcGdeQXVyNTAzMTY4MDA@._V1_UX182_CR0,0,182,268_AL_.jpg","countries":["USA"],"languages":["English"],"genres":["Biography","Comedy","Drama"],"plot":"When Greg Sestero, an aspiring film actor, meets the weird and mysterious Tommy Wiseau in an acting class, they form a unique friendship and travel to Hollywood to make their dreams come true.","simplePlot":"When Greg Sestero, an aspiring film actor, meets the weird and mysterious Tommy Wiseau in an acting class, they form a unique friendship and travel to Hollywood to make their dreams come true.","idIMDB":"tt3521126","urlIMDB":"http://www.imdb.com/title/tt3521126","rating":"8.2","metascore":"76","rated":"R","votes":"2,871","type":"Movie"},{"title":"Thor: Ragnarok","originalTitle":"","year":"2017","releaseDate":"20171103","directors":[{"name":"Taika Waititi","id":"nm0169806"}],"writers":[{"name":"Eric Pearson","id":"nm3069408"},{"name":"Craig Kyle","id":"nm1219736"}],"runtime":"130 min","urlPoster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_UX182_CR0,0,182,268_AL_.jpg","countries":["USA"],"languages":["English"],"genres":["Action","Adventure","Comedy","Sci-Fi"],"plot":"Thor is imprisoned on the other side of the universe and finds himself in a race against time to get back to Asgard to stop Ragnarok, the destruction of his homeworld and the end of Asgardian civilization, at the hands of an all-powerful new threat, the ruthless Hela.","simplePlot":"Imprisoned, the almighty Thor finds himself in a lethal gladiatorial contest against the Hulk, his former ally. Thor must fight for survival and race against time to prevent the all-powerful Hela from destroying his home and the Asgardian civilization.","idIMDB":"tt3501632","urlIMDB":"http://www.imdb.com/title/tt3501632","rating":"8.2","metascore":"73","rated":"PG-13","votes":"153,679","type":"Movie"},{"title":"Murder on the Orient Express","originalTitle":"","year":"2017","releaseDate":"20171110","directors":[{"name":"Kenneth Branagh","id":"nm0000110"}],"writers":[{"name":"Michael Green","id":"nm0338169"},{"name":"Agatha Christie","id":"nm0002005"}],"runtime":"114 min","urlPoster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNGFmM2NmYjYtMjAwNy00ZDkzLWI3ZWMtOGZhOTRhYzQwMTA0XkEyXkFqcGdeQXVyNzU2MzMyNTI@._V1_UX182_CR0,0,182,268_AL_.jpg","countries":["USA","Malta"],"languages":["English"],"genres":["Crime","Drama","Mystery"],"plot":"Hercule Poirot, the best detective in the world decides to leave on the Orient Express. The train accidentally gets stopped because of the strong snow. Little did he know that a murder was planned and that a person on this train was able of commiting such crime. Will he solve this murder before the train starts working again?","simplePlot":"When a murder occurs on the train he's travelling on, celebrated detective Hercule Poirot is recruited to solve the case.","idIMDB":"tt3402236","urlIMDB":"http://www.imdb.com/title/tt3402236","rating":"6.8","metascore":"52","rated":"PG-13","votes":"39,477","type":"Movie"},{"title":"Just Getting Started","originalTitle":"","year":"2017","releaseDate":"20171208","directors":[{"name":"Ron Shelton","id":"nm0005421"}],"writers":[{"name":"Ron Shelton","id":"nm0005421"}],"urlPoster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMzk0NDdjNWEtMDVkMC00ODdiLTgyMmYtOWM0ZDRjOTU4MjJlXkEyXkFqcGdeQXVyNjM2MDMxMDk@._V1_UX182_CR0,0,182,268_AL_.jpg","countries":["USA"],"languages":["English"],"genres":["Action","Comedy"],"plot":"A two-hander action comedy in the vein of Midnight Run (1988), about an ex-F.B.I. Agent (Tommy Lee Jones) and an ex-mob lawyer in the Witness Protection Program (Morgan Freeman) having to put aside their petty rivalry on the golf course to fend off a mob hit.","simplePlot":"A two-hander action comedy in the vein of Midnight Run (1988), about an ex-F.B.I. Agent (Tommy Lee Jones) and an ex-mob lawyer in the Witness Protection Program (Morgan Freeman) having to put aside their petty rivalry on the golf course to fend off a mob hit.","idIMDB":"tt5721088","urlIMDB":"http://www.imdb.com/title/tt5721088","rating":"5.0","rated":"PG-13","votes":"20","type":"Movie"},{"title":"Daddy's Home 2","originalTitle":"","year":"2017","releaseDate":"20171110","directors":[{"name":"Sean Anders","id":"nm1890845"}],"writers":[{"name":"Sean Anders","id":"nm1890845"},{"name":"Brian Burns","id":"nm0122602"}],"runtime":"100 min","urlPoster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNDA4Nzc1OTg2OV5BMl5BanBnXkFtZTgwODE3ODgwNDI@._V1_UX182_CR0,0,182,268_AL_.jpg","countries":["USA"],"languages":["English"],"genres":["Comedy"],"plot":"Having finally gotten used to each other's existence, Brad and Dusty must now deal with their intrusive fathers during the holidays.","simplePlot":"Having finally gotten used to each other's existence, Brad and Dusty must now deal with their intrusive fathers during the holidays.","idIMDB":"tt5657846","urlIMDB":"http://www.imdb.com/title/tt5657846","rating":"6.2","metascore":"30","rated":"PG-13","votes":"4,961","type":"Movie"},{"title":"Three Billboards Outside Ebbing, Missouri","originalTitle":"","year":"2017","releaseDate":"20171110","directors":[{"name":"Martin McDonagh","id":"nm1732981"}],"writers":[{"name":"Martin McDonagh","id":"nm1732981"}],"runtime":"115 min","urlPoster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjMxNzgwMDUyMl5BMl5BanBnXkFtZTgwMTQ0NTIyNDM@._V1_UX182_CR0,0,182,268_AL_.jpg","countries":["UK","USA"],"languages":["English"],"genres":["Comedy","Crime","Drama"],"plot":"THREE BILLBOARDS OUTSIDE EBBING, MISSOURI is a darkly comic drama from Academy Award nominee Martin McDonagh (In Bruges). After months have passed without a culprit in her daughter's murder case, Mildred Hayes (Academy Award winner Frances McDormand) makes a bold move, painting three signs leading into her town with a controversial message directed at William Willoughby (Academy Award nominee Woody Harrelson), the town's revered chief of police. When his second-in-command Officer Dixon (Sam Rockwell), an immature mother's boy with a penchant for violence, gets involved, the battle between Mildred and Ebbing's law enforcement is only exacerbated.","simplePlot":"A mother personally challenges the local authorities to solve her daughter's murder when they fail to catch the culprit.","idIMDB":"tt5027774","urlIMDB":"http://www.imdb.com/title/tt5027774","rating":"8.5","metascore":"87","rated":"R","votes":"7,253","type":"Movie"},{"title":"Lady Bird","originalTitle":"","year":"2017","releaseDate":"20180218","directors":[{"name":"Greta Gerwig","id":"nm1950086"}],"writers":[{"name":"Greta Gerwig","id":"nm1950086"}],"runtime":"94 min","urlPoster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjg1NDY0NDYzMV5BMl5BanBnXkFtZTgwNzIwMTEwNDI@._V1_UX182_CR0,0,182,268_AL_.jpg","countries":["USA"],"languages":["English"],"genres":["Comedy","Drama"],"plot":"Christina \"Lady Bird\" MacPherson is a high school senior from the \"wrong side of the tracks.\" She longs for adventure, sophistication, and opportunity, but finds none of that in her Sacramento Catholic high school. LADY BIRD follows the title character's senior year in high school, including her first romance, her participation in the school play, and most importantly, her applying for college.","simplePlot":"In the early 2000s, an artistically-inclined seventeen year-old comes of age in Sacramento, California.","idIMDB":"tt4925292","urlIMDB":"http://www.imdb.com/title/tt4925292","rating":"8.5","metascore":"94","rated":"R","votes":"7,497","type":"Movie"}]}]},"about":{"version":"2.34.0","serverTime":"2017/12/24 17:51:06"}};
console.log(nowInTheathers);



const tempData = {
	"data": {
		"movies": [
			{
				"title": "The Shawshank Redemption",
				"year": "1994",
				"urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg",
				"idIMDB": "tt0111161",
				"rating": "9.2",
				"ranking": 1
			},
			{
				"title": "The Godfather",
				"year": "1972",
				"urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BY2Q2NzQ3ZDUtNWU5OC00Yjc0LThlYmEtNWM3NTFmM2JiY2VhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR1,0,45,67_AL_.jpg",
				"idIMDB": "tt0068646",
				"rating": "9.2",
				"ranking": 2
			},
			{
				"title": "The Godfather: Part II",
				"year": "1974",
				"urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjZiNzIxNTQtNDc5Zi00YWY1LThkMTctMDgzYjY4YjI1YmQyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY67_CR1,0,45,67_AL_.jpg",
				"idIMDB": "tt0071562",
				"rating": "9.0",
				"ranking": 3
			},
			{
				"title": "The Dark Knight",
				"year": "2008",
				"urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UY67_CR0,0,45,67_AL_.jpg",
				"idIMDB": "tt0468569",
				"rating": "9.0",
				"ranking": 4
			},
			{
				"title": "12 Angry Men",
				"year": "1957",
				"urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX45_CR0,0,45,67_AL_.jpg",
				"idIMDB": "tt0050083",
				"rating": "8.9",
				"ranking": 5
			},
			{
				"title": "Schindler's List",
				"year": "1993",
				"urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX45_CR0,0,45,67_AL_.jpg",
				"idIMDB": "tt0108052",
				"rating": "8.9",
				"ranking": 6
			},
			{
				"title": "Pulp Fiction",
				"year": "1994",
				"urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_UY67_CR0,0,45,67_AL_.jpg",
				"idIMDB": "tt0110912",
				"rating": "8.9",
				"ranking": 7
			},
			{
				"title": "The Lord of the Rings: The Return of the King",
				"year": "2003",
				"urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BYWY1ZWQ5YjMtMDE0MS00NWIzLWE1M2YtODYzYTk2OTNlYWZmXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_UX45_CR0,0,45,67_AL_.jpg",
				"idIMDB": "tt0167260",
				"rating": "8.9",
				"ranking": 8
			},
			{
				"title": "The Good, the Bad and the Ugly",
				"year": "1966",
				"urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BOTQ5NDI3MTI4MF5BMl5BanBnXkFtZTgwNDQ4ODE5MDE@._V1_UX45_CR0,0,45,67_AL_.jpg",
				"idIMDB": "tt0060196",
				"rating": "8.8",
				"ranking": 9
			},
			{
				"title": "Fight Club",
				"year": "1999",
				"urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMzFjMWNhYzQtYTIxNC00ZWQ1LThiOTItNWQyZmMxNDYyMjA5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR0,0,45,67_AL_.jpg",
				"idIMDB": "tt0137523",
				"rating": "8.8",
				"ranking": 10
			}
		]
	},
	"about": {
		"version": "2.34.0",
		"serverTime": "2017/12/24 17:20:44"
	}
};


console.log(tempData);


let listMovies = document.querySelector('.list-movies');
let sortByNameBtn = document.querySelector('.sortByName');
sortByNameBtn.addEventListener('click', sortByName);

let search = document.querySelector('#search');
search.addEventListener('keyup', searchByName);


let yearFrom = document.querySelector('.year-from');
let yearTo = document.querySelector('.year-to');
let filterByYearBtn = document.querySelector('.filterByYear');

filterByYearBtn.addEventListener('click', filterByYear);

function filterByYear() {
    listMovies.innerHTML = '';
    let tempArray = tempData.data.movies;
    tempArray = tempArray.filter((film) => {
        return film.year >= yearFrom.value && film.year <= yearTo.value;
    });
    renderList(tempArray);


}


function searchByName() {

    listMovies.innerHTML = '';
    let tempArray = tempData.data.movies;
    tempArray = tempArray.filter((film) => {
        return film.title.indexOf(this.value) === 0;
    });
    renderList(tempArray);

}

function sortByName() {
    listMovies.innerHTML = "";
    let tempArray = tempData.data.movies;
    tempArray.sort((a, b) => {
        return a.title > b.title ? 1 : -1;
    });
    renderList(tempArray);
}


function renderMovie(film) {
    let html = `
    <div class = "movie col s4">
    <img src = "${film.urlPoster}" alt = "poster">
    <h5>${film.title}</h5>
    <p>${film.year}</p>
    </div>
    `
    listMovies.insertAdjacentHTML('beforeend', html);
}

function renderList(list) {
    list.forEach((film) => { renderMovie(film) })
}

renderList(tempData.data.movies);