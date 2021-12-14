export const renderStatName = (statName) => {
  switch (statName) {
    case `hp`:
      return `HEALTH`;
    case `attack`:
      return `ATTACK`;
    case `defense`:
      return `DEFENSE`;
    case `special-attack`:
      return `SP. ATK`;
    case `special-defense`:
      return `SP. DEF`;
    case `speed`:
      return `SPEED`;
  }
};
