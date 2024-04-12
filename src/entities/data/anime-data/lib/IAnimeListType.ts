export interface AnimeList {
  list: Titles[];
  pagination: IPagination;
}

export interface Titles {
  id: number;
  code: string;
  names: Names;
  franchises: Franchise[];
  announce: any;
  status: Status;
  posters: Posters;
  updated: number;
  last_change: number;
  type: Type;
  genres: string[];
  team: Team;
  season: Season;
  description: string;
  in_favorites: number;
  blocked: Blocked;
  player: Player;
  torrents: Torrents;
}

export interface Franchise {
  franchise: IFranchise;
  releases: Release[];
}

export interface IFranchise {
  id: string;
  name: string;
}

export interface Release {
  id: number;
  code: string;
  ordinal: number;
  names: Names;
}

export interface Names {
  ru: string;
  en: string;
  alternative: any;
}

export interface IAnime {
  list: Titles[];
}

export interface Status {
  string: string;
  code: number;
}

export interface Posters {
  small: Small;
  medium: Medium;
  original: Original;
}

export interface Small {
  url: string;
  raw_base64_file: any;
}

export interface Medium {
  url: string;
  raw_base64_file: any;
}

export interface Original {
  url: string;
  raw_base64_file: any;
}

export interface Type {
  full_string: string;
  code: number;
  string: string;
  episodes?: number;
  length: number;
}

export interface Team {
  voice: string[];
  translator: string[];
  editing: any[];
  decor: string[];
  timing: string[];
}

export interface Season {
  string: string;
  code: number;
  year: number;
  week_day: number;
}

export interface Blocked {
  copyrights: boolean;
  geoip: boolean;
  geoip_list: any[];
}

export interface Player {
  alternative_player: any;
  host: string;
  is_rutube: boolean;
  episodes: Episodes;
  list: List[];
  rutube: any[];
}

export interface Episodes {
  first: number;
  last: number;
  string: string;
}

export interface List {
  episode?: number;
  name?: string;
  uuid?: string;
  created_timestamp?: number;
  preview?: string;
  skips?: Skips;
  hls: Hls;
}

export interface Skips {
  opening: number[];
  ending: any[];
}

export interface Hls {
  fhd: string;
  hd: string;
  sd: string;
}

export interface Torrents {
  episodes: Episodes2;
  list: List3[];
}

export interface Episodes2 {
  first: number;
  last: number;
  string: string;
}

export interface List3 {
  torrent_id: number;
  episodes: Episodes3;
  quality: Quality;
  leechers: number;
  seeders: number;
  downloads: number;
  total_size: number;
  size_string: string;
  url: string;
  magnet: string;
  uploaded_timestamp: number;
  hash: string;
  metadata: any;
  raw_base64_file: any;
}

export interface Episodes3 {
  first: number;
  last: number;
  string: string;
}

export interface Quality {
  string: string;
  type: string;
  resolution: string;
  encoder: string;
  lq_audio: any;
}

export interface IPagination {
  pages: number;
  current_page: number;
  items_per_page: number;
  total_items: number;
}

export interface ICustomPagination {
  current: number;
  total: number;
  pagePerItems: number;
  onChange: (e: number) => void;
}
