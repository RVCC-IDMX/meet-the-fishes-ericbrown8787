// Just storing info on each fish in a JS file for easy reference
const fishes = [
  {
    name: "inky",
    sprite: {
      image: "fish1.png",
      scale: 0.15,
      animation: async function (fish) {
        // await Animate.to(fish, {
        //   y: fish.y + 25,
        //   duration: Math.random() * 500 + 250,
        //   easing: Animate.easeInOut,
        // });
        // await Animate.to(fish, {
        //   y: fish.y - 25,
        //   duration: Math.random() * 500 + 250,
        //   easing: Animate.easeInOut,
        // });

        requestAnimationFrame(arguments.callee);
      },
    },
    species: {
      common: "Buoyant Aether Gulper",
      scientific: "Chilomycterus haustus",
    },
    description:
      "This fish can't actually breathe underwater, but doesn't want anyone to know. If tickled, it will lose its composure and swim to the surface to breathe.",
    background: { color: 0x234030, noise: { noise: 0.67, seed: 60 } },
  },
  {
    name: "blinky",
    sprite: {
      image: "fish2.png",
      scale: 0.3,
      animation: async function (fish) {
        // await Animate.to(fish, {
        //   y: fish.y + 25,
        //   duration: Math.random() * 500,
        //   easing: Animate.easeInOut,
        // });
        // await Animate.to(fish, {
        //   y: fish.y - 25,
        //   duration: Math.random() * 500 + 250,
        //   easing: Animate.easeInOut,
        // });

        requestAnimationFrame(arguments.callee);
      },
    },
    species: {
      common: "Plane-Hopping Singleton",
      scientific: "Xenolepomis solitus",
    },
    description:
      "A multiversal constant, only one individual of this species may be born in each timeline. A school of these fish is made up entirely of versions of the same individual, each one a refugee from a different doomed reality.",
    background: { color: 0x1159ff, noise: { noise: 0.4, seed: 180 } },
  },
  {
    name: "clyde",
    sprite: {
      image: "fish3.png",
      scale: 0.2,
      animation: async function (fishSprite) {
        // await Animate.to(fishSprite, {
        //   scale: { x: 25, y: 25 },
        // });
        // // await Animate.to(fish, {
        // //   y: fish.y + 25,
        // //   duration: Math.random() * 500 + 250,
        // //   easing: Animate.easeInOut,
        // // });
        // // await Animate.to(fish, {
        // //   y: fish.y - 25,
        // //   duration: Math.random() * 500 + 250,
        // //   easing: Animate.easeInOut,
        // // });

        requestAnimationFrame(arguments.callee);
      },
    },
    species: {
      common: "Abyssal Shrieker",
      scientific: "Betta stridens",
    },
    description:
      "This fish is cursed with knowledge of the invisible barrier that separates our world from its own. Vibrations in this barrier briefly attract the fish's attention, and with it, its rage.",
    background: { color: 0x1159ff, noise: { noise: 0.5, seed: 180 } },
  },
];
