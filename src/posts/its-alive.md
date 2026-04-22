---
title: PulseMap: a Protocol for Synchronizing and Augmenting Audio
date: 2026-04-21
description: I embark on a two-week sprint to provide a revolutionary medium for artistic creativity. Also, dance raves.
---

![Mona Mustache](/mona-lisa-mustache.jpg)

Today, we [start the revolution](https://github.com/hartphoenix/pulsemap).

## The Problem Space

The playground I've wanted to play in for years is the music-sharing & music-*augmenting* playground. I want to take a favorite song, add a harmony line, send to a friend, and get back their musical response. But any app that could offer that kind of functionality would **break copyright law,** so nobody wants to build it; they can only get punished for their efforts. Right?

## WRONG.

There's a solution. It's a little complicated, but I think I can break it down.

Let's say I want to add a mustache to the Mona Lisa and send it to you, but I'm not allowed to A) put paint on the Mona Lisa or B) take her off the wall and send her mustachioed face to you in the mail. What's the next-best thing? Actually, what's a BETTER thing?

Well, I can take a piece of plastic wrap, stretch it over the canvas, paint a (flattering) mustache on it, and mark the four corners of the canvas for positioning. Then I just send you the plastic wrap, and you can stretch the piece over *your* copy of the Mona Lisa... hang on, there may be a better metaphor for this...

Too late, I've already typed the words. Now, imagine that layer of plastic wrap is extremely resilient, reusable, versatile, and accurate. It tells you *exactly* where to position the mustache, and it lets you add any material you want: googly eyes, glitter, a pair of literal sunglasses, animations...

Now imagine exchanging Mona here for "Bohemian Rhapsody" or "Crazy Train," and the googly eyes and glitter represent *any action you can sequence on a timeline -- auditory or otherwise.*

## But with what tech?

There's a hashing function (math that turns sound waves into strings of letters and numbers) that you can use on an audio file to make the plastic wrapper. Every time you give it the same audio waveform, the function outputs the same tiny sequence of letters. Like, every time this function hears the first bar of the second chorus of Billie Jean, it outputs 'AQADtFqSMI'. The sound-to-letters matching is 1-to-1, so if I later looked up 'AQADtFqSMI' in a database, I'd get back ONLY "Billie Jean, chorus 2, bar 1". Shazam uses this principle to cheaply look up what song you're listening to. (For copyright reasons, it's good that these letters can never turn back into a sound file; they're just information about the sound).

To take it a little deeper, my "plastic wrap" metaphor is hiding **two** layers: 

1. the first layer is a detailed map of the song, built on that hashing function – but it's not held in a private database at Shazam, and it's not just for telling you which song is which. It's a *transferrable* map with a tiny file size, and it tells you what *beat* of the song you're at, what lyric you're hearing, what chord is being played, what verse you're on -- really, any intrinsic property of the recording and when it occurs. I call this layer a **PulseMap**, because it uses the song's unique pulse as a reference point to map all its other properties.
2. the second layer is a portable, interchangeable artistic canvas. You can make infinitely many of these canvases that couple with the same underlying PulseMap of "Bohemian Rhapsody", all for different purposes, and you can stack as many layers together as you like. On one layer, you can sequence an instructional dance video; another layer can send instructions to your lighting kit and turn the whole room pulsing blue whenever Freddie says "Galileo!"; still another layer can cue the USB-powered fish feeder that gets your pet koi to swim in circles during the piano ballad sections. *Art.*

Bonus! The second layer can **tell the first layer what to do**: when to speed up or slow down, how many times to loop the chorus, what song to play next -- you can plan/record a whole custom DJ set, or even make conditional logic that changes the sequence of playback based on environmental changes. If the koi swim counter-clockwise, play a Beethoven mashup over the Bohemian chorus. **ART.**

Superbonus: you can tell arbitrarily many map-holders what *you're* going to do with *your* PulseMap, and let them synchronize actions on their own PulseMap. You can do so without having to serve millions of people the same song file over HTTP (a technical and legal nightmare). Instead, you just say "when you reach millisecond number 201456, go at half-speed" -- and a million people will simultaneously hear Alvin and the Chipmunks transform into regular humans singing a *really* slow Christmas song. Or whatever.

## The Legal Angle

Making and sharing either of these two layers touches none of the copyrighted material you'd be fined for sharing -- and besides, there's no good reason for the copyright holder to prevent you from sharing a map! In fact, it *helps their business to let you share these added layers, because it raises the demand for their service.* Anyone who wants to watch your instructional dance video still needs to get the song from some provider. (Without the PulseMap, you'd have to send the song file itself -- by sharing only the map, you leave the listener to get their own damn song).

The nice part for the listener is, the fingerprint hashing function can match to almost any sound source (i.e. any music service they want to use), and can synchronize the added layers to the song's exact playback position. Queue up the song on any player, and the augmented stuff syncs up with it effortlessly.

## More to come...

In the next two weeks,
1. I'm building the protocol for PulseMap [here](https://github.com/hartphoenix/pulsemap), with a script that gobbles up songs and poops out maps. The goal is to save those maps in an open database anyone can use. No need to map every song -- you just map whatever song you want to add layers to, and it only takes 10-15 seconds. The map ends up being 50-100kb.
2. I'm building a [demo app](https://github.com/hartphoenix/pulseguide) that uses PulseMaps of songs to synchronize chord charts, lyric sheets, and practice loops with your own song playback controls, and makes the lyrics/chords into a control surface; play a song through your Spotify or YouTube account and get full control of an interactive chord chart you can use to learn the song on your favorite instrument.
