export interface SearchFormModel {
    name: {
        identifier: string;
        title: string;
    };
    year: number;
    type: string;
    selectedOptions?: string;
}