ig.module( 'game.levels.example_lights_shadows' )
.requires( 'impact.image','plusplus.entities.light','plusplus.entities.void' )
.defines(function(){
LevelExample_lights_shadows=/*JSON[*/{"entities":[{"type":"EntityLight","x":48,"y":0,"settings":{"size":{"x":152,"y":152},"castsShadows":"true","performance":"movable","castsShadowsMovable":"true"}},{"type":"EntityVoid","x":24,"y":104,"settings":{"name":"player","opaque":"true","hollow":"false"}}],"layer":[{"name":"collision","width":13,"height":9,"linkWithCollision":false,"visible":1,"tilesetName":"","repeat":false,"preRender":false,"distance":1,"tilesize":16,"foreground":false,"data":[[1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1,1]]},{"name":"middleground","width":13,"height":9,"linkWithCollision":false,"visible":1,"tilesetName":"media/visualize_collisiontiles_plusplus_16.png","repeat":false,"preRender":true,"distance":"1","tilesize":16,"foreground":false,"data":[[1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1,1]]}]}/*]JSON*/;
LevelExample_lights_shadowsResources=[new ig.Image('media/visualize_collisiontiles_plusplus_16.png')];
});