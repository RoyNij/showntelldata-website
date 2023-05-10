---
title: "Digital Yearbook"
date: 2023-05-09T11:28:55-05:00
draft: false
banner: "/images/projects/digital-yearbook-banner.png"
link: "https://yearbook.showandtell.dev"
year: 2022
design: ["La Cuarta Pared", "Show 'n Tell Data"]
technology: ["WordPress", "Javascript", "Pixi.js", "GSAP" ]
tags: ["connect", "visualize"]
summary: "A fun experience to navigate through sections of a digital yearbook, developed to work within a WordPress environment"
weight: 1
---

## Requirements

* Develop a fun and entertaining way to go through the different sections of the digital yearbook
* Develop a digital yearbook that is responsive to all types of devices
* Develop a yearbook that can be easily used within an existing Wordpress environment

This project was developed for a local school to publish a digital version of their yearbook accessible to their students and parents. The design was created by [La Cuarta Pared](https://www.lacuartapared.com) and the [version](https://yearbook.showandtell.dev) that is publicly viewable was adjusted for privacy reasons.

## Solutions

### Moving through the canvas
The digital yearbook is designed to be explored, and to facilitate that you can move your mouse in the direction you want to go and the view moves in that direction until you hit the limit of the canvas. This way we could create clusters of sections and people would be able to explore the canvas and find them by just moving their mouse.

{{< rawhtml >}}
<video width="100%" autoplay loop>
    <source src="/images/projects/digital-yearbook-movement.mp4" type="video/mp4" />
</video>
{{< /rawhtml >}}

Then, by clicking on a section it opens up an iframe which would lead you to the page within the website of that section. In the example view it just opens up the iframe with this same website, but the back-end is set up in such a way that it could be any URL.

### Additional navigation
Because not everyone wants to explore, we also added a menu that quickly take users to the sections they want to see.

![digital yearbook menu](/images/projects/digital-yearbook-menu.png)

### Sounds & Music
To add to the experience we also added some background music and sound effects for when users hover over the different sections. As well as a big mute button for those who don't like autoplay music on websites (like me).

![sound and mute button](/images/projects/digital-yearbook-sound.png)

### Making it responsive
Because the mouse movements aren't available on mobile and touch devices, we added the possibility to move through the canvas by dragging the canvas, so that movement was also easily achieved for those types of devices.
|   |
| :----: |
| ![digital yearbook responsive navigation](/images/projects/digital-yearbook-responsive.png) |

