export const isTitleEmpty = (songTitle: string): boolean => {
  return !songTitle;
};

export const doesTitleExist = (
  songTitle: string,
  songTitles: string[]
): boolean => {
  return songTitles.includes(songTitle);
};

export const isTitleShort = (songTitle: string): boolean => {
  const minNameLength = 3;

  return songTitle.length < minNameLength;
};

export const isPlaylistFull = (songTitles: string[]): boolean => {
  const maxPlaylistLegth = 5;

  return songTitles.length >= maxPlaylistLegth;
};

export const addSong = (songTitle: string, songTitles: string[]): void => {
  songTitles.push(songTitle);
};

export const sortSongs = (songTitles: string[]): void => {
  songTitles.sort();
};

export const getSongsCount = (songTitles: string[]): number => {
  return songTitles.length;
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
