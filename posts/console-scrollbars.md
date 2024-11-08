---
title: Internal Console Scrollbars
published_at: 2023-11-04T15:00:00.000Z
snippet: How to add virtual scrollbars in your CLI app
---

This post is based on my [console-scroll](https://github.com/pandasoli/console-scroll) repo.

As you may know, the scrollbar's thumb represents the content that we are seeing now.  
So if we have **small** content the thumb should be **large**;  
if we have **large** content, the thumb should be very **small**.

When we scroll down, we skip lines that we already read.  
If we have a **small** content, we skip about **1** or **2** lines;  
If we have a **large** content, we skip about **4** or **5** lines.

**:warning: Warning**  
In this post when I refer to "size" it will depend on the direction of your scrollbar.  
For a vertical scrollbar, it is height;  
for a horizontal scrollbar, it is width.

<div align='right'>

## Formulas
</div>

This is the formula for knowing the size of the thumb:
```
track_size * 2 - max_content_size
```

This is the formula for knowing how many lines we need to skip:
```
thumb_pos * (max_content_size - viewport_size) / (viewport_size - thumb_size)
```

<br/>

The `track_size` is the size of the scrollbar.
You may want to add buttons, or even make the scrollbar smaller than the viewport, so I added this in the formula, but if you don't want, just consider it the viewport size.

<br/>
<hr/>

<small>
I'll probably never explain these formulas because I forgot how they work, and maybe I never thought well about their math and just changed some properties 'till they work after spending a day thinking about the base formula to stop thinking.
<br/>
<br/>

© 2023 Panda Soli
</small>
