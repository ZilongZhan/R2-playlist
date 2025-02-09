export const isTitleEmpty = (songTitle: string): boolean => {
  let isEmpty: boolean;
  // Asígnale a la variable isEmpty un true o un false dependiendo de si
  // la variable songTitle recibida tiene un string vacío o no

  isEmpty = true; // Cambia esta línea por tu código

  return isEmpty;
};

export const doesTitleExist = (
  songTitle: string,
  songTitles: string[]
): boolean => {
  let doesExist: boolean;
  // Asígnale a la variable doesExist un true o un false dependiendo de si
  // el valor de la variable title recibida ya existe en el array de títulos recibido

  doesExist = true; // Cambia esta línea por tu código

  return doesExist;
};

export const isTitleShort = (songTitle: string): boolean => {
  let isShort: boolean;
  // Asígnale a la variable isShort un true o un false dependiendo de si
  // el valor de la variable songTitle recibida tiene menos de 3 caracteres

  isShort = true; // Cambia esta línea por tu código

  return isShort;
};

export const isPlaylistFull = (songTitles: string[]): boolean => {
  let isFull: boolean;
  // Asígnale a la variable isFull un true o un false dependiendo de si
  // el array de títulos recibido tiene 5 o más elementos

  isFull = true; // Cambia esta línea por tu código

  return isFull;
};

export const addSong = (songTitle: string, songTitles: string[]): void => {
  // Añade el valor de la variable songTitle al array de títulos recibido
};

export const sortSongs = (songTitles: string[]): void => {
  // Ordena alfabéticamente el array de títulos recibido
};

export const getSongsCount = (songTitles: string[]): number => {
  let songsCount: number;
  // Asígnale a la variable songsCount el número de elementos del array recibido

  songsCount = 0; // Cambia esta línea por tu código

  return songsCount;
};

export const removeSongByPosition = (
  songTitles: string[],
  position: number
): void => {
  // Elimina del array de títulos recibido el elemento que se encuentra en la posición recibida
};

export const getErrorMessage = (errorCode: string): string => {
  let errorMessage: string;

  // A la variable anterior le tendrás que asignar un mensaje de error
  // dependiendo del código de error recibido
  // Si el código de error no es válido, asígnale un mensaje genérico
  // Éstos son los códigos de error y sus mensajes correspondientes:
  // - "required": "No has introducido ningún título"
  // - "exists": "La canción ya existe"
  // - "too-short": "El título es demasiado corto"
  // - "limit": "La playlist está llena"

  errorMessage = ""; // Cambia esta línea por tu código

  return errorMessage;
};
