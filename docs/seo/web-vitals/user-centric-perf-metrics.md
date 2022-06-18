# User-centric performance metrics

From [User-centric performance metrics](https://web.dev/user-centric-performance-metrics/#in-the-field)

> When talking about performance, it's important to be precise and to refer to performance in terms of objective criteria that can be quantitatively measured. These criteria are known as _metrics_.

## Defining metrics

> Over the past few years, members of the Chrome team—in collaboration with the [W3C Web Performance Working Group](https://www.w3.org/webperf/)—have been working to standardize a set of new APIs and metrics that more accurately measure how users experience the performance of a web page.
>
> To help ensure the metrics are relevant to users, we frame them around a few key questions:
>
> - **Is it happening?**
>   - Did the navigation start successfully? Has the server responded?
> - **Is it useful?**
>   - Has enough content rendered that users can engage with it?
> - **Is it usable?**
>   - Can users interact with the page, or is it busy?
> - **Is it delightful?**
>   - Are the interactions smooth and natural, free of lag and jank?

## How metrics are mesured

> Performance metrics are generally measured in one of two ways:
>
> - **In the lab** using tools to simulate a page load in a consistent, controlled environment
> - **In the field** on real users actually loading and interacting with the page

### In the lab

> Testing performance in the lab is essential when _developing_ new features. Before features are released in production, it's impossible to measure their performance characteristics on real users, so testing them in the lab before the feature is released is the best way to prevent performance regressions.

### In the field

> On the other hand, while testing in the lab is a reasonable proxy for performance, it isn't necessarily reflective of how all users experience your site in the wild.
>
> The performance of a site can vary dramatically based on a user's device capabilities and their network conditions. It can also vary based on whether (or how) a user is interacting with the page.
>
> Moreover, page loads may not be deterministic. For example, sites that load personalized content or ads may experience vastly different performance characteristics from user to user. A lab test will not capture those differences.
>
> The only way to truly know how your site performs for your users is to actually measure its performance as those users are loading and interacting with it. This type of measurement is commonly referred to as [Real User Monitoring](https://en.wikipedia.org/wiki/Real_user_monitoring).

## Types of metrics

> There are several other types of metrics that are relevant to how users perceive performance.
>
> - **Perceived load speed** how quickly a page can load and render all of its visual elements to the screen.
> - **Load responsiveness** how quickly a page can load and execute any required JavaScript code in order for components to respond quickly to user interaction.
> - **Runtime responsiveness** after page load, how quickly can the page respond to user interaction.
> - **Visual stability** do elements on the page shift in ways that users don't expect and potentially interfere with their interactions?
> - **Smoothness** do transitions and animations render at a consistent frame rate and flow fluidly from one state to the next?
>
> Given all the above types of performance metrics, it's hopefully clear that no single metric is sufficient to capture all the performance characteristics of a page.

## Important metrics to measure

> - [**First Contentful Paint (FCP)**](https://web.dev/fcp/) measures the time from when the page starts loading to when any part of the page's content is rendered on the screen. ([lab](#in-the-lab), [field](#in-the-field))
> - [**Largest Contentful Paint (LCP)**](https://web.dev/lcp/) measures the time from when the page starts loading to when the largest text block or image element is rendered on the screen. ([lab](#in-the-lab), [field](#in-the-field))
> - [**First Input Delay (FID)**](https://web.dev/fid/) measures the time from when a user first interacts with your site (i.e. when they click a link, tap a button, or use a custom, JavaScript-powered control) to the time when the browser is actually able to respond to that interaction. ([field](#in-the-field))
> - [**Interaction to Next Paint (INP)**](https://web.dev/inp/) measures the latency of every tap, click, or keyboard interaction made with the page, and—based on the number of interactions—selects the worst interaction latency of the page (or close to the highest) as a single, representative value to describe a page's overall responsiveness. ([lab](#in-the-lab), [field](#in-the-field))
> - [**Time to Interactive (TTI)**](https://web.dev/tti/) measures the time from when the page starts loading to when it's visually rendered, its initial scripts (if any) have loaded, and it's capable of reliably responding to user input quickly. ([lab](#in-the-lab))
> - [**Total Blocking Time (TBT)**](https://web.dev/tbt/) measures the total amount of time between FCP and TTI where the main thread was blocked for long enough to prevent input responsiveness. ([lab](#in-the-lab))
> - [**Cumulative Layout Shift (CLS)**](https://web.dev/cls/) measures the cumulative score of all unexpected layout shifts that occur between when the page starts loading and when its [lifecycle state](https://developer.chrome.com/blog/page-lifecycle-api/) changes to hidden. ([lab](#in-the-lab), [field](#in-the-field))
> - [**Time to First Byte (TTFB)**](https://web.dev/ttfb/) measures the time it takes for the network to respond to a user request with the first byte of a resource. ([lab](#in-the-lab), [field](#in-the-field))
>
> While this list includes metrics mesuring many of the various aspects of performance relevant to users, it does not include everything (e.g. runtime responsiveness and smoothness are not currently covered).
>
> In some cases, new metrics will be introduced to cover missing areas, but in other cases the best metrics are ones specifically tailored to your site.
