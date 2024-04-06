export interface IPagination {
    current: number;
    total: number;
    onChange: (index: number) => void;
}