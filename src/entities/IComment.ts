export interface ISettingComment {
  id: number;
  name: string;
  dateComment: string;
  comment: string;
}

export interface IComment {
  comment: ISettingComment;
}
