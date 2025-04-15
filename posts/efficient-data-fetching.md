---
title: 'Efficient Data Fetching in React: A Practical Guide'
date: 'Jan 23, 2025'
excerpt: 'A deep dive into real-world data fetching strategies using Next.js and React Query, with practical examples from production applications.'
cover_image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?'
category: 'Web Development'
author: 'Chirag Ramachandra'
author_image: 'http://1.gravatar.com/avatar/13ed42fe81958754e88d2189dea6fdc7'
---

Let's talk about data fetching in React applications - not just the theory, but the real, messy, production-grade challenges we face every day. After years of building large-scale applications, I've learned that efficient data fetching isn't just about choosing the right tools; it's about understanding the tradeoffs and knowing when to use which approach.

## The Server-Side Revolution in Next.js

Remember the days when we used to dump all our data fetching logic into `useEffect`? Those days are (thankfully) behind us. Next.js has revolutionized (or brought us back to the good old PHP days) how we think about data fetching.

### The Problem with Client-Side-Only Fetching

I recently worked on a dashboard that displayed business metrics. Initially, we fetched everything client-side, and the problems were painful:

- Users saw loading spinners everywhere
- The initial page load felt sluggish
- Performance metrics were terrible

Here's what that looked like:

```typescript
// dummy code, used to show as an example
// The old way - Don't do this!
function Dashboard() {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetchDashboardData()
			.then(setData)
			.catch(setError)
			.finally(() => setLoading(false));
	}, []);

	if (loading) return <LoadingSpinner />;
	if (error) return <ErrorMessage error={error} />;
	return <DashboardContent data={data} />;
}
```

### The Next.js Way: A more elegant approach

We refactored to use Next.js's data fetching methods, and the improvement was substantial:

```typescript
// pages/dashboard.tsx
export async function getStaticProps() {
	try {
		// Fetch your critical data
		const [metrics, topProducts, recentOrders] = await Promise.all([
			fetchMetrics(),
			fetchTopProducts(),
			fetchRecentOrders(),
		]);

		return {
			props: {
				metrics,
				topProducts,
				recentOrders,
			},
			// Revalidate every 5 minutes - adjust based on your data freshness needs
			revalidate: 300,
		};
	} catch (error) {
		// Proper error handling is crucial in production
		console.error('Dashboard data fetch failed:', error);
		return {
			props: {
				error: 'Failed to load dashboard data',
			},
		};
	}
}
```

The key insight here? **Not all data needs to be fetched the same way**. For our dashboard:

- Critical metrics use `getStaticProps` with revalidation
- User-specific data uses client-side fetching
- Real-time updates use WebSocket connections

## React Query: The Missing Piece

Now, here's where things get interesting. While Next.js handles the initial load beautifully, we still need to manage subsequent data fetches and updates. Enter React Query, they have really good docs and are a breeze to use.

The setup is pretty simple, you can read more about it [here](https://tanstack.com/query/latest/docs/framework/react/react-native/getting-started). Once you are setup, theyve really thought about everything, data fetching, caching, background updates, you name it, mutations, cache invalidations etc etc.

### A Real-World Example

Let's look at a feature we of an e-commerce platform - a product search with filters:

```typescript
// hooks/useProductSearch.ts
export function useProductSearch(initialData) {
	const [filters, setFilters] = useState({
		category: null,
		priceRange: null,
		sortBy: 'popularity',
	});

	const {
		data: products,
		isLoading,
		fetchNextPage,
		hasNextPage,
	} = useInfiniteQuery({
		queryKey: ['products', filters],
		queryFn: ({ pageParam = 1 }) =>
			fetchProducts({ ...filters, page: pageParam }),
		getNextPageParam: (lastPage) => lastPage.nextPage,
		// Here's the magic - use SSR data first
		initialData: { pages: [initialData], pageParams: [1] },
		// Keep previous data while fetching - smoother UX
		keepPreviousData: true,
		// Custom stale time for product data
		staleTime: 1000 * 60 * 5, // 5 minutes
	});

	// Prefetch next page for instant loading
	useEffect(() => {
		if (hasNextPage) {
			queryClient.prefetchInfiniteQuery({
				queryKey: ['products', filters],
				pages: products.pages.length + 1,
			});
		}
	}, [products?.pages.length]);

	return {
		products,
		isLoading,
		filters,
		setFilters,
		loadMore: fetchNextPage,
		hasMore: hasNextPage,
	};
}
```

This isn't just theory - this is battle-tested code. The key improvements we saw:

- Instant loading of initial data (SSR)
- Smooth infinite scrolling
- No unnecessary refetches
- Automatic background updates
- Preserved scroll position during navigation

## The Truth About Prop Drilling

In the earlier years, I was a big fan of global state management, or atleast use Context instead of prop drilling. Here's my hot take - **prop drilling isn't always bad**. In fact, sometimes it's better than reaching for global state management.

Consider this real component hierarchy:

```typescript
// A practical example of acceptable prop drilling
function ProductPage({ product }) {
	return (
		<div className='product-page'>
			<ProductHeader title={product.title} category={product.category} />
			<ProductGallery images={product.images} />
			<ProductDetails
				description={product.description}
				specifications={product.specifications}
			/>
			<ProductPricing price={product.price} discount={product.discount} />
		</div>
	);
}
```

This is perfectly fine! Why? Because:

1. Clear separation of concerns, the parent component is responsible for fetching the data and passing it down to the child components. Child components are responsible for rendering the data.
2. The data flow is clear and predictable
3. These components are tightly coupled by design
4. The props create a clear contract between components
5. It's easier to test and maintain

I am not saying you should never use global state, but get to global state only when the need arises. We dont need to over engineer the solution right from the start.

## Server-Side Operations: A Performance Game Changer

One of the biggest improvements we made to our application was moving heavy computations to the server, and load the react frontend with only the data that it needs for the initial render. Here's a real example that dramatically improved our performance:

```typescript
// pages/api/analytics.ts
export default async function handler(req, res) {
	const { startDate, endDate } = req.query;

	// Heavy lifting on the server
	const results = await prisma.$transaction([
		// Complex aggregations
		prisma.orders.aggregate({
			where: {
				createdAt: {
					gte: new Date(startDate),
					lte: new Date(endDate),
				},
			},
			_sum: {
				total: true,
			},
			_count: true,
		}),
		// Trend analysis
		prisma.orders.groupBy({
			by: ['status'],
			where: {
				createdAt: {
					gte: new Date(startDate),
					lte: new Date(endDate),
				},
			},
			_count: true,
			orderBy: {
				_count: 'desc',
			},
		}),
	]);

	// Send only what's needed
	res.json({
		totalRevenue: results[0]._sum.total,
		orderCount: results[0]._count,
		statusBreakdown: results[1],
	});
}
```

Even better if you can use DTO's to tell the client what data it needs, and the server can just send the data in the response. TypeScript is your friend here, and you can use it to your advantage.

The client component becomes beautifully simple:

```typescript
function AnalyticsDashboard() {
	const { data } = useQuery({
		queryKey: ['analytics', dateRange],
		queryFn: () => fetchAnalytics(dateRange),
		// Refresh every 5 minutes
		refetchInterval: 1000 * 60 * 5,
	});

	return <DashboardUI data={data} />;
}
```

## Conclusion: It's About Balance

Its mostly about balance and trying to keep it as simple as possible, offlate when in doubt I always think of first principles and go back to the basics.

Keep in mind, most code needs to be refactored once every few years or so, so dont over engineer the solution right from the start. Engineer only when you need to.

Got questions about implementing any of these patterns? Feel free to reach out. Happy coding!
