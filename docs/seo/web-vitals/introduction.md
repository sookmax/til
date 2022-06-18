# Introduction

> From [Web Vitals](https://web.dev/vitals/)
>
> Optimizing for quality of user experience is key to the long-term sucess of any site on the web. Whether you're a business owner, marketer, or developer, Web Vitals can help you quantify the experience of your site and identify opportunities to improve.

## Overview

> Web Vitals is an initiative by Google to provide unified guidance for quality signals that are essential to delivering a great user experience on the web.
>
> Site owners should not have to be performance gurus in order to understand the quality of experience they are delivering to their users. The Web Vitals initiative aims to simplify the landscape, and help sites focus on the metrics that matter most, the **Core Web Vitals**.

## Core Web Vitals

> Core Web Vitals are the subset of Web Vitals that apply to all web pages, should be measured by all site owners, and will be surfaced across all Google tools. Each of the Core Web Vitals represents a distinct facet of the user experience is measurable [in the field](./user-centric-perf-metrics#in-the-field), and reflects the real-world experience of a critical user-centric outcome.
>
> The metrics that make up Core Web Vitals will evolve over time. The current set for 2020 focuses on three aspects of the user experience—_loading_, _interactivity_, and _visual stability_.
>
> The metrics include:
>
> - **Largest Contentful Paint (LCP)** measures _loading_ performance. To provide a good user experience, LCP should occur within **2.5 seconds** of when the page first starts loading.
> - **First Input Delay (FID)** measures _interactivity_. To provide a good user experience, pages should have a FID of **100 milisecods or less**.
> - **Cumulative Layout Shift (CLS)** measures _visual stability_. To provide a good user experience, pages should maintain a CLS of **0.1** or less.
>
> ![Core Web Vitals Thresholds](/img/core-vitals-thresholds.png) _source_: [Next.js - Core Web Vitals](https://nextjs.org/learn/seo/web-performance/vitals-overview)
>
> For each of the above metrics, to ensure you're hitting the recommended target for most of your users, a good threshold to measure is the [**75th percentile value**](https://web.dev/defining-core-web-vitals-thresholds/#choice-of-percentile) of page loads, segmented across mobile and desktop devices. (the 75th percentile value for each metrics of all visits to the page—lowest to highest where highest being the worst)

:::tip percentile
A number where a certain percentage of values in the frequency distribution falls below that number.

So if 75th percentile value for a certain metric is _k_, then 75% of all the collected metric values fall below _k_.
:::
