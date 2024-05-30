import { AxiosResponse } from 'axios';
import { $apiComment } from '@/features/comments/api/api';
import { ICommentsData } from '@/entities/models/ICommentsData';

export default class CommentService {
  static async addComment(animeId: string, comment: string): Promise<void> {
    return $apiComment.post('/add-comment', { animeId, comment });
  }
  static async updateComment(
    idComment: string,
    comment: string,
  ): Promise<void> {
    return $apiComment.patch(`/update-comment/${idComment}`, { comment });
  }

  static async deleteComment(idComment: string): Promise<void> {
    return $apiComment.delete(`/delete-comment/${idComment}`);
  }

  static async getAllComment(): Promise<AxiosResponse<ICommentsData[]>> {
    return $apiComment.get<ICommentsData[]>('/getAll-comments');
  }
}
