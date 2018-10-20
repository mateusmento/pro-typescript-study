interface Filter
{
	id: number;
	search: string;
	startDate: date;
	endDate: date;
}

type Optional<T> = { [k in keyof T]?: T[k] };
type ReadOnly<T> = { readonly [k in keyof T]: T[k] };
type Nullable<T> = { [k in keyof T]: T[k] | null };

// all properties from filters_optional are optional
Optional<Filter> filters_optional = { id: 154634 };

// all properties from filters_nullable are nullable
Nullable<Filter> filters_nullable = { search: 'tenl', id: null, startDate: null, endDate: null};

// all properties from filters_readonly are readonly
ReadOnly<Filter> filters_readonly = { id: 716253, search: '', startDate: null, endDate: null };
