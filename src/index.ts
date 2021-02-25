// import createBackground from './gameObjects/background';
// import createBasketFront from './gameObjects/board/basketFront';
// import createBoard from './gameObjects/board/board';
// import createBall from './gameObjects/ball';
// import createBtn from './gameObjects/btn';
// import createCat from './gameObjects/cat';
import resources from './resources';

import { Game, resource, GameObject } from '@eva/eva.js';
import { RendererSystem } from '@eva/plugin-renderer';
import { ImgSystem } from '@eva/plugin-renderer-img';
import { EventSystem } from '@eva/plugin-renderer-event';
import { SpriteAnimationSystem } from '@eva/plugin-renderer-sprite-animation';
import { RenderSystem } from '@eva/plugin-renderer-render';
import { TransitionSystem } from '@eva/plugin-transition';
import { GraphicsSystem } from '@eva/plugin-renderer-graphics';
import { TextSystem } from '@eva/plugin-renderer-text';
import { Spine, SpineSystem } from '@eva/plugin-renderer-spine';

resource.addResource(resources);

const game = new Game({
  systems: [
    new RendererSystem({
      canvas: document.querySelector('#canvas'),
      width: 750,
      height: 1484,
      antialias: true,
    }),
    new SpineSystem(),
    new ImgSystem(),
    new TransitionSystem(),
    new SpriteAnimationSystem(),
    new RenderSystem(),
    new EventSystem(),
    new GraphicsSystem(),
    new TextSystem(),
  ],
});

game.scene.transform.size.width = 750;
game.scene.transform.size.height = 1484;

// const pos = {
//   x: 500,
//   y: 1100,
// };

// const ball = createBall(pos);
// const cat = createCat();


function createObject(name: any) {
  const gameObject = new GameObject(`spine${name}`, {
    anchor: {
      x: Math.random(),
      y: Math.random(),
    },
    scale: {
      x: 0.5,
      y: 0.5,
    },
  });
  const spine = new Spine({ resource: 'anim', animationName: 'dianji' });
  gameObject.addComponent(spine);
  // console.log(spine)
  spine.on('complete', () => {
    // console.log(e);
  });
  // console.log(spine)
  spine.play('dianji');
  game.scene.addChild(gameObject);
}



// const { basetFront, playAnim } = createBasketFront();

// game.scene.addChild(createBackground());
// game.scene.addChild(createBoard());
// game.scene.addChild(cat);

// game.scene.addChild(ball);
// game.scene.addChild(basetFront);
// game.scene.addChild(btn);
for(let i = 0; i < 100; i++) {
  createObject(i)
}
// window.playAnim = playAnim;
window.game = game;
