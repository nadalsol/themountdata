---
layout: post
title: Enriquecimiento de datos sector automoción | Manel Guillén | https://www.datocms-assets.com/7606/1538744557-scrap.png
date: 2018-10-06 23:00:00 UTC
categories: article Data automoción/scraping
---

# ![](https://www.datocms-assets.com/7606/1540393212-scrapopt.png)


# Enriquecimiento de datos sector automoción
#### por Manel Guillén
##### 07 OCT 2018

## Contexto

En España, como gran mercado turístico, el volumen de operaciones del canal rent-a-car (RAC) son muy elevadas. Los concesionarios tienen el compromiso de recomprar los vehículos procedentes del canal RAC al cabo de unos meses, que posteriormente tiene que recolocar como vehículos de ocasión.
La empresa del caso se dedica al “re-marketing” (o re-colocación) de vehículos usados en mercados exteriores. Su negocio consiste en buscar concesionarios interesados en importar vehículos de ocasión de características y precio atractiv

## Problema

La empresa, a pesar de ser una empresa líder conocedora del mercado y haber desarrollado procesos y herramientas avanzadas utilizadas por sus comerciales, cree poder **mejorar el proceso actual de identificación de potenciales clientes**.
Hasta el desarrollo del proyecto, el proceso para dar de alta un cliente potencial era buscar por internet concesionarios de estos mercados e introducir los datos uno a uno en la sistema CRM. Además, de no estar seguro de conocer todo los potenciales compradores (concesionarios y mayoristas de vehículos de ocasión de los principales mercados europeos) el proceso no es eficiente en términos de tiempo y personal necesario.

## Solución

Identificamos algunas webs donde figuran la mayoría de los concesionarios de los mercados de interés y capturamos mediante **técnicas de “scraping”** los datos del concesionario (razón social, dirección, teléfono…).
Después de parametrizar las librerías y realizar las pruebas necesarias se descargaron los datos y creamos una base de datos consistente. Finalmente, limpiamos, transformamos y deduplicamos los datos obtenidos contra la base de datos original CRM.

## Resultados

Multiplicamos en un 220% el número de concesionarios potenciales en el CRM, de manera que el volumen de las acciones comerciales y operaciones de venta se ha incrementó sustancialmente.
