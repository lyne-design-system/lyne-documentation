<template>
  <Layout>
    Current locale: {{ $i18n.locale }}
    <p>{{ $t('content.translation1') }}</p>

    <h1>Playground</h1>

    <h2>Int / Float / Bool</h2>
    <p>Integer: {{$page.lyne.playground.testInt}}</p>
    <p>Float: {{$page.lyne.playground.testFloat}}</p>
    <p>Bool: {{$page.lyne.playground.testBool}}</p>

    <h2>Date & Time</h2>
    <p>{{$page.lyne.playground.testDateTime}}</p>

    <h2>JSON</h2>
    <p>{{$page.lyne.playground.testJson}}</p>

    <h2>Link to other Model</h2>
    <p>{{$page.lyne.playground.testLink}}</p>

    <h2>Text</h2>
    <p>{{$page.lyne.playground.testText}}</p>

    <h2>Color</h2>
    <p>hex: {{$page.lyne.playground.testColor.hex}}</p>
    <p>r: {{$page.lyne.playground.testColor.red}}</p>
    <p>g: {{$page.lyne.playground.testColor.green}}</p>
    <p>b: {{$page.lyne.playground.testColor.blue}}</p>
    <p>a: {{$page.lyne.playground.testColor.alpha}}</p>

    <h2>Location</h2>
    <p>Long: {{$page.lyne.playground.testLocation.longitude}}</p>
    <p>Lat: {{$page.lyne.playground.testLocation.latitude}}</p>

    <h2>PDF</h2>
    <p>Tags: {{$page.lyne.playground.testPdf.tags}}</p>
    <p>Title: {{$page.lyne.playground.testPdf.title}}</p>
    <p>Alt: {{$page.lyne.playground.testPdf.alt}}</p>
    <p>Custom data: {{$page.lyne.playground.testPdf.customData}}</p>
    <p>Basename: {{$page.lyne.playground.testPdf.basename}}</p>
    <p>Filename: {{$page.lyne.playground.testPdf.filename}}</p>
    <p>Format: {{$page.lyne.playground.testPdf.format}}</p>
    <p>Url: {{$page.lyne.playground.testPdf.url}}</p>

    <h2>Image</h2>
    <p>Tags: {{$page.lyne.playground.testMedia.tags}}</p>
    <p>Title: {{$page.lyne.playground.testMedia.title}}</p>
    <p>Alt: {{$page.lyne.playground.testMedia.alt}}</p>
    <p>Custom data: {{$page.lyne.playground.testMedia.customData}}</p>
    <p>Basename: {{$page.lyne.playground.testMedia.basename}}</p>
    <p>Filename: {{$page.lyne.playground.testMedia.filename}}</p>
    <p>Format: {{$page.lyne.playground.testMedia.format}}</p>
    <p>Url: {{$page.lyne.playground.testMedia.url}}</p>
    <p>Src: {{$page.lyne.playground.testMedia.responsiveImage.src}}</p>
    <g-image :src="$page.lyne.playground.testMedia.responsiveImage.src" />

    <h2>SVG</h2>
    <p>Tags: {{$page.lyne.playground.testSvg.tags}}</p>
    <p>Title: {{$page.lyne.playground.testSvg.title}}</p>
    <p>Alt: {{$page.lyne.playground.testSvg.alt}}</p>
    <p>Custom data: {{$page.lyne.playground.testSvg.customData}}</p>
    <p>Basename: {{$page.lyne.playground.testSvg.basename}}</p>
    <p>Filename: {{$page.lyne.playground.testSvg.filename}}</p>
    <p>Format: {{$page.lyne.playground.testSvg.format}}</p>
    <p>Url: {{$page.lyne.playground.testSvg.url}}</p>

    <h2>SEO</h2>
    <p>Description: {{$page.lyne.playground.testSeo.description}}</p>
    <p>Image: {{$page.lyne.playground.testSeo.image.responsiveImage.src}}</p>
    <p>Title: {{$page.lyne.playground.testSeo.title}}</p>
    <p>TwitterCard: {{$page.lyne.playground.testSeo.twitterCard}}</p>

  </Layout>
</template>

<page-query>
  query {
    lyne {
      playground {
        testBool
        testInt
        testFloat
        testPdf {
          tags
          title
          alt
          customData
          basename
          filename
          format
          url
        }
        testSvg {
          tags
          title
          alt
          customData
          basename
          filename
          format
          url
        }
        testMedia {
          tags
          title
          alt
          customData
          basename
          filename
          format
          url
          responsiveImage {
            src
          }
        }
        testDateTime
        testSeo {
          description
          image {
            responsiveImage {
              src
            }
          }
          title
          twitterCard
        }
        testJson
        testLink {
          componentName
        }
        testText
        testColor {
          hex
          alpha
          red
          green
          blue
        }
        testLocation {
          latitude
          longitude
        }
      }
    }
  }
</page-query>

<style>
</style>
