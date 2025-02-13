export const isTitleEmpty = (songTitle: string): boolean => {
  const isEmpty = !songTitle;

  return isEmpty;
};

export const doesTitleExist = (
  songTitle: string,
  songTitles: string[]
): boolean => {
  const doesExist = songTitles.includes(songTitle);

  return doesExist;
};

export const isTitleShort = (songTitle: string): boolean => {
  const minNameLength = 3;
  const isShort = songTitle.length < minNameLength;

  return isShort;
};

export const isPlaylistFull = (songTitles: string[]): boolean => {
  const maxPlaylistLegth = 5;
  const isFull = songTitles.length >= maxPlaylistLegth;

  return isFull;
};

export const addSong = (songTitle: string, songTitles: string[]): void => {
  songTitles.push(songTitle);
};

export const sortSongs = (songTitles: string[]): void => {
  songTitles.sort();
};

export const getSongsCount = (songTitles: string[]): number => {
  const songsCount = songTitles.length;

  return songsCount;
};

export const removeSongByPosition = (
  songTitles: string[],
  position: number
): void => {
  songTitles.splice(position, 1);
};

export const getErrorMessage = (errorCode: string): string => {
  if (errorCode === "required") {
    return "No has introducido ningún título";
  }

  if (errorCode === "exists") {
    return "La canción ya existe";
  }

  if (errorCode === "too-short") {
    return "El título es demasiado corto";
  }

  if (errorCode === "limit") {
    return "La playlist está llena";
  }

  return "Ha habido un error! Inténtalo de nuevo";
};
