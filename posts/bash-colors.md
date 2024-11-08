---
title: ANSI Colors
published_at: 2023-11-04T15:00:00.000Z
snippet: This is an excerpt of my first blog post.
---

> ANSI colors are used by CLI programs to color anything printed on the terminal.  
> With them it's possible to change the font effect and (background) color of a text.

PS: [If you are using **C#** you may not need this.](https://learn.microsoft.com/en-us/dotnet/api/system.consolecolor?view=net-8.0)

<br/>

## Getting Started
<small>`\\033\[[\d;]+m`</small>

To print colored text we need to print an ANSI code before text (it's not displayed).  
Each ANSI code has its own effect.

The base form is `\033[m`.  
We put the codes we want between the `[` and the `m` separated by `;`.  

The `\033` is an escape sequence, that represents ESC.  
In most programming languages the ESC escape sequence is `\033`, `\e` or `\x1b`.

We can also repeat code as much as we want, but never separate sequences that need to be together.

<br/>

## Font Effects

Some terminals don't support some font effects.  
Make sure yours does.
<br/>

| Code    | Effect                       | Note                                                                   |
| ------- | ---------------------------- | ---------------------------------------------------------------------- |
| 0       | Reset presets                | All attributes off
| 1       | Bold                         |
| 2       | Light                        | _Not widely supported_
| 3       | Italic                       | _Not widely supported_; Sometimes treated as inverse
| 4       | Underline                    |
| 5       | Blink                        | Less than 150 per minute
| 6       | Rapid blink                  | _Not widely supported_; MS-DOS ANSI.SYS; 150+ per minute
| 7       | Invert colors                | Swap foreground and background colors
| 8       | Conceal                      | _Not widely supported_
| 9       | Line-through                 | _Not widely supported_; Characters legible, but marked for deletion
| 10      | Primary(default) font        |
| 11–19   | Alternate font               | Select alternate font n-10
| 20      | Fraktur                      | _Hardly ever supported_
| 21      | Bold off or Double Underline | Bold off _not widely supported_; double underline _hardly ever supported_
| 22      | Bold or light off            | Neither bold nor faint
| 23      | Not italic, not Fraktur      |
| 24      | Underline off                | Not singly or doubly underlined
| 25      | Blink off                    |
| 27      | Inverse off                  |
| 28      | Reveal                       | conceal off
| 29      | Line-through off             |
| 51      | Framed                       |
| 52      | Encircled                    |
| 53      | Overlined                    |
| 54      | Not framed or encircled      |
| 58      | Set effet color              | Next arguments are `5;<n>` or `2;<r>;<g>;<b>`, see below
| 55      | Overlined off                |
| 60      | ideogram underline           | _Hardly ever supported_
| 61      | ideogram double underline    | _Hardly ever supported_
| 62      | ideogram overline            | _Hardly ever supported_
| 63      | ideogram double overline     | _Hardly ever supported_
| 64      | ideogram stress marking      | _Hardly ever supported_
| 65      | ideogram attributes off      | Reset the effects of all of 60-64

<br/>

## 2-bit colors

We use **30-39** for foreground color,  
and **40-49** for background color.

`0` Black  
`1` Red  
`2` Green  
`3` Brown  
`4` Blue  
`5` Purple  
`6` Cyan  
`7` White  
`9` Default color

You might be wondering why `8` is not here, it is reserved for higher level colors.

These colors are not static since they can be changed by the user in the terminal's settings.

<br/>

## 4-bit colors
> Bright colors

![Table of 4-bit colors for consoles](/posts/4-bit%20ansi%20color%20table.png)
<br/>

Now, we may use **90-97** for a brighter foreground color,  
and the **100-107** for a brighter background.

<br/>

## 8-bit colors
> More possibilities (256)

![Table of 256 possibilities of colors](/posts/8-bit%20ansi%20color%20table.png)
<br/>

Now, we can choose a color and use it with the pattern `\e[38;5;<color>m` for foreground,
and `\e[48;5;<color>m` for background.

<br/>

## RGB
> All the colors

<img align=right src='posts/rgb%20circle.png' />

To use a RGB color we have the pattern `\e[38;2;<r>;<g>;<b>m` for foreground,
and `\e[48;2;<r>;<g>;<b>m` for background.

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

<br/>

## Examples

> _"Failing and making stupid questions are the best way to learn."_
<br/>

- `\e[1;38;2;124;58;237m`
  - `1` - Bold
  - `38;2; < 124;58;237 >` - RGB purple text color
- `\033[1;4;31m`
  - `1` - Bold
  - `4` - Underline
  - `31` - Red text color
- `\x1b[1;31mSNES Manager \x1b[23mthe best`
  - `1` - Bold
  - `31` - Red text color
  - `23` - Bold off

<br/>
<hr/>
<small>

I already had all this info but [this answer in the StackOverFlow](https://stackoverflow.com/a/33206814/15286947) (recommended) helped me to take it out of my head and taught new stuff.  
Credits also for [Richard](https://stackoverflow.com/users/752843/richard) (the answer's owner).

© 2023 Panda Soli
</small>
