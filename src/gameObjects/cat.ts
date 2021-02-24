import { GameObject } from '@eva/eva.js';
import { Spine } from '@eva/plugin-renderer-spine';

export default function createCat() {
  const cat = new GameObject('spine', {
    anchor: {
      x: 0.5,
      y: 0.5,
    },
    scale: {
      x: 0.5,
      y: 0.5,
    },
  });
  const spine = new Spine({ resource: 'anim', animationName: 'idle' });
  cat.addComponent(spine);
  spine.on('complete', e => {
    console.log('动画播放结束', e.name);
  });
  spine.play('idle');
  return cat;
}
