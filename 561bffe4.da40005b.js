(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{124:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return p}));var i=n(0),o=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var h=o.a.createContext({}),d=function(e){var t=o.a.useContext(h),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=d(e.components);return o.a.createElement(h.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),b=d(n),u=i,p=b["".concat(r,".").concat(u)]||b[u]||c[u]||a;return n?o.a.createElement(p,s(s({ref:t},h),{},{components:n})):o.a.createElement(p,s({ref:t},h))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var h=2;h<a;h++)r[h]=n[h];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},125:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var i=n(22),o=n(126);function a(){var e=Object(i.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,i){var a=void 0===i?{}:i,r=a.forcePrependBaseUrl,s=void 0!==r&&r,l=a.absolute,h=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(s)return t+n;var d=n.startsWith(t)?n:t+n.replace(/^\//,"");return h?e+d:d}(a,n,e,t)}}}function r(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},126:function(e,t,n){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!i(e)}n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}))},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return h})),n.d(t,"Pic",(function(){return d})),n.d(t,"default",(function(){return c}));var i=n(3),o=n(7),a=(n(0),n(124)),r=n(125),s={id:"blue-pills",title:"Blue pills and a birthday"},l={unversionedId:"Stories/blue-pills",id:"Stories/blue-pills",isDocsHomePage:!1,title:"Blue pills and a birthday",description:"{children}",source:"@site/docs/Stories/blue-pills.md",slug:"/Stories/blue-pills",permalink:"/docs/Stories/blue-pills",version:"current",sidebar:"someSidebar",previous:{title:"\u5b89\u63d0\u6208\u6d85\uff1a\u6076\u6cd5\u975e\u6cd5\uff01",permalink:"/docs/Humanities/law"},next:{title:"\u4e00\u4e2a\u7537\u4eba\u51b3\u5b9a\u53bb\u6b7b",permalink:"/docs/Stories/suicide"}},h=[{value:"Postscript",id:"postscript",children:[]}],d=function(e){var t=e.children,n=e.src;return Object(a.b)("div",{style:{textAlign:"center"}},Object(a.b)("img",{src:n}),Object(a.b)("p",{style:{color:"gray",fontSize:"small"}},t))},b={toc:h,Pic:d};function c(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"First published on Sept 13, 2020"),Object(a.b)("p",{parentName:"blockquote"},"Link: ",Object(a.b)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/SUvSjZB6X3UOo_iFkz-nrQ"},"https://mp.weixin.qq.com/s/SUvSjZB6X3UOo_iFkz-nrQ"))),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"So the hearse ran out of gas",Object(a.b)("br",{parentName:"p"}),"\n","A passenger person grabbed a map",Object(a.b)("br",{parentName:"p"}),"\n","And the driver inside it contrived a new route to save the past",Object(a.b)("br",{parentName:"p"}),"\n","And checked his watch and grabbed a cab",Object(a.b)("br",{parentName:"p"}),"\n","A beautifully planned taxi cab",Object(a.b)("br",{parentName:"p"}),"\n","A cab had it cleared out back and two men started to unpack"),Object(a.b)("p",{parentName:"blockquote"},"Driving once again",Object(a.b)("br",{parentName:"p"}),"\n","But now this time there were three men",Object(a.b)("br",{parentName:"p"}),"\n","And then I heard one of them say",Object(a.b)("br",{parentName:"p"}),"\n","I know the night will turn to gray",Object(a.b)("br",{parentName:"p"}),"\n","I know the stars will start to fade",Object(a.b)("br",{parentName:"p"}),"\n","When all the darkness fades away",Object(a.b)("br",{parentName:"p"}),"\n","We had to steal him from his fate",Object(a.b)("br",{parentName:"p"}),"\n","So he could see another day"),Object(a.b)("p",{parentName:"blockquote"},"Then I cracked open my box",Object(a.b)("br",{parentName:"p"}),"\n","Someone must have picked the lock",Object(a.b)("br",{parentName:"p"}),"\n","A little light revealed the spot",Object(a.b)("br",{parentName:"p"}),"\n","Where my fingernails had fought",Object(a.b)("br",{parentName:"p"}),"\n","Then I pushed it open more",Object(a.b)("br",{parentName:"p"}),"\n","Pushing up against the door",Object(a.b)("br",{parentName:"p"}),"\n","Then I sat up off the floor",Object(a.b)("br",{parentName:"p"}),"\n","and found the breath we're searching for",Object(a.b)("br",{parentName:"p"}),"\n","Then there were three men upfront",Object(a.b)("br",{parentName:"p"}),"\n","All I saw were backs of heads",Object(a.b)("br",{parentName:"p"}),"\n","And then I asked them am I alive and well or am I dreaming dead"),Object(a.b)("p",{parentName:"blockquote"},"And then one turned around to say",Object(a.b)("br",{parentName:"p"}),"\n","We're driving toward the morning sun",Object(a.b)("br",{parentName:"p"}),"\n","Where all your blood is washed away",Object(a.b)("br",{parentName:"p"}),"\n","And all you did will be undone")),Object(a.b)("p",null,"He woke up in his bed, sweat-soaked all over. 2:50, the clock read. Same dream, third time this week, he recalled, the exact same scene. He tried to refrain himself from thinking about it, but the more he held back, the more persistent the memories became, until his heavy breaths turned into a sob. \u201cNo,\u201d he implored, \u201cgo to someone else\u2019s dream!\u201d But he knew this would be in vain. He realized, without that comforting hand at night he\u2019s nothing, powerless in front of his own nightmares. Those voices echoed in his mind: \u201cCoward! Coward! Slacker! Murderer! \u2026\u201d"),Object(a.b)(d,{src:Object(r.a)("img/./docs/Stories/blue-pills/JGibibkelET6ibpNRJnUJeQabo5GmxCeqibvEAHQnOjd3GNW4o9OLxFu4cmYfQDNl34xic2BbJwcrF5qFRpdx1yK1TA.jpeg"),mdxType:"Pic"}),Object(a.b)("p",null,"In the dark of the night, as he lay in silence, the bell tower\u2019s chiming came from afar, ",Object(a.b)("em",{parentName:"p"},"bong"),", ",Object(a.b)("em",{parentName:"p"},"bong"),", ",Object(a.b)("em",{parentName:"p"},"bong"),"."),Object(a.b)("br",null),Object(a.b)("p",null,"As he rose with the sun, an unnamable pain in the chest seized him\u2014was it because of last night\u2019s dream? Shuffling through the room, he collapsed on the couch under a splitting headache. In the midst of wild thoughts, he reached out for the little white bottle, standing harmlessly on the table. He held it close to make out the letters: D, O, X, E. That\u2019s it, he thought, and lied back, still clutching to the bottle."),Object(a.b)("p",null,"That was four days ago when he got it, from a young lady\u2014no older than him, he speculated\u2014in gold-rimmed glasses, sitting on a high armchair, wearing a condescending smile. He remembered that day well, because that was also the very day when the girl left him."),Object(a.b)("p",null,"They were holding each other at the doorway. The girl looked up at him: \u201cYou have to take care of yourself now.\u201d"),Object(a.b)("p",null,"\u201cYes, for a week,\u201d he teased, \u201cwill we still celebrate your birthday together?\u201d"),Object(a.b)("p",null,"She nodded: \u201cHopefully. Don\u2019t stress yourself. Go to the psychiatrist and get some new drugs, maybe? I want to see you alive and well on my birthday.\u201d"),Object(a.b)("p",null,"They kissed good-bye, then smiled at each other\u2014both of their lips moved, but spoke no words. What a lovely girl, he thought, as the door closed in front of him. "),Object(a.b)("p",null,"That was four days ago. "),Object(a.b)("br",null),Object(a.b)("p",null,"He took a deep breath, carefully scrutinizing the bottle for the last time, like how a condemned would examine his executioner. One pill and he would merrily enjoy a day of redemption; half a bottle, and he would say good-bye to this world\u2014savior and destroyer enclosed in the same bottle. He had been pondering for days\u2014weighing, comparing, debating. But all calculations led to the same result: an ending was all he needed. The crimes on his shoulders pushed him into the bottomless perdition, and in no way could he see salvation possible. He closed his eyes and felt his arm rising. The next moment, pills came sliding down his throat. He crossed his arms in front of his chest and comforted himself, enjoy the happiest moment of my life."),Object(a.b)("p",null,"When he opened his eyes, he was walking on the stone beach. For the hundredth time, he heard the tides beating the shoreline, as always in his late-night dreams. The salty smell filled his nostrils. Limbo, he determined it to be, in its most suitable form. But this time, no longer filled with fear or remorse, he rose his arms, in a challenging posture: \u201cShow me what you\u2019ve got!\u201d"),Object(a.b)(d,{src:Object(r.a)("img/./docs/Stories/blue-pills/JGibibkelET68y0M6bVwP2gu8LEDcRKFMc24HTr1CtmQaajUic3fT3ibdKhbCmQNYY81Tg8DAJ8SiayibB5YQic84t9GQ.jpeg"),mdxType:"Pic"}),Object(a.b)("p",null,"Lightning came crashing down. A cloud of furious ravens swooshed from the horizon. He felt the storm\u2014and he shouted, \u201cRain down! Rain down on me!\u201d As he fell to the ground, droplets of fluid splashed onto his face, warm, thick, blood-smelling. He sank into the bottomless darkness. "),Object(a.b)("p",null,"He didn\u2019t know how long he\u2019d stayed motionless. He stretched his limbs. They were as intact as they\u2019d always been. He looked down, only seeing a black void. He stood up, but there was no sense of pressure from his legs. He searched for his legs with his right hand\u2014nowhere could he feel it. In a peculiar manner, he stumbled a few paces forward, then sat on the floor\u2014if there was a floor."),Object(a.b)("br",null),Object(a.b)("p",null,"In this utter silence and darkness, when every sense became numb, all the memories rushed to his head. The bartender, who, despite his gray hair, resembled a saint in every way, leaned forward, with sincerity in his eyes: \u201cBoy, you have to discover meaning in your life.\u201d"),Object(a.b)("p",null,"\u201cI do. I\u2019ve told you ten times.\u201d"),Object(a.b)("p",null,"\u201cNo, you can\u2019t attach your entire life to someone else! \u2014What if she\u2019s no longer with you?\u201d"),Object(a.b)("p",null,"\u201cThen life is not worth living anymore. Come on, my life, my survival\u2014is completely a gift from her. Without her I would be long dead.\u201d"),Object(a.b)("p",null,"The old man shook his head, then pointed his index finger at his chest and proclaimed solemnly: \u201cNo, your life ",Object(a.b)("em",{parentName:"p"},"is")," worth living. Child, He put the true divinity in ",Object(a.b)("em",{parentName:"p"},"you"),". You should live up to His ideals.\u201d "),Object(a.b)("p",null,"\u201cThen let Him save me\u2014why is He watching me suffer from all this? Doesn\u2019t He love me?\u201d"),Object(a.b)("p",null,"\u201cYes, he does. But sometimes you have to make it on your own. They said, don\u2019t put Him to test\u2014you can\u2019t demand anything from Him.\u201d"),Object(a.b)("br",null),Object(a.b)("p",null,"And now he\u2019s here, putting God to his test, and he got no salvation from God\u2014of course he won\u2019t, since this test in and of itself is a sign of distrust, a blasphemy. He huddled up on the ground\u2014the very first posture in his brief period of existence when he was still in a womb. His life has finished in a completed loop. This is going to be my resting place now, he thought. He tried to sing himself a sleeping chant, one that in his most distant memories used to be sung by his mother on stormy nights."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Numbness"),"."),Object(a.b)(d,{src:Object(r.a)("img/./docs/Stories/blue-pills/JGibibkelET6ibpNRJnUJeQabo5GmxCeqibvJzDWld29CbAGMe4cvlP440ZW4awNl0PKictKcHKgV6yQWCjotAYvwqA.jpeg"),mdxType:"Pic"}),Object(a.b)("p",null,"Then he started to sob again, on realizing this place could only be an alternative form of torture from God, but this time for eternity. He thought of the girl again, her angel eyes, her soft lips, her warm embrace, and deep in her soul, that sheltering geniality. He must have repeated the same sentence when he longed for an ending, \u201cShe\u2019s the reason for me to live on.\u201d But he gave up on her at the last moment. She was the missing weight on his scale. God, God Almighty! He cried out. He wandered around, trying to find a way out\u2014but how could he if he couldn\u2019t sense anything? In essence, he couldn\u2019t even tell if he was actually moving, or only believing he was moving. But suddenly, he did hit something solid\u2014a wooden wall, it turned out to be, extending in every direction. He felt it, inch by inch: its texture, grooves, and pores. Then he leaned against it, the only symbol of existence in this space of void."),Object(a.b)("br",null),Object(a.b)("p",null,"After another eternity, there came an abrupt shake, like a car coming to an emergency brake. The shake pierced through him like a current of electricity, resuscitating his senses. He froze still. A faint but recognizable chiming filled the space, almost music to his ears: bong, bong. Seven of them, he counted. There were voices: \u201cit\u2019s time,\u201d and he felt being lifted, then descending, as in an elevator going up-and-down. After that, everything settled again. "),Object(a.b)("p",null,"Out somewhere, solemn voices started to speak in indistinguishable tones:"),Object(a.b)("p",null,"\u201cThis man, he\u2019s not done yet.\u201d"),Object(a.b)("p",null,"\u201cNo, absolutely not. I see his will for survival."),Object(a.b)("p",null,"\u201cPoor he, he\u2019s now in impenetrable darkness, but he seeks light.\u201d"),Object(a.b)("p",null,"\u201cThe night will eventually go down. The stars will eventually fade. The sun will start to shed its light on all men alike.\u201d"),Object(a.b)("p",null,"\u201cThis man is already lost in his dark night, and he lost faith in the divinity.\u201d"),Object(a.b)("p",null,"\u201cWe cannot put him to blame. He is seized by Satan.\u201d"),Object(a.b)("p",null,"There was a long pause."),Object(a.b)("br",null),Object(a.b)("p",null,"He could no longer hold back his tears. He started banging at the board, scratching it with his nails. But it stood there, still and stiff, not even vibrating under his blows."),Object(a.b)("p",null,"An infinite wall, stretching to the end of infinity in every direction, one you cannot break through nor get around."),Object(a.b)("p",null,"He is, inevitably, facing his ultimate destination. This is a one-way trip with no stopover."),Object(a.b)("br",null),Object(a.b)("p",null,"\u201cNow the night is turning gray.\u201d"),Object(a.b)("p",null,"\u201cWhat a pity. The young man is missing this beautiful sunrise. He has chosen the world with no nights, but no sunrises either.\u201d"),Object(a.b)("p",null,"\u201cWe have to steal him from his fate\u2014this shall not be his ending, it\u2019s all too early. He should see more sunrises, more sunsets. He deserves a brighter fate.\u201d"),Object(a.b)("p",null,"\u201cYes. Even if that means more nights as well. We have to tell him that the creator loves him.\u201d"),Object(a.b)("br",null),Object(a.b)("p",null,"There came a \u201cclick\u201d in the void. A beam of sacred light shone in, almost blinding him. He squinted his eyes. It was from one edge of the wooden wall, like the gate to a divine kingdom which magically opened up a slit. He leaned against the wall, pushing hard against it with all his weight and strength. Gently, the gate opened up. Light flooded in, filling up every corner of the void, bathing him in this holy gift, and every pore of his absorbed greedily this nectar of life. He felt his feet on solid ground again. "),Object(a.b)(d,{src:Object(r.a)("img/./docs/Stories/blue-pills/JGibibkelET6ibpNRJnUJeQabo5GmxCeqibvVd0npMJ5ISzBljUq4jo0AAQD04QibdHpM3uFdK9zdNa66kdxqCLiaXgw.jpeg"),mdxType:"Pic"}),Object(a.b)("p",null,"The next moment he sat up on the floor, looking around. He\u2019s sitting in a wooden box, with its lid slid to the side, whose inner side was scattered with dents and scratches. He spent a few seconds adjusting to the bright sunlight, which shone right through the windshield. The place he\u2019s in looks suspiciously like a taxicab, a beautifully planned one, with its backseats removed, where he now sits upon. "),Object(a.b)("p",null,"He looked towards the driver\u2019s seat, not surprised to find that none of the three men there were holding the steering wheel, their black and curly hair gilded a halo of gold from the sun. He inquired pointlessly: \u201cWhere is this? Is this the afterlife? Is this a dream? Am I still alive and well?\u201d"),Object(a.b)("p",null,"They didn\u2019t look back. A voice came in no direction: \u201cSon, I see your many sins. I see you blood-stained.\u201d"),Object(a.b)("p",null,"\u201cYes. I cannot be forgiven.\u201d Still skeptical of him being alive, he refrained from asking more questions."),Object(a.b)("p",null,"\u201cNo, you can. You have just been redeemed from the endless darkness. Your life is no longer a hopeless mist of desperation.\u201d"),Object(a.b)("p",null,"\u201cAnd now we are driving towards the morning sun. Look up, and see the beauty of the world for yourself. In this kingdom I promise you, all your blood will be washed away, and all you did will be undone.\u201d"),Object(a.b)("p",null,"He looked up. The morning sun bloomed on the horizon, spreading its radiant flames of hope. A brand-new day is up on the rise, another chance to live."),Object(a.b)(d,{src:Object(r.a)("img/./docs/Stories/blue-pills/JGibibkelET6ibpNRJnUJeQabo5GmxCeqibvO9f1EuvIfZ7JiaRD68mfCricQ9eL2ot6OsruaUUBjspd8Qb6WbgM12sA.jpeg"),mdxType:"Pic"}),Object(a.b)("p",null,"They continued to talk. They talked about the meaning of life, about salvation, about the spirit\u2019s love in all His people. The men told him, he was blessed; that they sent him an angel to guide him through his life, to shelter him from any hardships he will face. They told him his second life is not a gift from anyone but one he earned for himself, that he should live it with gratitude and cherishing. "),Object(a.b)("p",null,"The taxicab sped through the light, towards His kingdom."),Object(a.b)("br",null),Object(a.b)("p",null,"He woke when a ray of light shone on his face. He put his hand in front of his eyes and observed the shift of shadows as he moved his fingers. Damn, I\u2019m still alive! He silently exclaimed. The splitting headache prevented him from recalling anything, but he vaguely remembered light and three figures. He staggered into the kitchen, turned on the tap, and stuck his face under the running water. He caught glimpse of the calendar: it\u2019s already been three days! He made a few calculations and realized that her birthday is ",Object(a.b)("em",{parentName:"p"},"today"),"."),Object(a.b)("p",null,"Birthday cake he hadn\u2019t bought one; presents he had none. When the cold water washed away all the mess in his mind, thoughts jumped up one-by-one. Maybe rushing out to buy her something right now? A cake, what kind? Or should we eat out tonight?"),Object(a.b)("p",null,"He turned off the tap, steadied himself with both hands on the edge of the sink, and stared at the water whirling down the bottom. She is his angel, he assured himself. But could she be imaginary? Could she just be the emblem of perfection in his sea of imagination? He laughed hysterically at this idea."),Object(a.b)(d,{src:Object(r.a)("img/./docs/Stories/blue-pills/JGibibkelET6ibpNRJnUJeQabo5GmxCeqibvWdcoDGoUjH0qulm5UoF5wlkaVnvdfaM3FJFjkNvXnDibMh3xtLDYOibw.jpeg"),mdxType:"Pic"}),Object(a.b)("p",null,"As the last drops of water seeped down into the bottomless hole, he heard the church bell strike twelve. Not long after, the doorbell rang."),Object(a.b)("h2",{id:"postscript"},"Postscript"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"This book is a work of fiction. I made it up."),Object(a.b)("p",{parentName:"blockquote"},"Neither novels nor their readers benefit from attempts to divine whether any facts hide inside a story. Such efforts attack the very idea that made-up stories can matter, which is sort of the foundational assumption of our species."),Object(a.b)("p",{parentName:"blockquote"},"I appreciate your cooperation in this matter."),Object(a.b)("p",{parentName:"blockquote"},'John Green. "The Fault in our Stars." Dutton Books.')),Object(a.b)("p",null,"Neither should my readers, no matter how eager they are, attempt to draw any linking between this work and the author\u2019s personal life. However, I do admit one truth: that this story is written for a girl\u2019s birthday. All those corny comments I would never say to her in person; so I put them here. And I sincerely wish her a happy 17th birthday \ud83e\udd73"),Object(a.b)("p",null,"Writing about something you don\u2019t have personal experience with is hard: religion, suicidal thoughts, depression, etc. But twenty one pilots is such a charming band that I feel guilty not writing anything for their songs. Hence this weird, underdeveloped, na\xefve compilation of the author\u2019s imaginations. If anyone finds any of the content differing from their own perception/knowledge/experience, or feel strongly about anything, feel free to contact the author through the official account. "),Object(a.b)("p",null,"Besides Taxi Cab, I also got inspiration from various other songs by twenty one pilots, including ",Object(a.b)("em",{parentName:"p"},"Implicit Demand for Proof"),", ",Object(a.b)("em",{parentName:"p"},"Kitchen Sink"),", ",Object(a.b)("em",{parentName:"p"},"Anathema"),", etc., which have appeared as random elements in the story. My story also could never have made sense have I not read the comic book Persepolis where Marjane Satrapi described in detail her survival after a suicidal attempt with anti-depression drugs. "),Object(a.b)("p",null,"Several quick notes:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"I hope the references to hell and heaven are clear to vigilant readers; in addition, the three men stand for the trinity, as also widely perceived in the lyrics of Taxi Cab. Also, check out on the near-death experience\u2014I  spent some effort on making the plot in line with this as well."),Object(a.b)("li",{parentName:"ul"},"The original draft, created half a year ago, differs dramatically from the final version posted here. That one included a conversation with the psychiatrist, a mass, another conversation with the priest (which I sort of merged with the one with the bartender), and a detailed portrayal of the man's (whose name is John, by the way, after the song ",Object(a.b)("em",{parentName:"li"},"Johnny Boy")," by twenty one pilots) nightmare and his background stories. All of these have been got rid of, simply because they made no sense even after I tried my best \ud83e\udd37\u200d\u2642\ufe0f. I'm no less satisfied with this version, though."),Object(a.b)("li",{parentName:"ul"},'There used to be a sick love quotation: "You are my doxepin." This is really inappropriate indeed, but it kind of echoed with the story.')),Object(a.b)("p",null,"Finally, once again, happy birthday to the girl whom this work is dedicated to, who is also a lover of \u201cThe Fault in Our Stars\u201d :)"))}c.isMDXComponent=!0}}]);