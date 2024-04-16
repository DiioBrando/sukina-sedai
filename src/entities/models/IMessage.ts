import { ChangeEvent } from "react";

export interface IMessage {
    valueComment: string;
    handleChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    handleSubmit: () => void;
}