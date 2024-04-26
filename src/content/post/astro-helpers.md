---
title: 'Astro Helper Components for Conditional Early Exit'
publishDate: '26 April 2024'
description:
  'Doing early exit it Astro components isnt straightforward, so here is a couple of component
  helpers to make it easier.'
tags: ['Astro', 'frontend']
---

If you are used to React, component structures in Astro (and Svelte) can feel somewhat limiting as
it is more markup-oriented. One thing I often miss when writing Astro components is the ability to
do an early exit. Meaning this:

```tsx
function MyComponent() {
  if (someCondition) {
    return <h1>Not found</h1>;
  }

  return <>Larger stuff over here</>;
}
```

There are several schools of thoughts on doing early exits in components and functions in general,
but for me it always makes it easier to cognitively clean up. As in "now I'm done with this, from
here on out, don't think about it". You can also do this without an early exit:

```tsx
function MyComponent() {
  return <>{someCondition ? <h1>Not found</h1> : <>Larger stuff over here</>}</>;
}
```

But for me, this doesn't make it so I don't have to think about it as a) it is more syntactically
intertwined, and b) indents the code making it visibly affected. But this is what you'd have to do
in Astro as this is not possible:

```astro
---
// some setup
---

{someCondition && (
  return <h1>Not found</h1>
)}
```

You would always have to do this:

```astro
---
// some setupt
---

{someCondition ? <h1>Not found</h1> : <>Larger stuff over here</>}
```

Not a big issue, but for cases where you want to show something or nothing at all, I find it
distracting:

```astro
---
// some setupt
---

{someCondition && <>Larger stuff over here</>}
```

This is especially apparent when having lists that can be empty:

```tsx

{items.length === 0 ?
  <p>No items</p>
: (

  <ul>
    {items.map(_item => <li />)}
  </ul>
)}
```

God forbid having nested lists.

## The Helpers

We can make this less noisy with simple helper components. Nothing magical or revolutionary, but
just a reminder that creating helper components is useful.


### Null or show

Show something only if it is defined

```astro title="IfSlot.astro"
---
interface Props<T> {
  data: T;
}
const { data } = Astro.props;
---

{!data ? <></> : <slot />}
```

### Empty list or show

Particularly handy as you often want to have wrapping container around lists:

```astro title="EmptyOrSlot.astro"
---
interface Props {
  items?: any[];
}
const { items } = Astro.props;
---

{items.length == 0 ? <></> : <slot />}
```

Usage:

```astro
<EmptyOrSlot items={myItems}>
  <ul>
    {myItems.map(() => <li></li>)}
  </ul>
</EmptyOrSlot>
```

This can be done even more handy by adding several slots:

```astro title="EmptyOrSlot.astro"
---
interface Props {
  items?: any[];
}
const { items } = Astro.props;
---

{items.length == 0 ? <slot name="empty" /> : <slot />}
```

Usage:

```astro
<EmptyOrSlot items={myItems}>
  <p slot="empty">No items</p>
  <ul>
    {myItems.map(() => <li></li>)}
  </ul>
</EmptyOrSlot>
```

Making use of multiple slots like this is very flexible as you can control what
type of content to show without limiting to just doing strings.


```astro
<EmptyOrSlot items={myItems}>
  <SomeSuperFancyMessageBox slot="empty" />

  <ul>
    {myItems.map(() => <li></li>)}
  </ul>
</EmptyOrSlot>
```
