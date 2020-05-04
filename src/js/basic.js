export default function health(player) {
  if (player.health > 50) 
  {
    return 'healthy';
  }
  if (player.health <= 50 && player.health > 15)
  {
    return 'wounded';
  }
  if (player.health <= 15)
  {
    return 'critical';
  }
  return 'error in player';
}
