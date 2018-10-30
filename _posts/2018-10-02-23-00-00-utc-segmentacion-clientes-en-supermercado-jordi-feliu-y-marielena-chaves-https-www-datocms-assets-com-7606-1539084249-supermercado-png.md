---
layout: post
title: Segmentacion clientes en supermercado | Jordi Feliu y Marielena Chaves | https://www.datocms-assets.com/7606/1539084249-supermercado.png
date: 2018-10-02 23:00:00 UTC
categories: article Análisis supermercados/segmentación/clientes
---

# ![](https://www.datocms-assets.com/7606/1539084249-supermercado.png)

# Segmentación de clientes en supermercados
#### por Jordi Feliu y Marielena Chavez
##### 03 OCT 2018

## Contexto

No hay dos clientes iguales. Cada uno tiene su perfil, preferencias, hábitos de compra, cesta de productos. ¿Cómo podríamos agrupar a los clientes de comportamiento parecido? 
El gran número de variables y volumen de datos del histórico de transacciones de un supermercado hace que segmentación no sea un reto fácil.

### ![](https://www.datocms-assets.com/7606/1539000375-segmentacioncompra.png)

## Problema

Identificar y cuantificar a los distintos grupos de clientes de un supermercado es el primer paso para definir una **estrategia CRM diferenciada** para cada grupo de cliente.

## Solución

Modelo de segmentación para identificar grupos homogéneos y clasificar a los clientes en ellos. 

### Exploratorio
* Estadísticas de resumen de las variables por tipo de datos			
* Distribuciones de variables por tipo de datos			
* Correlaciones y asociaciones importantes entre las variables.			
* Identificación de las variables relevantes para la estimación de la demanda. Datos transaccionales (tickets): productos y marcas, precios, cantidades, frecuencia y recència de compra, canal, fecha compra etc...
Datos clientes: edad, sexo , dirección...

## Preparación 
* Eliminación de outliers			
* Transformación de los datos y creación de nuevas variables: normalización, categorización, índices, variables indicadoras, etc.			
* Selección de la muestra: Train (75%) y Test (25%)	

### Modelización

***Modelo Cluster, en dos etapas***. Herramienta de exploración diseñada para descubrir las agrupaciones naturales de un conjunto de datos. 									
Permite analizar grandes bases de datos mediante la construcción de un árbol de características de conglomerados que resume los registros.
Permite trabajar conjuntamente con variables de tipo mixto (cuali y cuantitativas). 										
***Step1***: Construcción del árbol Cluster Features (CF). Agregación de casos, dentro de un mismo nodo o formando otro nodos hojas (número elevado de preclusters). Nos basamos en la similaridad existente, usando las medidas de distancia.							
***Step 2***: Aplicación del método jerárquico (Agrupación de los nodos hojas). Usamos un algoritmo aglomerativo de clusters, produciendo un rango de soluciones.Para determinar el número de clusters, cada solución es comparada usando los criterios Schwarz's Bayesian Criterion (BIC) o Akaike Information Criterion (AIC).

## ![](https://www.datocms-assets.com/7606/1539084087-segmentacioncluster.png)

### Validación
Comparación de los resultados de la muestras aleatorias Train (75%) y la Test (25%). El modelo Cluster obtenido es correcto si los resultados entre las dos muestras son consistentes respecto al número de clusters y el perfil de cada uno.

### Mapa de posición de segmentos en matriz Lealtad/Valor

Cada uno de los grupos obtenidos pueden ser descritos y posicionados en una matriz Lealtad/Valor.

## ![](https://www.datocms-assets.com/7606/1539084093-segmentsdescription.png)

Posteriormente, con una finalidad operativa, realizamos una segunda agrupación.

## ![](https://www.datocms-assets.com/7606/1539084096-segmentsgrouped.png)

## Resultados

Encontramos grupos de clientes con comportamiento distinto y los pudimos describir en términos demográficos, patrón de compra, ciclo de vida, recencia, frecuencia y valor de compra…

Fue una información necesaria para: 
-	Definir la **estrategia principal** por grupo: reconocimiento, up&cross selling, retención y abandono.
-	Definir el **volumen de inversión** y propuesta de valor
-	Definir el **plan de contactos**

