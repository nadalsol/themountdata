---
layout: post
title: Pasos de un proyecto de Análisis de Datos | Roger Lucea | https://www.datocms-assets.com/7606/1538729544-data-project.png
date: 2018-10-19 23:00:00 UTC
categories: article Consultoría datos/análisis/visualización/acción
---

# ![](https://www.datocms-assets.com/7606/1540393203-data-projectopt.png)


# Pasos de un proyecto de Análisis de Datos

#### por Roger Lucea
##### 20 OCT 2018

Los proyectos de Análisis de Datos se estructuran en 5 etapas:

* **Estrategia**: Entender el negocio y establecer las preguntas de negocio y datos disponibles para responderlas.
* **Datos**: Captar y armonizar fuentes de datos de diferentes sistemas (transaccionales, social, web, opendata…).
* **Análisis**: Encontrar patrones y modelos en la información (abandono, segmentación, correlaciones…).
* **Visualización**: Mostrar los datos de manera que sean más interpretables (dashboards, reports, infografías, mapas…).
* **Acción**: Utilizar los datos para tomar mejores decisiones, mejorar procesos o mejorar/crear productos y servicios basados en datos.

## ![](https://www.datocms-assets.com/7606/1538729694-data-project-steps.png)

## Estrategia
El punto de partida de un proyecto de datos es tener buena comprensión del modelo de negocio actual y visionar cómo nos gustaría que fuera. Podemos utilizar cualquier framework de desarrollo de modelos de negocio que nos ayude a reflexionar sobre nuestro negocio. Por ejemplo, podemos utilizar un modelo popular como “Lienzo de Generación de modelos de negocio” (Osterwalder, Yves Pigneur, Alan Smith) [Canvas](https://strategyzer.com/canvas)

### ![](https://www.datocms-assets.com/7606/1538731833-canvas-negocio.png)

Con las necesidades de los segmentos de clientes y la propuesta de valor en mente podemos empezar el proyecto de datos haciéndolos las **preguntas de negocio** a las cuales querríamos responder con un análisis de datos:

**Preguntas de Clientes**
* ¿Qué clientes son leales y cuales han desertado?
* ¿Factores de Leealtad?
* ¿Valor de Vida de cada uno de los Clientes?
* ¿A qué Segmento pertenece cada Cliente?
* ¿Perfil de mis clientes?
* ¿Previsión de la Demanda?
* ¿...?

**Preguntas de los Producto/Servicios/Propuestas de valor**
* ¿Qué precepción tienes nuestros clientes de nuestros productos/servicios?
* ¿Qué productos recomendar a un cliente?
* ¿Cómo es la cesta de la compra de un Cliente tipo?
* ¿A qué precio, oferta debería aplicar a un producto/servicio?
* ¿Cuál es el patrón de compra de un Cliente?
* ¿...?

**Preguntas de la relación con nuestros Clientes**
* ¿Cómo es el Ciclo de Vida/Compra de mis clientes?
* ¿Cómo mejorar mi programa de captación?
* ¿Cómo mejorar mi programa de fidelización?
* ¿Cómo mejorar la prescripción?
* ¿Qué tareas realizar desde central y cuáles desde las franquicias?
* ...

**Preguntas de los Canales**
* ¿Resultados por canal a nivel de alcance, interacción…?
* ¿Atribución de ventas a la estrategia de canales?
* ¿Cuál es el rol a jugar por cada canal?
* ¿Cómo mejorar la experiencia en el punto de venta o e-commerce?
* ...

**Preguntas de los Recursos clave**
* ¿Ubicación óptima de nuestros puntos de venta?
* ¿Cómo se relaciona nuestra organización?
* ¿Previsión de fallos en una máquina o servicio?
* ¿Comportamientos anómalos, fraude?
* ¿Riesgo de un producto defectuoso?
* ...

**Preguntas de las Actividades principales**
* ¿Cómo optimizar la cadena de suministros?
* ¿Cómo minimizar desperdicios?
* ¿Cómo optimizar rutas de reparto?
* ¿Cuáles son nuestros mejores proveedores?
* ¿Nivel de cumplimentación de los procesos establecidos?
* ...

**Preguntas del mundo Financiero**
* ¿Cuánto debería invertir en cada cliente?
* ¿Cómo distribuyo mi presupuesto de marketing/ventas?
* ¿Fuentes generadoras de ingresos y costes?
* ¿Cuál es el valor potencial de mi cartera de clientes
* ¿Precio óptimo para maximizar rentabilidad a medio plazo?
* ¿Qué servicios descontinuar para reducir costes?
* ...

**Preguntas de la Competencia**
* ¿Qué precios está aplicando mi competencia?
* ¿Densidad de competencia en una área geográfica?
* ¿Estudio penetración/cuota de mercado? 

## Datos

Ahora tenemos que seleccionar los **datos internos y externos** que pensamos nos podrían ayudar a responder a las preguntas de negocio y establecer el proceso para poder trabajar con ellos:

**Selección de datos** 
* Internos: clientes, producto, precio, comunicaciones, transacciones, personal… 
* Externos: mercado, competencia, clima, festividades/eventos… 

**Obtención de datos**
* Procesos ETL (Extraction/Transformation/Loading)
* API (Application Programming Interface)
* Scraping (obtención datos procedentes de las webs)
* Webservices
* Formularios web

**Preparación de datos**
* Auditoría de datos
* Reglas de datos y transformaciones
* Mapeo de fuentes y campos base de datos

**Validación de datos**
* Limpieza
* Normalización
* Deduplicación
* Consolidación

**Inyección y almacenaje de datos**
* Modelización
* Infraestructura
* Procesos input/output

## Análisis

A continuación desarrollaremos los **modelos analíticos** que nos den respuesta a las preguntas priorizadas:

**Exploratorio**
* Estadísticas de resumen de las variables por tipo de datos			
* Distribuciones de variables por tipo de datos			
* Correlaciones y asociaciones importantes entre las variables.			
* Identificación de las variables relevantes.

**Preparación** 
* Eliminación de outliers			
* Transformación de los datos y creación de nuevas variables: normalización, categorización, índices, variables indicadoras, etc.			
* Selección de la muestra: Train (75%) y Test (25%)	

**Modelización**
* Segmentación & Perfil del Cliente
* Valor de Vida de un Cliente
* Deserción Cliente
* Venta cruzada
* Cesta de la compra
* Recomendador de productos
* Resultados Campañas
* Modelo de Atribución
* Test A/B
* …			

## Visualización

Para facilitar la comprensión de los datos y los modelos analíticos tenemos que desarrollar herramientas de **visualización**

**Definición** 
* Usuarios y necesidades
* Dimensiones de la información y KPIs
* Funcionalidades (comparador, mapas, alertas, integración modelos, exportaciones…)
* Estilo, parte gráifca
* Modelo de datos

**Inyección**
* Interfaces de datos al dashboard
* Carga de datos
* Error handling
			
**Desarrollo** 
* Dashboard de Contadores y Segmentaciones
* Dashboard Resultados de Campañas
* Dashboard Integral de Marketing
* Dashboard Cesta Productos y Pricing
* Dashboard Ventas
* Dashboard Proveedores
* Dashboard Mercado & Investigación
* Dashboard Calidad datos

## Acción

Finalmente, el proyecto de datos nos tiene que servir para llevar a cabo **acciones** que mejore nuestro negocio a nivel de:

* Mejora la toma de **decisiones** de negocio
* Mejorar los **procesos** actuales
* Mejorar o crear **productos/servicios** basados en datos
