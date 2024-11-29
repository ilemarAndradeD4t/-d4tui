import { ITableFilterOption } from './types';
import { ReactNode } from 'react';
import { UseFormReturn } from 'react-hook-form';

interface FacetedFilterProps {
    form: UseFormReturn<any, any, any>;
    id: string;
    label: string;
    icon: ReactNode;
    options: ITableFilterOption[];
    onSubmit: any;
}
export declare const FacetedFilter: ({ id, form, icon, label, options, }: FacetedFilterProps) => import("react").JSX.Element;
export {};
