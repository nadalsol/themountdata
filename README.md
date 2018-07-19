# The Mount Data

1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Configuration](#configuration)
  * [Multilingual references](#multilingual-references)
  * [Translations](#translations)
5. [Publish](#publish)
6. [Authors](#authors)

## Description

This site has been created using [Jekyll](https://jekyllrb.com/), [GitHub ](https://github.com/) and [GitHub Pages](https://pages.github.com/).

* **Jekyll** is a simple, blog-aware, static site generator.
* **GitHub** is a development platform where you can host and review code.
* **GitHub Pages** is a static site hosting service designed to host your
personal, organization, or project pages directly from a GitHub repository.

## Installation

First install [Ruby](https://www.ruby-lang.org/) and
[RubyGems](https://rubygems.org/).

Then you can install Jekyll with the following command:

```
$ gem install jekyll bundler
```

Clone GitHub repo:

```
$ git clone git@github.com:yourusername/yoursitename.git
```

## Usage

Change into your new directory:

```
$ cd yoursitename
```

Build the site on the preview server:

```
$ bundle exec jekyll server
```

Now browse to http://localhost:4000

♻️&nbsp;&nbsp;**Don't forget to reload your browser to apply new changes.**

## Configuration

Site settings in the `_config.yml` file, are used to personalize your new site.
If you look in the HTML files, you will see them accessed via
`{{ site.title }}`, `{{ site.email }}`, and so on. You can create any custom
variable you would like, and they will be accessible in the templates via
`{{ site.myvariable }}`.

### Multilingual references

Indicate, for each post and page, its language (`lang`) and an unique identifier
(`ref`) to link the different translations. Jekyll will do the rest!

To do so, we will use `lang` et `ref` in the [Front Matter](https://jekyllrb.com/docs/frontmatter/) of each post and page. For
instance, in Spanish:

```
---
title: ¡Hola mundo!
lang: es
ref: hola
---
```

Then, in English:

```
---
title: Hello world!
lang: en
ref: hola
---
```

Or, in Catalan:

```
---
title: Hola món!
lang: ca
ref: hola
---
```

More info:

* [Making Jekyll multilingual](https://www.sylvaindurand.org/making-jekyll-multilingual/)
* [Build a multilingual website with Jekyll](http://chocanto.me/2016/04/16/jekyll-multilingual.html)

### Translations

Just edit the `_config.yml` file to add or modify translations.

Example translation:

```
t:
  es:
    cookie_message:
      text: "The Mount Data utiliza cookies"
      text_link: "política de cookies"
    ...
  ca:
    cookie_message:
      text: "The Mount Data fa servir galetes"
      text_link: "política de galetes"
    ...
  en:
    cookie_message:
      text: "The Mount Data uses cookies"
      text_link: "cookie policy"
    ...
```

Then, in the `cookie-message.html` file, do this to show up the translated
strings for the proper language:

```
<p>
  {{ site.t[page.lang]cookie_message.text }}
  <a href="#">{{ site.t[page.lang]cookie_message.text_link }}</a>
</p>
```

⚠️&nbsp;&nbsp;For technical reasons, the `_config.yml` file is *NOT* reloaded automatically
when you use `$ bundle exec jekyll serve`. **If you change this file, please
restart the server process.**

## Publish

Jekyll's simplified build process with GitHub Pages is one of the biggest
advantages of using Jekyll. GitHub Pages manages your site's build process with
a single push to your site's publishing branch. This is Jekyll's build process
for managing your site:

1. Push file changes to your pages publishing branch.
2. GitHub Pages publishes your site.

Example workflow (assuming `master` branch is your pages publishing branch):

1. Work in the `develop` branch.
2. When your work is finished, merge `develop` branch into `master`.
3. Push your `master` branch.
4. GitHub Pages publishes your site to https://yoursitename.com.

More info:

* [GitHub Pages](https://pages.github.com/)
* [GitHub Pages Basics](https://help.github.com/categories/github-pages-basics/)
* [Using Jekyll as a static site generator with GitHub Pages](https://help.github.com/articles/using-jekyll-as-a-static-site-generator-with-github-pages/)

## Authors

This project has been designed and developed by 🎩&nbsp;&nbsp;🐧&nbsp;&nbsp;[Mr. Puffin Studio](http://mrpuffin.studio/), a communication studio based in Vilassar de Mar, Barcelona.

<table>
  <tbody>
    <tr>
      <td align="center" valign="top">
        <img width="150" height="150" src="https://github.com/nadalsol.png?s=150">
        <br>
        <a href="https://github.com/nadalsol">Nadal Soler</a>
        <p>@nadalsol</p>
        <br>
        <p>Front-end Web Developer</p>
      </td>
      <td align="center" valign="top">
        <img width="150" height="150" src="https://media.licdn.com/dms/image/C5103AQHege8bS0fxaA/profile-displayphoto-shrink_800_800/0?e=1531958400&v=beta&t=nds5VmSUEdw6C4owLp1JzxAbLuVvAintm0tFBM2Ou5M">
        <br>
        <a href="https://www.linkedin.com/in/miriamsoto/">Miriam Soto</a>
        <p>@coolcolors</p>
        <br>
        <p>Senior UI & Visual Designer / Creative Director</p>
      </td>
    </tr>
  </tbody>
</table>
