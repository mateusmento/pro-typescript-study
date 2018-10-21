interface Filter
{
	id: number;
	search: string;
	startDate: Date;
	endDate: Date;
}

type Optional<T> = { [k in keyof T]?: T[k] };
type ReadOnly<T> = { readonly [k in keyof T]: T[k] };
type Nullable<T> = { [k in keyof T]: T[k] | null };

// all properties from filters_optional are optional
let filters_optional: Optional<Filter> = { id: 154634 };

// all properties from filters_nullable are nullable
let filters_nullable: Nullable<Filter> = { search: 'tenl', id: null, startDate: null, endDate: null};

// all properties from filters_readonly are readonly
let filters_readonly: ReadOnly<Filter> = { id: 716253, search: '', startDate: new Date(), endDate: new Date() };
