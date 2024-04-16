export interface ISettingImage {
  width?: number;
  height?: number;
  style?: string;
  avatar?: string;
  formatPic?: string;
  altPic?: string;
  isOnlineSize?: {
    width: number;
    height: number;
  };
  isOnlineStatus: boolean;
}

export interface IPersonImage {
  setting?: ISettingImage;
}
