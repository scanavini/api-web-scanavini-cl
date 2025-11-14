function formatMailingDate(date = new Date()) {
  return date.toLocaleString('es-CL', {
    timeZone: 'America/Santiago',      // fuerza hora local (Chile)
    dateStyle: 'medium',
    timeStyle: 'short'
  });
}


module.exports = { formatMailingDate };
