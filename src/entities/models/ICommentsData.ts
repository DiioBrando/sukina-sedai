import CommentService from '@/features/comments/lib/CommentService';

export interface IGrade {
  _id: string;
}

export interface ICommentsData {
  _id: string;
  idUser: string;
  animeId: string;
  login: string;
  timestamp: string;
  changed: boolean;
  comment: string;
  like: IGrade[];
  dislike: IGrade[];
}

export interface ICommentStore {
  comments: ICommentsData[];
  addComment: (animeId: string, comment: string) => void;
  updateComment: (idComment: string, comment: string) => void;
  deleteComment: (idComment: string) => void;
  getAllComment: () => void;
  getCommentByAnimeId: (animeId: string) => void;
}
