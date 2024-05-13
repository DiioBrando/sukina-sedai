import { AxiosResponse } from 'axios';
import { $apiComment } from '@/features/comments/api/api';
import { IComments } from '@/entities/models/IComments';

export default class CommentService {
  static async addComment(
    _id: string,
    animeId: string,
    comment: string,
  ): Promise<void> {
    return $apiComment.post('/add-comment', { _id, animeId, comment });
  }
  static async updateComment(_id: string, comment: string): Promise<void> {
    return $apiComment.patch(`/update-comment/${_id}`, { comment });
  }

  static async deleteComment(_id: string): Promise<void> {
    return $apiComment.delete(`/delete-comment/${_id}`);
  }

  static async getAllComment(): Promise<AxiosResponse<IComments[]>> {
    return $apiComment.get<IComments[]>('/getAll-comments');
  }
}
