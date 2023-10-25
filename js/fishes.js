// Just storing info on each fish in a JS file for easy reference
// async function animation1 (){

// }

// predefining some animation functions for each fish
async function bob(fish) {
  await Animate.to(fish, {
    y: fish.y + 25,
    duration: 500,
    easing: Animate.easeInOut,
  });
  await Animate.to(fish, {
    y: fish.y - 25,
    duration: 500,
    easing: Animate.easeInOut,
  });
}

async function flip(fish) {
  await Animate.to(fish, {
    rotation: Math.PI,
    duration: 500,
    easing: Animate.easeInOut,
  });
  await Animate.to(fish, {
    rotation: 0,
    duration: 500,
    easing: Animate.easeInOut,
  });
}

async function pace(fish) {
  await Animate.to(fish, {
    scale: { x: fish.scale.x * -1, y: fish.scale.y },
    duration: 100,
  });
  await Animate.to(fish, {
    x: app.view.width * 0.75 + 50,
    duration: 500,
    easing: Animate.easeOut,
  });
  await Animate.to(fish, {
    scale: { x: Math.abs(fish.scale.x), y: fish.scale.y },
    duration: 100,
  });
  await Animate.to(fish, {
    x: app.view.width * 0.75 - 50,
    duration: 500,
    easing: Animate.easeOut,
  });
}

const fishes = [
  {
    name: 'Krumbo Bodorp',
    sprite: {
      image: 'fish1.png',
      scale: 0.15,
      animation: flip,
    },
    species: {
      common: 'Buoyant Aether Gulper',
      scientific: 'Chilomycterus haustus',
    },
    description:
      "This fish can't actually breathe underwater, but doesn't want anyone to know. If tickled, it will lose its composure and swim to the surface to breathe.",
    background: { color: 0x234030, noise: { noise: 0.67, seed: 60 } },
  },
  {
    name: 'Slorpo Jumb',
    sprite: {
      image: 'fish2.png',
      scale: 0.3,
      animation: bob,
    },
    species: {
      common: 'Plane-Hopping Singleton',
      scientific: 'Xenolepomis solitus',
    },
    description:
      'A multiversal constant, only one individual of this species may be born in each timeline. A school of these fish is made up entirely of versions of the same individual, each one a refugee from a different doomed reality.',
    background: { color: 0x1159ff, noise: { noise: 0.4, seed: 180 } },
  },
  {
    name: 'Jeff',
    sprite: {
      image: 'fish3.png',
      scale: 0.15,
      animation: pace,
    },
    species: {
      common: 'Abyssal Shrieker',
      scientific: 'Betta stridens',
    },
    description:
      "This fish is cursed with knowledge of the invisible barrier that separates our world from its own. Vibrations in this barrier briefly attract the fish's attention, and with it, its rage.",
    background: { color: 0xAA3311, noise: { noise: .1, seed: 180 } },
  },
];
