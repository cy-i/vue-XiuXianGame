(function(){"use strict";var t={4992:function(t,e,a){var i=a(5471),r=a(5353),s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"game-container-wrapper",attrs:{draggable:"true"}},[e("div",{staticClass:"github-corner"},[e("a",{attrs:{href:"https://github.com/setube/vue-XiuXianGame","aria-label":"View source on GitHub"}},[e("svg",{staticStyle:{fill:"#151513",color:"#fff",position:"absolute",top:"0",border:"0",right:"0","z-index":"2"},attrs:{width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true"}},[e("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),e("path",{staticStyle:{"transform-origin":"130px 106px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor"}}),e("path",{attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"}})])])]),e("div",{staticClass:"game-container"},[e("h1",[t._v("Vue 文字修仙游戏")]),e("div",{staticClass:"story"},[e("p",[t._v(t._s(t.storyText))])]),e("div",{staticClass:"attributes"},[e("div",{staticClass:"attribute-box"},[e("el-tag",{staticClass:"attribute"},[t._v("等级: "+t._s(t.player.level))]),e("el-tag",{staticClass:"attribute"},[t._v("修为: "+t._s(t.player.cultivation)+"/"+t._s(t.player.maxCultivation))]),e("el-tag",{staticClass:"attribute"},[t._v("血量: "+t._s(t.player.health)+"/"+t._s(t.player.maxHealth))]),e("el-tag",{staticClass:"attribute"},[t._v("法力: "+t._s(t.player.mana)+"/"+t._s(t.player.maxMana))]),e("el-tag",{staticClass:"attribute"},[t._v("攻击: "+t._s(t.player.attack))]),e("el-tag",{staticClass:"attribute"},[t._v("防御: "+t._s(t.player.defense))])],1)]),e("div",{staticClass:"backpack-box"},[e("el-tag",{staticClass:"backpack"},[t._v(" 武器: "+t._s(t.player.equipment.weapon?"已装备":"无")+" | 护甲: "+t._s(t.player.equipment.armor?"已装备":"无")+" | 饰品: "+t._s(t.player.equipment.accessory?"已装备":"无")+" | 法宝 "+t._s(t.player.equipment.sutra?"已装备":"无")+" ")]),e("el-tag",[t._v("背包: "+t._s(t.player.inventory.join(", ")||"空"))])],1),e("div",{staticClass:"actions"},t._l(t.actions,(function(a,i){return e("el-button",{key:i,on:{click:a.handler}},[t._v(t._s(a.text))])})),1)])])},n=[],l=(a(4114),{data(){return{player:{mana:50,level:1,attack:10,health:100,defense:10,maxMana:50,maxHealth:100,inventory:[],equipment:{sutra:null,armor:null,weapon:null,accessory:null},cultivation:0,maxCultivation:100},monster:{name:"",health:0,attack:0},actions:[{text:"修炼",handler:this.cultivate},{text:"探索",handler:this.explore}],storyText:""}},mounted(){this.$store.state.player&&(this.player=this.$store.state.player),this.startGame()},methods:{startGame(){this.player.cultivation||(this.storyText="欢迎来到《文字修仙游戏》，你的修仙之旅开始了。"),this.actions=[{text:"修炼",handler:this.cultivate},{text:"探索",handler:this.explore}],this.player.health=100,this.$store.commit("setPlayer",this.player)},cultivate(){this.player.cultivation<this.player.maxCultivation?(this.player.cultivation+=10,this.storyText=`你开始冥想，吸收周围的灵气。修为提升了！当前修为：${this.player.cultivation}/${this.player.maxCultivation}`,this.player.cultivation>=this.player.maxCultivation&&(this.player.level++,this.player.attack+=5,this.player.health=100,this.player.mana=this.player.maxMana,this.player.maxCultivation=Math.floor(100*Math.pow(2,this.player.level)),this.storyText=`恭喜你突破了！当前等级：${this.player.level}，修为：${this.player.cultivation}/${this.player.maxCultivation}`,this.$store.commit("setPlayer",this.player))):this.storyText="你已经达到了当前等级的修为上限，需要突破到下一个等级。",this.actions=[{text:"修炼",handler:this.cultivate},{text:"探索",handler:this.explore}]},explore(){Math.random()<.5?this.encounterMonster():this.findTreasure()},encounterMonster(){const t=this.player.level,e=["蛟龙","梦魇","狐妖","雷鸟","妖狐","狻猊","螭吻","车尾","蛤蟆精","白泽"];this.monster={name:`${e[Math.floor(Math.random()*e.length)]}`,health:100*t,attack:30*t,defense:15*t},this.storyText=`你遇到了一只${this.monster.name}！`,this.actions=[{text:"攻击",handler:()=>this.fightMonster(this.monster)},{text:"逃跑",handler:this.runAway}]},fightMonster(t){const e=t.attack,a=this.player.defense,i=Math.max(0,Math.floor(e-a));this.player.health-=i;const r=this.player.attack,s=t.defense,n=Math.max(0,Math.floor(r-s));if(t.health-=n,this.player.mana--,this.$store.commit("setPlayer",this.player),!this.player.mana)return this.storyText="你的法力已经用光了, 请回家升级补充法力",void(this.actions=[{text:"回到家里",handler:this.startGame}]);t.health<=0?(this.storyText=`你击败了${t.name}！获得了一些修为和一颗灵丹。`,this.actions=[{text:"探索",handler:this.explore},{text:"修炼",handler:this.cultivate},{text:"食用灵丹",handler:()=>this.equipItem("灵丹")}]):this.player.health<=0?(this.storyText="你被击败了。",this.actions=[{text:"回到家里",handler:this.startGame}]):(this.storyText=`你攻击了${t.name}，造成了${n}点伤害。${t.name}攻击了你，造成了${i}点伤害。`,this.actions=[{text:"攻击",handler:()=>this.fightMonster(t)},{text:"逃跑",handler:()=>this.runAway(t)}])},runAway(){Math.random()<.5?(this.storyText="逃跑失败，请继续战斗。",this.actions=[{text:"攻击",handler:()=>this.fightMonster(this.monster)}]):(this.storyText="你选择了逃跑，安全返回了修炼地点。",this.actions=[{text:"修炼",handler:this.cultivate},{text:"探索",handler:this.explore}])},findTreasure(){const t=["法宝","灵丹","武器","护甲","饰品"],e=t[Math.floor(Math.random()*t.length)];this.storyText=`你发现了一个宝箱，打开后获得了${e}。`,this.player.inventory.push(e),this.actions=[{text:"探索",handler:this.explore},{text:"修炼",handler:this.cultivate},{text:`${"灵丹"==e?"食用":"装备"}${e}`,handler:()=>this.equipItem(e)}],this.$store.commit("setPlayer",this.player)},equipItem(t){if(["武器","护甲","饰品","法宝"].includes(t))"武器"===t?(this.player.attack+=10,this.player.equipment.weapon=t):"护甲"===t?(this.player.defense+=10,this.player.equipment.armor=t):"饰品"===t?(this.player.attack+=5,this.player.defense+=5,this.player.equipment.accessory=t):"法宝"===t&&(this.player.attack+=10,this.player.defense+=10,this.player.equipment.sutra=t),this.player.inventory=this.player.inventory.filter((e=>e!==t)),this.storyText=`你装备了${t}。`;else{const e=Math.random();e<.25?(this.player.attack+=5,this.storyText="你食用灵丹后增加了5攻击"):e<.5?(this.player.defense+=5,this.storyText="你食用灵丹后增加了5防御"):(this.player.maxMana+=10,this.storyText="你食用灵丹后法力总量增加了10"),this.player.inventory=this.player.inventory.filter((e=>e!==t))}this.$store.commit("setPlayer",this.player),this.actions=[{text:"修炼",handler:this.cultivate},{text:"探索",handler:this.explore}]}}}),o=l,h=a(1656),u=(0,h.A)(o,s,n,!1,null,"a7fe4f32",null),c=u.exports,p=a(406);i.Ay.use(r.Ay);var y=new r.Ay.Store({state:{player:{mana:50,level:1,attack:10,health:100,defense:10,maxMana:50,maxHealth:100,inventory:[],equipment:{sutra:null,armor:null,weapon:null,accessory:null},cultivation:0,maxCultivation:100}},mutations:{setPlayer(t,e){t.player=e}},plugins:[(0,p.A)({storage:window.localStorage,reducer(t){return{player:t.player}}})]}),d=a(1473),m=a.n(d);i.Ay.use(r.Ay).use(m()),i.Ay.config.productionTip=!1,new i.Ay({store:y,render:t=>t(c)}).$mount("#app")}},e={};function a(i){var r=e[i];if(void 0!==r)return r.exports;var s=e[i]={id:i,loaded:!1,exports:{}};return t[i].call(s.exports,s,s.exports,a),s.loaded=!0,s.exports}a.m=t,function(){a.amdO={}}(),function(){var t=[];a.O=function(e,i,r,s){if(!i){var n=1/0;for(u=0;u<t.length;u++){i=t[u][0],r=t[u][1],s=t[u][2];for(var l=!0,o=0;o<i.length;o++)(!1&s||n>=s)&&Object.keys(a.O).every((function(t){return a.O[t](i[o])}))?i.splice(o--,1):(l=!1,s<n&&(n=s));if(l){t.splice(u--,1);var h=r();void 0!==h&&(e=h)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[i,r,s]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var i in e)a.o(e,i)&&!a.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){var t={524:0};a.O.j=function(e){return 0===t[e]};var e=function(e,i){var r,s,n=i[0],l=i[1],o=i[2],h=0;if(n.some((function(e){return 0!==t[e]}))){for(r in l)a.o(l,r)&&(a.m[r]=l[r]);if(o)var u=o(a)}for(e&&e(i);h<n.length;h++)s=n[h],a.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return a.O(u)},i=self["webpackChunkxiuxian_game"]=self["webpackChunkxiuxian_game"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=a.O(void 0,[504],(function(){return a(4992)}));i=a.O(i)})();