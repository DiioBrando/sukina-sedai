import CommentService from '@/features/comments/lib/CommentService';
import { ICommentsData, ICommentStore } from '@/entities/models/ICommentsData';
import { createWithEqualityFn } from 'zustand/traditional';

export const useCommentStore = createWithEqualityFn<ICommentStore>(
  (set, get) => ({
    comments: [] as ICommentsData[],
    addComment: async (animeId: string, comment: string): Promise<void> => {
      await CommentService.addComment(animeId, comment);
    },
    updateComment: async (
      idComment: string,
      comment: string,
    ): Promise<void> => {
      await CommentService.updateComment(idComment, comment);
    },
    deleteComment: async (idComment: string): Promise<void> => {
      await CommentService.deleteComment(idComment);
    },
    getAllComment: async () => {
      await CommentService.getAllComment().then((res) => {
        const getAllComment = res.data;
        set({ comments: getAllComment });
      });
    },
    getCommentByAnimeId: async (animeId: string): Promise<void> => {
      await CommentService.getAllComment().then((res) => {
        const getAllByAnimeIdComment = res.data.filter(
          (item) => item.animeId === animeId,
        );
        set({ comments: getAllByAnimeIdComment });
      });
    },
  }),
);
