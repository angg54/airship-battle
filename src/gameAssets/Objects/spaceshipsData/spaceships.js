export const spaceships = [
  {
    id: 0,
    name: "Nothing Special Spaceship",
    description: "just the first spaceship, nothing special about that, you will have to deal with it, it's all you have right now",
    damage: 1,
    vel: 7,
    height: 90,
    width: 90,
    shotType: "default",
    imageSrc: `${process.env.PUBLIC_URL}/images/spaceshipsSkins/nave2.gif`,
    cooldown: 1000,
    initialMunition: 8,
  },
  {
    id: 1,
    name: "Double Shotter",
    description: "Is in the name, it shoots double shots, can be usefull, good lucky",
    damage: 1,
    vel: 8,
    height: 90,
    width: 100,
    shotType: "doubleShot",
    imageSrc: `${process.env.PUBLIC_URL}/images/spaceshipsSkins/nave1.gif`,
    cooldown: 650,
    initialMunition: 6,
  },
  {
    id: 2,
    name: "Tank Shotter",
    description: "Kinda big, might delate laterrr 🧚,   ...also, kinda slow",
    damage: 3,
    vel: 4,
    height: 120,
    width: 250,
    shotType: "bigShot",
    imageSrc: `${process.env.PUBLIC_URL}/images/spaceshipsSkins/nave3.png`,
    cooldown: 1400,
    initialMunition: 4,
  }
]
