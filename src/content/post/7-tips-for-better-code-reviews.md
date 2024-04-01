---
title: '7 tips for better Code Reviews'
publishDate: '5 October 2020'
description: 'How to be a better “code reviewer” by going through 7 concrete tips.'
tags: ['pr', 'code reviews']
---

Yesterday a question popped up on our internal Slack workspace on how to do good code reviews on
pull requests. The question prompted a lot of enthusiasm and several elaborated answers. It’s
clearly an important question that affects most of us, which many have spent a lot of time
reflecting on. We thought this would be a perfect opportunity to share our experiences and make a
document for future reference to ensure a good development culture in different teams.

This post will cover how to be a better “code reviewer”. We will not cover how to write better pull
requests — look out for that post in the future. This post was initially published over at
[Variant blog](https://blog.variant.no/7-tips-for-better-code-reviews-ab06b87534bc).

## 1. Be nice

It is important to keep a friendly tone and an informal writing style. The characteristic
west-Norwegian tart sarcasm doesn’t work very well in code reviews!

The submitter might have spent a lot of time, and mental energy on writing the code. This means they
could be feeling a bit stressed, or insecure about the content of the pull request. Their subsequent
“investment” in the work will be high, and when eyeing the finish line they are probably impatient
about getting their code merged and into users' hands as quickly as possible.

You, as the reviewer, have the power in this situation, use it carefully and sparingly. Be nice! If
there are protracted discussions that lead nowhere, move them to other platforms like Slack, with
the goal of getting the pull request merged instead of dragging out the process.

## 2. Take the time to understand the underlying goal for the pull request.

Understanding the intention of a change is more important than reading it line by line. When reading
just the code without any context, you will probably get a shallow view of what the code is meant to
do. You might catch “trivial” errors like missing semi-colons, naming issues, stylistic changes,
etc. But it is much harder to pick up on fundamental issues with the solution itself, and the
problems it is trying to solve.

To do this we need to understand the intention of the code. What is it meant to amend or add? What
prompted the need for the pull request? This means the reviewer needs to do more than just read the
code.

Take the time to fundamentally understand the context and consequences of the patch. Read the pull
request description carefully, try the changes yourself (see tip #5), ask questions (see tip #6),
and connect the dots. This way we can communicate on a higher level, in order to suggest alternative
solutions, find logical flaws, or catch misunderstandings. It will also help us as a team to be more
user centric. Instead of just commenting on the code, we can comment on solutions and functionality.

## 3. Provide suggestions for improvement. Show solutions rather than problems.

Often times when you are working on a bug fix or a new feature, you can get excited and/or rushed,
and feel like you want to submit a pull request ASAP. Other times you might be working on a pull
request for several days. Either way, it’s very easy to overlook typos, temporary log statements, or
poor naming of variables when you are working on the code, that’s why the review process is so
important to have.

When reviewing code, it might be easy to look at it with a critical eye and feel like the goal is to
find as many errors as possible. While it is okay to have this intention, it is important to
communicate the errors in a way that is meaningful to the pull request submitter. It’s also easy to
become blind to your own code, so keep that in mind when spotting such mistakes.

Many platforms like GitHub or Azure DevOps have a feature that allows you to submit suggestions in
pull requests. This means the reviewer can give suggestions to code changes for minor mistakes or
typos, instead of defaulting to just pointing out problems and leaving it up to the submitter to
figure it out.

For example, naming things is really hard, so when (a matter of time) you find a poor naming choice,
be constructive about it and provide an alternative instead of criticizing without helping the
situation. The suggestion feature is golden in these cases.

If you find larger errors or blocks of code that could be replaced by something completely
different, you should explain to the submitter what you are thinking and provide a potential
solution. This can be done in person, on Slack, or in the comment section of the pull request. If a
conflict arises, involve others, or count your losses.

## 4. Avoid stylistic, overly nit-picky comments.

People have different views on how they would prefer their code to look like. However discussing it
in the comment section of a pull request might not be the appropriate time to do that. Such things
should already be agreed upon and automated long before you ever get to a pull request.

At the start of a project you and your fellow developers should set the rules for what kind of
automation you want to include in your project, and some sort of formatting tool is always great to
have. It allows you and the people you work with to have a common set of rules — without having to
think about it later. It doesn’t really matter what the rules are, as long as you all are consistent
about it.

Something to keep in mind is, why you are looking at this code at all? It should be about getting
more eyes on a task, but also be about learning from each other. Questions of taste are not really
that relevant in this discussion.

## 5. Don’t be afraid to check out the changes locally!

The great thing about code reviews by pull requests is that it changes the context for how you look
at the code. It takes you out of the familiar setting that your IDE provides, and forces you to view
the changes in a different light. That shift might help you notice mistakes you wouldn’t otherwise.
This is true for both the person who opened the pull request and the reviewers.

But, sometimes there are difficulties with reviewing the code in a web-based interface. The
changeset itself might be too big. In this case, you might find it difficult to navigate the changes
and understand what the impact is. Other times the logic may be too complex to simply read. You’re
stuck on trying to read it line-by-line and “compile it in your head” in order to understand what is
happening.

In these cases, the best way to move forward is usually to check out the changes locally in your
development environment. This allows you to utilize your preferred editor or IDE to navigate big
changesets and run the code to understand the impact or logic complexity. In other words, compile
and run the code on your machine, not in your head.

This might feel like a hurdle in order to be productive as a developer or team. You don’t want to be
a roadblock in order to land changes. But a worse scenario is finding a bug much later, which could
have been caught in a code review. The longer time it takes to find a bug, from the time the code
was written, the more difficulty you might have trying to fix that bug.

## 6. Ask (open-ended) questions.

One can look at a pull request and think of it as a process for checking the robustness of code. And
to a certain degree — it is. But that’s not all it is. It is also an act of storytelling and
bookkeeping for how your code came to be in the state that it is in.

Told in other words, the code by itself might not tell the whole story when others try to understand
it. One part of it is comments in the code, but that might only relate to understanding the minor
details of certain files or certain lines of code. A broader picture of why the code is how it is
cannot be painted by just reading the code, the comments, or the repository history.

Pull requests and issues, and the discussion which surrounds them fills an important space when
trying to understand the reason for decisions taken when developing solutions. That means it’s extra
important to have an actual dialog in the process as it unfolds.

For you as a code reviewer, this means that if you don’t understand something, you should never be
afraid to ask questions. It is very likely that someone will come along later, and ponder about the
very same thing you did. This means you will help write the story of why something came to be, not
only what came to be. And at the same time, the person who opened the pull request might reflect on
how they have solved a particular problem, and choose to do it differently if needed.

It’s important to note that while it’s fine to ask critical questions, try to frame them in such a
way that a productive discussion can happen. Open-ended questions are a great tool to utilize here —
don’t try to move the discussion in a certain direction which benefits just you, or put people in
their place. Again, be nice (see tip #1)! Open-ended questions give you much more information than
just confirming your own preconceived opinion.

Instead of asking a close ended question like “This code is messy. Is this really a good way to
handle this edge case?”, give the other person room to tell their story by asking “I don’t quite
understand this code. Can you explain how this solves the edge case?”

## 7. Optimize for throughput, not for gatekeeping.

Everyone is better served if the pull request is merged sooner rather than later. A slow code review
process that peters out into stale pull requests are very demotivating for both reviewers and
submitters.

If something is out of scope then split it out into a new pull request, or take the discussion
somewhere else if it can still be merged. A lot of the details can be fixed later if the code works
as a whole and doesn’t break with the overall architecture. Focus on the big stuff, not the small
potatoes. Look for obvious bugs and logical errors, while being more forgiving of the minor issues.

The code review process should be a valuable learning lesson and not used as a tool for gatekeeping.
Remember you are in this together as a team, and the goal should be to keep the ball rolling. Both
for the sake of keeping up the team motivation, but also to continually deliver value.

---

Find out what works for you and your team. Write down your guidelines for how you want to do code
reviews and find a common consensus. At the very least, have conversations on what you think good
code reviews are.

That’s our 7 tips for how to do better code reviews in your team. Can you think of anything else
that has worked well for you or something we’ve missed?
